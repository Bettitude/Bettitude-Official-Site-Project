import React, { useState, useEffect } from 'react';
import { FiUsers, FiArrowRight, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import { fetchPageImages } from '../utils/imageService';

export default function CareerCTA() {
  const [pageImages, setPageImages] = useState({});
  useEffect(() => { fetchPageImages().then(setPageImages); }, []);
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0B0F19] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src={pageImages.careerhome_bg || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'}
              alt="Team"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
                  <FiBriefcase className="text-[#FFC527] text-xs sm:text-sm" />
                  <span className="text-[#B0B8C8] text-xs sm:text-sm font-semibold">Join Our Team</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Work With US...
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
                    @Bettitude
                  </span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-[#B0B8C8] leading-relaxed">
                  Join a passionate team building the future of sports entertainment. We're looking for talented individuals across multiple departments and sports divisions.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <FiUsers className="text-[#FFC527] text-xl sm:text-2xl" />
                    <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                      9+
                    </p>
                  </div>
                  <p className="text-[#B0B8C8] font-semibold text-xs sm:text-sm md:text-base">Open Positions</p>
                </div>

                <div className="bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <FiTrendingUp className="text-[#FFC527] text-xl sm:text-2xl" />
                    <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                      50+
                    </p>
                  </div>
                  <p className="text-[#B0B8C8] font-semibold text-xs sm:text-sm md:text-base">Team Members</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="/careers"
                  className="group flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold text-sm sm:text-base rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
                >
                  <span>View Open Positions</span>
                  <FiArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="/careers#recruitment"
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 sm:py-5 bg-[#0057B8]/20 backdrop-blur-sm border-2 border-[#0057B8] text-white font-bold text-sm sm:text-base rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
                >
                  <span>Learn Process</span>
                </a>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Available Departments
                </h3>

                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { title: 'Corporate Positions', items: 'Marketer, Influencer, Analyst, Accounting' },
                    { title: 'Sports Divisions', items: 'Soccer/Football, Basketball, Cricket' },
                    { title: 'More Sports', items: 'Aussie Rules, Gridiron/NFL' }
                  ].map((dept, idx) => (
                    <div
                      key={idx}
                      className="group bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl p-4 sm:p-5 hover:border-[#FFC527]/50 hover:bg-[#0057B8]/20 transition-all duration-300"
                    >
                      <p className="text-[#FFC527] font-bold mb-1.5 sm:mb-2 text-sm sm:text-base">{dept.title}</p>
                      <p className="text-[#B0B8C8] text-xs sm:text-sm">{dept.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Quick List */}
              <div className="bg-gradient-to-br from-[#FFC527]/10 to-[#0057B8]/10 backdrop-blur-sm border border-[#FFC527]/30 rounded-lg sm:rounded-xl p-5 sm:p-6">
                <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center space-x-2 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-[#FFC527] rounded-full animate-pulse"></div>
                  <span>Why Join Bettitude?</span>
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    'Full recognition for your work',
                    'Marketing promotion support',
                    'Skill development opportunities',
                    'Remote & flexible options'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 sm:space-x-3 text-[#B0B8C8]">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0B0F19] text-[10px] sm:text-xs font-bold">✓</span>
                      </div>
                      <span className="text-xs sm:text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}