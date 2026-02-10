import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiClock, FiX } from 'react-icons/fi';
import { IoFootballSharp } from 'react-icons/io5';
import { fetchNews, fetchNewsByCategory } from '../utils/newsService';

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: Customize these categories based on your needs
  const categories = [
    'All',
    'Premier League',
    'Champions League',
    'La Liga',
    'Serie A',
    'Bundesliga',
    'World Cup',
    'Transfers',
    'Women\'s Football',
    'General'
  ];

  // Load news based on active tab
  const loadNews = async (category = 'All') => {
    setLoading(true);
    try {
      const newsData = await fetchNewsByCategory(category);
      setNews(newsData);
    } catch (error) {
      console.error("Error loading news:", error);
      setNews([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews(activeTab);
  }, [activeTab]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle article click
  const handleArticleClick = (e, article) => {
    e.preventDefault();
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Skeleton Loader Component
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

  // Modal Component
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
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 bg-[#0B0F19]/80 hover:bg-[#0057B8]/80 text-white p-2 rounded-full transition-all duration-300 hover:rotate-90"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm font-bold px-4 py-2 rounded-full">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-[#0057B8]/30">
                <div className="flex items-center space-x-2 text-[#E0E0E0]/70">
                  <FiClock className="text-[#FFC527]" />
                  <span className="text-sm">{selectedArticle.date}</span>
                </div>
                <span className="text-[#E0E0E0]/70">•</span>
                <span className="text-sm text-[#E0E0E0]/70">{selectedArticle.readTime}</span>
                {selectedArticle.author && (
                  <>
                    <span className="text-[#E0E0E0]/70">•</span>
                    <span className="text-sm text-[#E0E0E0]/70">By {selectedArticle.author}</span>
                  </>
                )}
              </div>

              {/* Excerpt */}
              <p className="text-lg sm:text-xl text-[#FFC527] font-semibold mb-6 sm:mb-8 leading-relaxed">
                {selectedArticle.excerpt}
              </p>

              {/* Full Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-[#E0E0E0] leading-relaxed space-y-4 text-base sm:text-lg">
                  {selectedArticle.content ? (
                    // If you have full content in your data structure
                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                  ) : (
                    // Placeholder content - replace with actual content from your data
                    <>
                      <p>
                        {selectedArticle.excerpt}
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Share or Actions */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#0057B8]/30">
                <div className="flex flex-wrap gap-3">
                  {/* <button className="px-6 py-3 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FFC527]/50 transition-all duration-300">
                    Share Article
                  </button>
                  <button className="px-6 py-3 bg-[#0057B8]/20 border border-[#0057B8]/50 text-white font-semibold rounded-xl hover:bg-[#0057B8]/30 transition-all duration-300">
                    Save for Later
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(5, 87, 184, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 197, 39, 0.5);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 197, 39, 0.7);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}</style>
      </div>
    );
  };

  return (
    <section className="w-full relative bg-[#0B0F19] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              Football News &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Insights</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] max-w-2xl mx-auto px-4">
              Stay updated with the latest football news, match analysis, and exclusive stories from around the world
            </p>
          </div>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 sm:mb-10 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] shadow-lg shadow-[#FFC527]/50'
                    : 'bg-[#0057B8]/10 text-[#E0E0E0] border border-[#0057B8]/30 hover:border-[#FFC527]/50 hover:text-white'
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
            // Show skeleton loaders while loading
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : news.length > 0 ? (
            // Show actual news cards when loaded
            news.map((article) => (
              <button
                key={article.id}
                onClick={(e) => handleArticleClick(e, article)}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FFC527]/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-left w-full cursor-pointer"
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
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#FFC527] transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-[#E0E0E0] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#E0E0E0]/70 pt-3 sm:pt-4 border-t border-[#0057B8]/30">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex items-center space-x-1">
                          <FiClock className="text-[#FFC527]" />
                          <span>{article.date}</span>
                        </div>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
              </button>
            ))
          ) : (
            // No news found
            <div className="col-span-full text-center py-12">
              <p className="text-[#E0E0E0] text-lg">No news articles found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <NewsModal />
    </section>
  );
};

export default News;