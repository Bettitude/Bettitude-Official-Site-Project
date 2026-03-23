import React, { useState } from 'react';
import { FiHeart, FiCoffee, FiDollarSign, FiTarget, FiUsers, FiTrendingUp, FiCheckCircle, FiArrowRight, FiAward, FiMonitor, FiServer, FiDatabase, FiZap } from 'react-icons/fi';
import {Link} from 'react-router-dom'
export default function Support() {
  const fundingOptions = [
    {
      icon: FiTarget,
      title: 'GoFundMe',
      description: 'Make a targeted impact on major upgrades like server enhancements and new data API integrations',
      action: 'Support Campaign',
      color: 'from-[#02A95C] to-[#028a4c]',
      link: 'https://gofund.me/a05de651d'
    },
    {
      icon: FiDollarSign,
      title: 'Stripe Donation',
      description: 'Simple, secure one-time support using any major credit or debit card',
      action: 'Make Donation',
      color: 'from-[#635BFF] to-[#4F46E5]',
      link: 'https://donate.stripe.com/5kQ7sLclZ0iH1YL1Ws7Vm01'
    },
    {
      icon: FiUsers,
      title: 'Patreon',
      description: 'Become a long-term patron with monthly recurring support for sustained growth',
      action: 'Become A Patron',
      color: 'from-[#FF424D] to-[#E63946]',
      link: 'https://patreon.com/Bettisportsblog?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink'
    },
    {
      icon: FiCoffee,
      title: 'Buy Me A Coffee',
      description: 'Show immediate appreciation with a small token of gratitude to the team',
      action: 'Buy Coffee',
      color: 'from-[#FFDD00] to-[#FFC527]',
      link: 'https://buymeacoffee.com/bettisportsblog'
    }
  ];

  const partnershipOptions = [
    {
      icon: FiAward,
      title: 'Sponsorship',
      description: 'Partner with us as a sponsor and reach our engaged audience of sports enthusiasts',
      action: 'Become a Sponsor',
      color: 'from-[#0057B8] to-[#003d82]',
      link: 'sponsorship'
    },
    {
      icon: FiMonitor,
      title: 'Advertise With Us',
      description: 'Showcase your brand to thousands of daily visitors through our advertising platform',
      action: 'Start Advertising',
      color: 'from-[#FFC527] to-[#ffb700]',
      link: 'advertisment'
    }
  ];

  const investments = [
    {
      icon: FiDatabase,
      title: 'Premium Data Feeds',
      description: 'Licensing the fastest, most accurate, and diverse data streams'
    },
    {
      icon: FiServer,
      title: 'Server & Infrastructure',
      description: 'Maintaining powerful, low-latency servers for real-time analysis'
    },
    {
      icon: FiZap,
      title: 'Feature Development',
      description: 'Funding our team to build innovative tools and refine user experience'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      
      {/* Funding Section - Hero with Brighter Background */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/70 via-[#0B0F19]/60 to-[#0B0F19]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Hero Header */}
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-xl border border-[#FFC527]/50 rounded-full">
              <FiHeart className="text-[#FFC527] text-xs sm:text-sm animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-semibold">Support Our Mission</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-2">
              Powering
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                Bettitude's Future
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              Bettitude is dedicated to providing high-quality, independent, data-driven analysis and tools, free of charge. Your direct support keeps us independent, innovative, and focused solely on serving you.
            </p>

            <div className="flex justify-center">
              <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
            </div>
          </div>

          {/* Why Your Support Matters Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-[#FFC527]/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

              <div className="relative space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center">
                  Why Your Support
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]"> Matters</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
                  Bettitude was founded on the principle of transparency and empowerment. We believe everyone deserves access to the best analytical tools and insights without facing paywalls or intrusive, biased advertising.
                </p>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed text-center">
                  Running a sophisticated data platform like Bettitude requires significant and ongoing investment in:
                </p>

                {/* Investment Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {investments.map((investment, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#FFC527]/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl flex items-center justify-center">
                          <investment.icon className="text-[#0B0F19] text-xl sm:text-2xl" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">{investment.title}</h3>
                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{investment.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center max-w-3xl mx-auto pt-4 font-semibold">
                  Your voluntary contribution is an investment in our independence and a direct vote for a platform dedicated to the user.
                </p>
              </div>
            </div>
          </div>

          {/* Ways to Support Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Ways to Support
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Bettitude</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
              Choose the method that works best for you. Every single contribution makes a difference.
            </p>
          </div>

          {/* Funding Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {fundingOptions.map((option, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/30 hover:bg-white/20"
              >
                <div className="relative space-y-4 sm:space-y-6">
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-xl sm:blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${option.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <option.icon className="text-white text-3xl sm:text-4xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed min-h-[80px] sm:min-h-[96px]">
                      {option.description}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center justify-center space-x-2 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${option.color} text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>{option.action}</span>
                    <FiArrowRight className="text-lg sm:text-xl group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Thank You Message */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/20 to-[#0057B8]/20 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                From all of us at <span className="text-[#FFC527]">Bettitude</span>, thank you.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                  Your support is our success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership & Advertising Section - Separate with Different Background */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/85 via-[#0B0F19]/80 to-[#0B0F19]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Section Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/50 rounded-full">
              <FiTrendingUp className="text-[#FFC527] text-xs sm:text-sm" />
              <span className="text-white text-xs sm:text-sm font-semibold">Business Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-2">
              Partner With
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
                Bettitude
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Join forces with one of the fastest-growing sports media platforms
            </p>

            <div className="flex justify-center">
              <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#0057B8] to-[#FFC527] rounded-full"></div>
            </div>
          </div>

          {/* Partnership Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 hover:border-[#FFC527] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/30 hover:bg-white/20"
              >
                <div className="relative space-y-6 sm:space-y-8">
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <option.icon className="text-white text-4xl sm:text-5xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    to={option.link}
                    className={`group/btn flex items-center justify-center space-x-2 w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r ${option.color} text-white text-base sm:text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>{option.action}</span>
                    <FiArrowRight className="text-xl sm:text-2xl group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits & Stats Section */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Side - Benefits */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Why Partner With Us?
                </h3>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Reach our engaged audience of 50,000+ daily readers and position your brand at the forefront of sports entertainment.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Brand visibility across all our platforms',
                    'Access to a highly engaged sports audience',
                    'Custom partnership packages available',
                    'Detailed analytics and performance reports'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FiCheckCircle className="text-[#FFC527] text-lg sm:text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:b2bops@bettitude.com"
                  className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <FiArrowRight className="text-lg sm:text-xl" />
                </a>
              </div>

              {/* Right Side - Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { value: '500+', label: 'Daily Readers' },
                  { value: '5K+', label: 'Active Users' },
                  { value: '1500+', label: 'Live Matches' },
                  { value: '2,500+', label: 'Content' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#FFC527] hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}