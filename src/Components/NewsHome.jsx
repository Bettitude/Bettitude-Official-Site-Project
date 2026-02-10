import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import { IoFootballSharp } from 'react-icons/io5';
import { fetchLatestNews } from '../utils/newsService';

const NewsHome = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  // Fetch latest 4 news from Google Sheets
  const loadNews = async () => {
    setLoading(true);
    try {
      const latestNews = await fetchLatestNews(4);
      setNews(latestNews);
    } catch (error) {
      console.error("Error loading news:", error);
      // Fallback to empty array on error
      setNews([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

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

  return (
    <section className="w-full relative bg-[#0B0F19] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
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
            <span className="text-white font-semibold text-xs sm:text-sm">Latest Updates</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight px-4">
              Football News & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Insights</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] max-w-2xl mx-auto px-4">
              Stay updated with the latest football news, match analysis, and exclusive stories from around the world
            </p>
          </div>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {loading ? (
            // Show skeleton loaders while loading
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            // Show actual news cards when loaded
            news.map((article) => (
              <a
                key={article.id}
                href={`/news/${article.id}`}
                className="group bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FFC527]/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
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
              </a>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/news"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#FFC527]/50 transition-all hover:scale-105 group"
          >
            <span>View All News</span>
            <FiArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsHome;