import React, { useState } from 'react';
import { FiExternalLink, FiTrendingUp, FiUsers, FiClock, FiAward, FiActivity, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
 import Bettisportsblog from '../assets/Bettisportsblog.png';
import Betsport from '../assets/Betsport.png';
import Probetfav from '../assets/Probetfav.png';
import SportsDisDat from '../assets/SportsDisDat.png'

// Placeholder images - replace with your actual imports
// const Betsport = "https://via.placeholder.com/150";
const BScores = "https://via.placeholder.com/150";
const Bettiblog = "https://via.placeholder.com/150";
// const Bettisportsblog = "https://via.placeholder.com/150";

export default function Product() {
 const products = [
  {
    name: 'BettiSports Blog',
    icon: Bettisportsblog,
    tagline: 'Your Gateway to Premium Sports Content',
    description:
      'BettiSports Blog is your trusted companion in the world of sports journalism and betting intelligence...',
    highlights: [
      'Comprehensive coverage across 20+ major sports leagues worldwide',
      'Team of seasoned analysts and former professional athletes',
      'Meticulously researched articles combining statistical analysis with real-world insights',
      'Pre-match analysis, live game commentary, and post-match breakdowns',
      'Updated hourly with trending news and breaking stories'
    ],
    stats: [
      { label: 'Daily Readers', value: '5K+', icon: FiUsers },
      { label: 'Articles Per Week', value: '50+', icon: FiActivity },
      { label: 'Expert Writers', value: '6+', icon: FiAward }
    ],
    color: 'from-[#FFC527] to-[#ffb700]',
    glowColor: 'shadow-[#FFC527]/50',
    link: 'http://bettisportsblog.com',
    badge: 'Most Popular',

    social: {
      instagram: "https://www.instagram.com/bettisports",
      facebook: "https://www.facebook.com/people/Bettitude-Media/100063636965611/",
      twitter: "https://x.com/bettitude",
      linkedin: "https://www.linkedin.com/showcase/bettitude-media/",
      tiktok: "https://www.tiktok.com/@bettitude_",
      reddit: "https://www.reddit.com/user/bettitude/"
    }
  },

  {
    name: 'ProBetpicks',
    icon: Probetfav,
    tagline: 'Precision Predictions for Winning Bets',
    description:
      'ProBetpicks represents the pinnacle of sports prediction technology...',
    highlights: [
      'AI-powered predictions processing 10M+ data points per match',
      'Industry-leading 95% accuracy rate across major sports',
      'Every prediction verified by professional sports analysts',
      'Detailed prediction reports with confidence ratings and risk assessments',
      'Real-time updates and instant notifications for all picks',
      'Historical performance tracking and transparent results',
      'VIP insider tips and exclusive premium picks',
      'Comprehensive money management and bankroll strategies'
    ],
    stats: [
      { label: 'Accuracy Rate', value: '91%', icon: FiAward },
      { label: 'Active Users', value: '5K+', icon: FiUsers },
      { label: 'Football Covered', value: '15+', icon: FiActivity }
    ],
    color: 'from-[#0057B8] to-[#003d82]',
    glowColor: 'shadow-[#0057B8]/50',
    link: 'https://probetpicks.com',
    badge: 'Pro',

    social: {
      instagram: "https://www.instagram.com/probetpicks",
      facebook: null,
      twitter: "https://x.com/bettitude",
      linkedin: null,
      tiktok: null,
      reddit: "https://www.reddit.com/user/bettitude/"
    }
  },

  {
    name: 'BettiScores',
    icon: Betsport,
    tagline: 'Real-Time Scores & Live Updates',
    description:
      'BettiScores is your comprehensive sports data hub...',
    highlights: [
      'Lightning-fast live updates with less than 1 second delay',
      'Coverage of 500+ live matches simultaneously',
      'Over 10 million data points for comprehensive analysis',
      'Advanced metrics and player performance indicators',
      'Historical data access spanning 20+ years of sports history',
      'Team form analysis and head-to-head comparison tools',
      'Mobile-optimized responsive platform for on-the-go access',
      'Customizable alerts and notifications for your favorite teams'
    ],
    stats: [
      { label: 'Live Matches', value: '1500+', icon: FiActivity },
      { label: 'Update Speed', value: '<0.1s', icon: FiClock },
      { label: 'Data Points', value: '10M+', icon: FiTrendingUp }
    ],
    color: 'from-[#FFC527] to-[#ffb700]',
    glowColor: 'shadow-[#FFC527]/50',
    link: 'https://bettiscores.com',
    badge: 'New',

    social: {
      instagram: "https://www.instagram.com/bettiscores",
      facebook: null,
      twitter: "https://x.com/bettitude",
      linkedin: null,
      tiktok: null,
      reddit: "https://www.reddit.com/user/bettitude/"
    }
  },
  {
   name: 'SportsDisandDat',
  icon: SportsDisDat,
  tagline: 'Premium Sports Merchandise for True Fans',
  description:
    'SportsDisandDat is your go-to destination for authentic sports merchandise, delivering premium jerseys, kits, accessories, and fan gear from top teams and leagues worldwide.',
  highlights: [
    'Authentic jerseys and official fan merchandise',
    'Wide selection across football, basketball, and other major sports',
    'High-quality materials with long-lasting durability',
    'Latest season drops and limited-edition collections',
    'Secure checkout and reliable nationwide delivery',
    'Multiple size options with detailed fitting guides',
    'Mobile-friendly shopping experience for fans on the move',
    'Exclusive deals and discounts for loyal supporters'
  ],
  stats: [
    { label: 'Products Available', value: '1K+', icon: FiActivity },
    { label: 'Order Processing', value: '<24hrs', icon: FiClock },
    { label: 'Happy Customers', value: '5K+', icon: FiTrendingUp }
  ],
    color: 'from-[#FFC527] to-[#ffb700]',
    glowColor: 'shadow-[#FFC527]/50',
    link: 'https://www.sportsdisanddat.com',
    badge: 'New',

    social: {
      instagram: "https://www.instagram.com/bettiscores",
      facebook: null,
      twitter: "https://x.com/bettitude",
      linkedin: null,
      tiktok: null,
      reddit: "https://www.reddit.com/user/bettitude/"
    }
  },
];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0B0F19] to-[#0B0F19]/95 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[700px] h-[400px] sm:h-[500px] lg:h-[700px] bg-gradient-to-r from-[#0057B8]/10 to-[#FFC527]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiTrendingUp className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#B0B8C8] text-xs sm:text-sm font-semibold">Our Ecosystem</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-4">
              Explore Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Products</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B8C8] max-w-3xl mx-auto leading-relaxed px-4">
              A comprehensive suite of tools designed to enhance your betting experience and keep you ahead of the competition
            </p>
          </div>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* Products Sections */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Left Side - Product Info */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Product Header */}
                <div className="space-y-3 sm:space-y-4">
                  {product.badge && (
                    <div className="inline-flex px-2.5 sm:px-3 py-1 bg-[#FFC527] text-[#0B0F19] text-xs font-bold rounded-full">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br  rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                      <img src={product.icon} alt={product.name} loading="lazy" className="w-full h-full object-contain p-2" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                        {product.name}
                      </h3>
                      <p className={`text-sm sm:text-base lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${product.color}`}>
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B0B8C8] leading-relaxed text-sm sm:text-base lg:text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Key Highlights with Bullet Points */}
                <div className="bg-gradient-to-br from-[#0057B8]/10 to-transparent backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
                  <h4 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 flex items-center space-x-2">
                    <FiCheckCircle className="text-[#FFC527] flex-shrink-0" />
                    <span>Key Highlights</span>
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {product.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-2 sm:space-x-3"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFC527] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-[#B0B8C8] leading-relaxed text-sm sm:text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${product.color} text-[#0B0F19] font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
                  style={{ boxShadow: `0 10px 40px ${product.glowColor}` }}
                >
                  <span>Visit {product.name}</span>
                  <FiArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Right Side - Stats Cards */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  {/* Decorative gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 rounded-2xl sm:rounded-3xl`}></div>
                  
                  <div className="relative space-y-4 sm:space-y-6">
                    <h4 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">Platform Statistics</h4>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {product.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="relative bg-gradient-to-br from-[#0057B8]/20 to-transparent backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-[#FFC527]/50 transition-all duration-300 hover:scale-105"
                        >
                          <stat.icon className="text-[#FFC527] text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3" />
                          <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                            {stat.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-[#B0B8C8] font-medium leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional visual element */}
                    <div className={`mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r ${product.color} rounded-xl sm:rounded-2xl text-[#0B0F19] text-center`}>
                      <p className="font-bold text-sm sm:text-base lg:text-lg">
                        Join thousands of users who trust {product.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}