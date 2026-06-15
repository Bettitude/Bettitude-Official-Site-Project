import React, { useState, useEffect } from "react";
import { FiArrowRight, FiTrendingUp, FiTarget, FiAward } from "react-icons/fi";

export default function Winattitude() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["at", "bet"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#0B0F19]/95 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Animated Text */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top line: "win with" */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white">
              win with
            </div>

            {/* Animated middle part */}
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-40 flex items-center justify-center px-4">
              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-full h-full max-w-4xl bg-gradient-to-r ${
                    words[currentWord] === "bet"
                      ? "from-[#0057B8]/30 to-[#FFC527]/30"
                      : "from-[#FFC527]/30 to-[#0057B8]/30"
                  } blur-3xl transition-all duration-1000`}
                ></div>
              </div>

              {/* Animated word container */}
              <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black leading-none">
                {/* Static "titude" part */}
                <span className="flex items-start">
                  {/* Animated prefix (at/bet) */}
                  <span
                    className={`relative inline-block transition-all duration-700 ${
                      words[currentWord] === "bet"
                        ? "mr-[20px] sm:mr-[-12px] lg:mr-[95px]" // Keep bet position (current)
                        : "mr-[11px] sm:mr-[8px] lg:mr-[50px]" // Move at closer to titude
                    }`}
                    style={{
                      width:
                        words[currentWord] === "bet"
                          ? "clamp(2.5rem, 8vw, 7.2rem)"
                          : "clamp(1.6rem, 5vw, 4.8rem)",
                    }}
                  >
                    {words.map((word, index) => (
                      <span
                        key={word}
                        className={`absolute left-0 transition-all duration-700 ease-in-out ${
                          index === currentWord
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-4 sm:translate-y-8 scale-95"
                        } ${
                          word === "bet"
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]"
                        }`}
                        style={{
                          transform:
                            index === currentWord
                              ? "translateY(0)"
                              : "translateY(1rem)",
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>

                  {/* Static "titude" */}
                  <span className="text-white">titude</span>
                </span>
              </div>
            </div>

            {/* Accent line */}
            <div className="flex justify-center">
              <div className="h-1 sm:h-1.5 lg:h-2 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B0B8C8] leading-relaxed">
              At Bettitude, we believe in winning with the right mindset.
              Whether it's
              <span className="text-[#FFC527] font-semibold"> attitude</span> or
              <span className="text-[#0057B8] font-semibold"> Bettitude</span>,
              success comes from passion, strategy, and determination.
            </p>
          </div>

          {/* Features Grid - Mobile Modern Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-12">
            {/* Card 1 */}
            <div className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/20 group-hover:to-[#FFC527]/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>

              <div className="relative space-y-3 sm:space-y-4">
                {/* Modern icon badge */}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFC527] blur-xl opacity-50"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <FiTarget className="text-white text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] opacity-20">
                    01
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Winning Mindset
                </h3>
                <p className="text-sm sm:text-base text-[#B0B8C8] leading-relaxed">
                  Cultivate the attitude of a champion with data-driven insights
                  and expert guidance
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/0 to-[#0057B8]/0 group-hover:from-[#0057B8]/20 group-hover:to-[#0057B8]/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>

              <div className="relative space-y-3 sm:space-y-4">
                {/* Modern icon badge */}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#0057B8] blur-xl opacity-50"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <FiTrendingUp className="text-white text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#003d82] opacity-20">
                    02
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Smart Strategies
                </h3>
                <p className="text-sm sm:text-base text-[#B0B8C8] leading-relaxed">
                  Win with Bettitude by leveraging our proven algorithms and
                  expert analysis
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/20 group-hover:to-[#FFC527]/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>

              <div className="relative space-y-3 sm:space-y-4">
                {/* Modern icon badge */}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFC527] blur-xl opacity-50"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <FiAward className="text-white text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] opacity-20">
                    03
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Consistent Results
                </h3>
                <p className="text-sm sm:text-base text-[#B0B8C8] leading-relaxed">
                  Transform your attitude into success with our comprehensive
                  betting intelligence
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 sm:pt-10 lg:pt-12">
            <a
              href="/appointment"
              className="group inline-flex items-center space-x-2 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl text-base sm:text-lg hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Start Winning Today</span>
              <FiArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#0057B8] via-[#00C853] to-[#FFC527]"></div>
    </section>
  );
}
