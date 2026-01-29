import React from "react";
import { IoShieldCheckmark, IoAnalytics, IoSettings, IoMegaphone } from "react-icons/io5";
import { FaCookie } from "react-icons/fa";

const Cookies = () => {
  const cookieTypes = [
    {
      icon: IoShieldCheckmark,
      category: "Strictly Necessary Cookies",
      purpose: "Essential for website navigation and secure access.",
      control: "Cannot be disabled.",
      color: "gold"
    },
    {
      icon: IoAnalytics,
      category: "Performance & Analytics",
      purpose: "Aggregate data analysis to improve performance.",
      control: "Controllable by user.",
      color: "blue"
    },
    {
      icon: IoSettings,
      category: "Functionality Cookies",
      purpose: "Remember user preferences like language and region.",
      control: "Controllable by user.",
      color: "gold"
    },
    {
      icon: IoMegaphone,
      category: "Targeting & Advertising",
      purpose: "Ads personalization and affiliate revenue tracking.",
      control: "Controllable by user.",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gold: "from-[#FFC527] to-[#ffb700]",
      blue: "from-[#0057B8] to-[#003d82]"
    };
    return colors[color];
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Cookie Policy"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 py-12 sm:py-16 lg:py-30">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
            <FaCookie className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Legal Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Cookie Policy
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
            Bettitude Inc.
          </p>

          <p className="text-sm sm:text-base text-[#E0E0E0]/80">
            Effective Date: November, 2025
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Intro Section */}
        <section className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <p className="text-base sm:text-lg text-[#E0E0E0] leading-relaxed">
              This Cookie Policy explains what cookies are, how Bettitude Inc.
              ("Bettitude," "We," "Us") uses cookies and similar technologies on our
              websites (Bettitude.com, BettiScores.com, ProbetPicks.com, etc.) and
              services (the "Service"), and what choices you have regarding them.
              This policy should be read alongside our Privacy Policy.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">1</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                What Are Cookies?
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
              Cookies are small text files placed on your computer, tablet, or
              mobile phone when you visit a website. They help websites function
              properly, remember preferences, and collect analytics to improve user
              experience.
            </p>
          </div>
        </article>

        {/* Section 2 */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                How Bettitude Uses Cookies
              </h2>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Ensure the Service functions correctly and securely.",
                "Analyze how the Service is used to measure performance and improve user experience.",
                "Remember your preferences and settings.",
                "Deliver relevant advertising and track the effectiveness of campaigns and affiliate partnerships."
              ].map((item, i) => (
                <li key={i} className="flex items-start group/item">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm sm:text-base lg:text-lg text-[#E0E0E0]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Section 3: Cookie Types */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">3</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Types of Cookies We Use
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className="relative bg-[#0B0F19]/50 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group/card"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover/card:from-[#FFC527]/5 group-hover/card:to-[#0057B8]/5 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative space-y-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${getColorClasses(cookie.color)} rounded-lg sm:rounded-xl shadow-lg`}>
                      <cookie.icon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cookie.category}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-[#E0E0E0]">
                        <span className="text-[#FFC527] font-semibold">Purpose:</span> {cookie.purpose}
                      </p>
                      <p className="text-sm sm:text-base text-[#E0E0E0]/80">
                        <span className="text-[#FFC527] font-semibold">Control:</span> {cookie.control}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="bg-[#0B0F19]/30 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/20">
                      <th className="p-4 lg:p-5 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm lg:text-base">
                        Category
                      </th>
                      <th className="p-4 lg:p-5 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm lg:text-base">
                        Purpose
                      </th>
                      <th className="p-4 lg:p-5 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm lg:text-base">
                        User Control
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTypes.map((cookie, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-[#0057B8]/20 hover:bg-[#0057B8]/10 transition-colors duration-300"
                      >
                        <td className="p-4 lg:p-5 font-semibold text-white text-sm lg:text-base">
                          {cookie.category}
                        </td>
                        <td className="p-4 lg:p-5 text-[#E0E0E0] text-sm lg:text-base">
                          {cookie.purpose}
                        </td>
                        <td className="p-4 lg:p-5 text-[#E0E0E0] text-sm lg:text-base">
                          {cookie.control}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>

        {/* Section 4 */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">4</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Third-Party Cookies
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
              We use third-party services like analytics providers, advertising
              networks, affiliate partners, and social media platforms. These third
              parties may set their own cookies. We recommend reviewing their
              privacy and cookie policies.
            </p>
          </div>
        </article>

        {/* Section 5 */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">5</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Your Choices: Managing Cookies
              </h2>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] mb-6 sm:mb-8">
              You can manage your cookie preferences using:
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-[#0B0F19]/30 backdrop-blur-sm border-l-4 border-[#FFC527] rounded-r-xl p-5 sm:p-6 lg:p-8 hover:bg-[#0B0F19]/50 transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                  A. Cookie Preference Center
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                  On your first visit, you can accept or reject non-essential cookies.
                  You can change preferences anytime through the Cookie Settings link in
                  the footer.
                </p>
              </div>

              <div className="bg-[#0B0F19]/30 backdrop-blur-sm border-l-4 border-[#0057B8] rounded-r-xl p-5 sm:p-6 lg:p-8 hover:bg-[#0B0F19]/50 transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                  B. Browser Controls
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                  You can set your browser to block or delete cookies. Note that this
                  may affect website functionality.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Section 6 */}
        <article className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 hover:border-[#FFC527]/50 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">6</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Changes to This Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
              We may update this policy periodically. Changes will be posted on this
              page with an updated Effective Date.
            </p>
          </div>
        </article>

        {/* Section 7: Contact */}
        <footer className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0057B8]/10 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#0057B8]/0 hover:from-[#FFC527]/5 hover:to-[#0057B8]/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">7</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Contact Us
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0]">
                <span className="text-white font-semibold">Email:</span>{" "}
                <a
                  href="mailto:legal@bettitude.com"
                  className="text-[#FFC527] hover:text-[#ffb700] font-semibold hover:underline transition-colors duration-300"
                >
                  legal@bettitude.com
                </a>
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0]">
                <span className="text-white font-semibold">Mailing Address:</span>{" "}
                Bettitude Inc., Legal Department, 58 Berrigan Rd, Miandetta, Tas 7320, AUS
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#0057B8]/30 text-center">
              <p className="text-xs sm:text-sm text-[#E0E0E0]/80">
                © {new Date().getFullYear()} Bettitude Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cookies;