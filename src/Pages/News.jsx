import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiClock, FiX, FiShare2, FiCopy, FiCheck, FiTwitter, FiFacebook, FiLink } from 'react-icons/fi';
import { IoFootballSharp } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { fetchNews, fetchNewsByCategory, fetchNewsBySlug, fetchCategories } from '../utils/newsService';

// ─── OG / Twitter Meta Tag Helpers ────────────────────────────────────────────

const setMetaTag = (selector, attrName, attrValue, content) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const DEFAULT_OG = {
  title: 'Bettitude',
  description: 'Stay updated with the latest about Bettitude, Our Ecosystem, Products, Services, Insights and around Sports Business world as a whole',
  image: `${window.location.origin}/BrandLogo.png`,
  url: `${window.location.origin}/news`,
  type: 'website',
};

const updateOGMeta = (article) => {
  if (article) {
    const url = `${window.location.origin}/news/${article.slug}`;
    setMetaTag('meta[property="og:title"]',       'property', 'og:title',       article.title);
    setMetaTag('meta[property="og:description"]',  'property', 'og:description', article.excerpt);
    setMetaTag('meta[property="og:image"]',        'property', 'og:image',       article.image);
    setMetaTag('meta[property="og:url"]',          'property', 'og:url',         url);
    setMetaTag('meta[property="og:type"]',         'property', 'og:type',        'article');
    setMetaTag('meta[name="twitter:card"]',        'name',     'twitter:card',        'summary_large_image');
    setMetaTag('meta[name="twitter:title"]',       'name',     'twitter:title',       article.title);
    setMetaTag('meta[name="twitter:description"]', 'name',     'twitter:description', article.excerpt);
    setMetaTag('meta[name="twitter:image"]',       'name',     'twitter:image',       article.image);
    document.title = `${article.title} | Bettitude`;
  } else {
    setMetaTag('meta[property="og:title"]',       'property', 'og:title',       DEFAULT_OG.title);
    setMetaTag('meta[property="og:description"]',  'property', 'og:description', DEFAULT_OG.description);
    setMetaTag('meta[property="og:image"]',        'property', 'og:image',       DEFAULT_OG.image);
    setMetaTag('meta[property="og:url"]',          'property', 'og:url',         DEFAULT_OG.url);
    setMetaTag('meta[property="og:type"]',         'property', 'og:type',        DEFAULT_OG.type);
    setMetaTag('meta[name="twitter:card"]',        'name',     'twitter:card',        'summary_large_image');
    setMetaTag('meta[name="twitter:title"]',       'name',     'twitter:title',       DEFAULT_OG.title);
    setMetaTag('meta[name="twitter:description"]', 'name',     'twitter:description', DEFAULT_OG.description);
    setMetaTag('meta[name="twitter:image"]',       'name',     'twitter:image',       DEFAULT_OG.image);
    document.title = 'Bettitude';
  }
};

// ─── Markdown Component Styles ─────────────────────────────────────────────────

const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl sm:text-3xl font-black text-white mt-10 mb-4 leading-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl sm:text-2xl font-bold text-[#FFC527] mt-8 mb-3 leading-snug">{children}</h3>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-white">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#B0B8C8]">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#FFC527] pl-5 my-6 italic text-[#B0B8C8]/75 leading-relaxed">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 list-decimal list-inside text-[#B0B8C8]">{children}</ol>
  ),
  li: ({ children, ordered }) => (
    ordered ? (
      <li className="text-[#B0B8C8] leading-relaxed pl-1">{children}</li>
    ) : (
      <li className="flex items-start gap-2 text-[#B0B8C8] leading-relaxed">
        <span className="text-[#FFC527] font-bold mt-0.5 flex-shrink-0">•</span>
        <span>{children}</span>
      </li>
    )
  ),
  hr: () => (
    <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-[#FFC527]/50 to-transparent" />
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full rounded-xl my-6 object-cover" loading="lazy" />
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="text-[#FFC527] underline-offset-2 hover:underline transition-all duration-200">
      {children}
    </a>
  ),
  p: ({ children }) => (
    <p className="text-[#B0B8C8] leading-relaxed mb-5 text-base sm:text-lg">{children}</p>
  ),
};

// ─── Share Utilities ──────────────────────────────────────────────────────────

/**
 * Build the shareable URL for an article.
 * Uses path-based routing with slug for SEO-friendly URLs
 */
const buildArticleUrl = (article) =>
  `${window.location.origin}/news/${article.slug || article.id}`;

/**
 * Attempt the native Web Share API first (works on mobile + supported desktops).
 * Returns true if the share sheet was opened, false otherwise.
 */
const nativeShare = async (article) => {
  if (!navigator.share) return false;
  try {
    await navigator.share({
      title: article.title,
      text: article.excerpt,
      url: buildArticleUrl(article),
    });
    return true;
  } catch (err) {
    // User cancelled or API unavailable — not an error worth surfacing
    if (err.name !== 'AbortError') console.warn('Web Share API error:', err);
    return false;
  }
};

const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
};

const SOCIAL_NETWORKS = [
  {
    id: 'twitter',
    label: 'Twitter / X',
    icon: FiTwitter,
    color: '#1DA1F2',
    buildUrl: (article, url) => {
      const text = article.excerpt
        ? `${article.title}\n\n${article.excerpt}`
        : article.title;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    },
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: FiFacebook,
    color: '#1877F2',
    buildUrl: (_article, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    // WhatsApp icon not in feather-icons; use a simple SVG inline component
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: '#25D366',
    buildUrl: (article, url) => {
      const text = article.excerpt
        ? `${article.title}\n\n${article.excerpt}\n\n${url}`
        : `${article.title}\n\n${url}`;
      return `https://wa.me/?text=${encodeURIComponent(text)}`;
    },
  },
];

// ─── Share Dropdown ───────────────────────────────────────────────────────────

const ShareDropdown = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);
  const articleUrl = buildArticleUrl(article);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const handleCopy = async () => {
    await copyToClipboard(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialShare = (network) => {
    window.open(network.buildUrl(article, articleUrl), '_blank', 'noopener,noreferrer,width=600,height=500');
    onClose();
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute bottom-full right-0 mb-2 w-56 bg-[#0B0F19] border border-[#0057B8]/50 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50"
      style={{ animation: 'dropdownIn 0.2s ease-out' }}
    >
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)  scale(1); }
        }
      `}</style>

      {/* Header */}
      <div className="px-4 py-3 border-b border-[#0057B8]/30">
        <p className="text-[#FFC527] text-xs font-bold uppercase tracking-widest">Share Article</p>
      </div>

      {/* Social buttons */}
      <div className="p-2 space-y-1">
        {SOCIAL_NETWORKS.map((network) => (
          <button
            key={network.id}
            onClick={() => handleSocialShare(network)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#B0B8C8] hover:bg-[#0057B8]/20 hover:text-white transition-all duration-200 text-sm font-medium"
          >
            <span style={{ color: network.color }}>
              <network.icon size={16} />
            </span>
            {network.label}
          </button>
        ))}

        {/* Divider */}
        <div className="h-px bg-[#0057B8]/30 mx-2 my-1" />

        {/* Copy link */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#B0B8C8] hover:bg-[#0057B8]/20 hover:text-white transition-all duration-200 text-sm font-medium"
        >
          <span className={copied ? 'text-green-400' : 'text-[#FFC527]'}>
            {copied ? <FiCheck size={16} /> : <FiLink size={16} />}
          </span>
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  );
};

// ─── Share Button (card-level) ────────────────────────────────────────────────

const ShareButton = ({ article, stopPropagation = false }) => {
  const [open, setOpen] = useState(false);

  const handleClick = async (e) => {
    if (stopPropagation) e.stopPropagation();

    // Try native share first (great on mobile)
    const shared = await nativeShare(article);
    if (!shared) setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        title="Share article"
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0057B8]/20 border border-[#0057B8]/40 text-[#B0B8C8] hover:bg-[#FFC527]/20 hover:border-[#FFC527]/60 hover:text-[#FFC527] transition-all duration-300 text-xs font-semibold"
      >
        <FiShare2 size={13} />
        Share
      </button>

      {open && <ShareDropdown article={article} onClose={() => setOpen(false)} />}
    </div>
  );
};

// ─── Main News Component ──────────────────────────────────────────────────────

const News = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState(['All']);

  const loadNews = async (category = 'All') => {
    setLoading(true);
    try {
      const newsData = await fetchNewsByCategory(category);
      setNews(newsData);
    } catch (error) {
      console.error('Error loading news:', error);
      setNews([]);
    }
    setLoading(false);
  };

  // Load categories dynamically from Google Sheets on mount
  useEffect(() => {
    fetchCategories().then(setCategories).catch(() => setCategories(['All']));
  }, []);

  useEffect(() => {
    loadNews(activeTab);
  }, [activeTab]);

  // Handle slug in URL - open article automatically
  useEffect(() => {
    if (slug && news.length > 0) {
      const article = news.find(a => a.slug === slug);
      if (article) {
        setSelectedArticle(article);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
      }
    }
  }, [slug, news]);

  // Update OG / Twitter meta tags whenever an article is opened or closed
  useEffect(() => {
    updateOGMeta(selectedArticle);
    return () => { if (!selectedArticle) updateOGMeta(null); };
  }, [selectedArticle]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleArticleClick = (e, article) => {
    e.preventDefault();
    // Navigate to the article's slug URL
    navigate(`/news/${article.slug}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
    // Navigate back to /news when closing modal
    navigate('/news');
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) handleCloseModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // ── Skeleton ──
  const SkeletonCard = () => (
    <div className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden animate-pulse">
      <div className="w-full h-48 sm:h-56 bg-[#0057B8]/20"></div>
      <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
        <div className="h-3 sm:h-4 bg-[#0057B8]/20 rounded w-20 sm:w-24"></div>
        <div className="h-5 sm:h-6 bg-[#0057B8]/20 rounded w-full"></div>
        <div className="h-3 sm:h-4 bg-[#0057B8]/20 rounded w-4/5"></div>
        <div className="flex items-center justify-between pt-3 sm:pt-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="h-3 sm:h-4 bg-[#0057B8]/20 rounded w-16 sm:w-20"></div>
            <div className="h-3 sm:h-4 bg-[#0057B8]/20 rounded w-16 sm:w-20"></div>
          </div>
          <div className="h-3 sm:h-4 bg-[#0057B8]/20 rounded w-12 sm:w-16"></div>
        </div>
      </div>
    </div>
  );

  // ── Modal ──
  const NewsModal = () => {
    if (!isModalOpen || !selectedArticle) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={handleCloseModal}
      >
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-[#0B0F19] to-[#0057B8]/20 border border-[#0057B8]/50 rounded-2xl shadow-2xl overflow-hidden animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 bg-[#0B0F19]/80 hover:bg-[#0057B8]/80 text-white p-2 rounded-full transition-all duration-300 hover:rotate-90"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm font-bold px-4 py-2 rounded-full">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-[#0057B8]/30">
                <div className="flex items-center space-x-2 text-[#B0B8C8]/70">
                  <FiClock className="text-[#FFC527]" />
                  <span className="text-sm">{selectedArticle.date}</span>
                </div>
                <span className="text-[#B0B8C8]/70">•</span>
                <span className="text-sm text-[#B0B8C8]/70">{selectedArticle.readTime}</span>
                {selectedArticle.author && (
                  <>
                    <span className="text-[#B0B8C8]/70">•</span>
                    <span className="text-sm text-[#B0B8C8]/70">By {selectedArticle.author}</span>
                  </>
                )}
              </div>

              {/* Excerpt */}
              <p className="text-lg sm:text-xl text-[#FFC527] font-semibold mb-6 sm:mb-8 leading-relaxed">
                {selectedArticle.excerpt}
              </p>

              {/* Full Content */}
              <div className="max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {selectedArticle.content}
                </ReactMarkdown>
              </div>

              {/* ── Share Actions (now functional) ── */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#0057B8]/30">
                <div className="flex flex-wrap gap-3 items-center">
                  {/* Primary share button — uses native sheet on mobile */}
                  <button
                    onClick={() => nativeShare(selectedArticle).then((shared) => {
                      // nativeShare handled it; nothing more to do
                      // On desktop fallback, you could open a custom sheet here
                    })}
                    className="px-6 py-3 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FFC527]/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <FiShare2 size={16} />
                    Share Article
                  </button>

                  {/* Dropdown share for all platforms */}
                  <div className="relative">
                    <ShareButton article={selectedArticle} stopPropagation />
                  </div>

                  {/* Quick copy-link button */}
                  <CopyLinkButton article={selectedArticle} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(5,87,184,0.1); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,197,39,0.5); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,197,39,0.7); }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-slideUp { animation: slideUp 0.3s ease-out; }
        `}</style>
      </div>
    );
  };

  return (
    <section className="w-full relative bg-[#0B0F19] min-h-screen py-12 sm:py-16 md:py-30 lg:py-30 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <IoFootballSharp className="text-[#FFC527] text-lg sm:text-xl" />
            <span className="text-white font-semibold text-xs sm:text-sm">All News</span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight px-4">
              Bettitude Organisation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> News & Insights</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B8C8] max-w-3xl mx-auto px-4">
              Stay updated and Up-To-Date with the latest about Bettitude, Our Ecosystem, Products, Services, Insights and around Sports Business world as a whole
            </p>
          </div>
          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 sm:mb-10 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] shadow-lg shadow-[#FFC527]/50'
                    : 'bg-[#0057B8]/10 text-[#B0B8C8] border border-[#0057B8]/30 hover:border-[#FFC527]/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {loading ? (
            <>
              {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
            </>
          ) : news.length > 0 ? (
            news.map((article) => (
              <div
                key={article.id}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FFC527]/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-left w-full"
              >
                {/* Clickable card area */}
                <button
                  onClick={(e) => handleArticleClick(e, article)}
                  className="w-full text-left"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6 pb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#FFC527] transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-[#B0B8C8] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </button>

                {/* Meta + Share row (outside the main button to avoid nesting) */}
                <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#B0B8C8]/70 pt-3 sm:pt-4 border-t border-[#0057B8]/30">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex items-center space-x-1">
                        <FiClock className="text-[#FFC527]" />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* ── Share button on each card ── */}
                    <ShareButton article={article} stopPropagation />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#B0B8C8] text-lg">No news articles found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <NewsModal />
    </section>
  );
};

// ─── Standalone Copy-Link Button (used inside modal) ──────────────────────────

const CopyLinkButton = ({ article }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(buildArticleUrl(article));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-6 py-3 border font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 ${
        copied
          ? 'bg-green-500/20 border-green-500/50 text-green-400'
          : 'bg-[#0057B8]/20 border-[#0057B8]/50 text-white hover:bg-[#0057B8]/30'
      }`}
    >
      {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
      {copied ? 'Copied!' : 'Copy Link'}
    </button>
  );
};

export default News;