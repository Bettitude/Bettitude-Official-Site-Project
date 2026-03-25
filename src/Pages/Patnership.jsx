import React, { useEffect, useRef, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchPartnerList } from "../utils/imageService";

export default function Partnership() {
  const scrollRef = useRef(null);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartnerList().then(setPartners);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || partners.length === 0) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, [partners]);

  // Duplicate for seamless infinite scroll (need at least 2 copies to loop)
  const duplicatedPartners = partners.length > 0 ? [...partners, ...partners] : [];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0B0F19] to-[#0B0F19]/95 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#0057B8]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#FFC527]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiTrendingUp className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">
              Trusted Partnerships
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3 sm:space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Partnered with the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
                {" "}
                Best
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] max-w-2xl mx-auto">
              We collaborate with industry-leading brands to bring you the most
              reliable betting insights and premium experiences
            </p>
          </div>

          {/* Accent line */}
          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling brands */}
          <div
            ref={scrollRef}
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-hidden py-4 sm:py-6 lg:py-8"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.id}-${index}`}
                href={partner.website_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-48 h-32 sm:w-56 sm:h-36 lg:w-64 lg:h-40 bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#0057B8]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                <div className="relative h-full flex flex-col items-center justify-center space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="relative w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 bg-white rounded-md sm:rounded-lg p-2 sm:p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={partner.logo_url}
                      alt={partner.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=0057B8&color=fff&size=200&bold=true`;
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-white font-bold text-sm sm:text-base lg:text-lg group-hover:text-[#FFC527] transition-colors duration-300">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center space-y-1 sm:space-y-2 p-4 sm:p-5 lg:p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
              3+
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] font-semibold">
              Global Partners
            </p>
          </div>

          <div className="text-center space-y-1 sm:space-y-2 p-4 sm:p-5 lg:p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
              50+
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] font-semibold">
              Markets Covered
            </p>
          </div>

          <div className="text-center space-y-1 sm:space-y-2 p-4 sm:p-5 lg:p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
              24/7
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] font-semibold">
              Live Support
            </p>
          </div>

          <div className="text-center space-y-1 sm:space-y-2 p-4 sm:p-5 lg:p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
              100%
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] font-semibold">
              Secure Platform
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          {/* <a 
            href="/partnerships" 
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
          >
            <span>Become a Partner</span>
            <FiTrendingUp className="text-lg sm:text-xl" />
          </a> */}
          <Link
            to="/partner"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
          >

             <span>Become a Partner</span>
            <FiTrendingUp className="text-lg sm:text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
