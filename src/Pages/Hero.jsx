import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiPlay, FiUsers, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { fetchHeroImages } from '../utils/imageService';
export default function BettitudeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFeatureImage, setCurrentFeatureImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [heroImages, setHeroImages] = useState({
    carousel_1:    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80',
    carousel_2:    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
    carousel_3:    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1920&q=80',
    carousel_4:    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80',
    carousel_5:    'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80',
    feature_card_1:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=90',
    feature_card_2:'https://www.channelstv.com/wp-content/uploads/2019/06/Megan-Rapinoe.jpg',
    feature_card_3:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=90',
  });

  useEffect(() => {
    fetchHeroImages().then(setHeroImages);
  }, []);

  const slides = [
    heroImages.carousel_1,
    heroImages.carousel_2,
    heroImages.carousel_3,
    heroImages.carousel_4,
    heroImages.carousel_5,
  ];

  const alternatingWords = [
    { text: "football fans' desire", gradient: "from-[#0057B8] to-[#FFC527]" },
    { text: "sports passion", gradient: "from-[#FFC527] to-[#ffb700]" },
    { text: "football dreams", gradient: "from-[#0057B8] to-[#003d82]" }
  ];

  const featureImages = [
    {
      image: heroImages.feature_card_1,
      title: 'The Beautiful Game',
      subtitle: 'Passion. Glory. Football.'
    },
    {
      image: heroImages.feature_card_2,
      title: 'Women Football in Our Heart',
      subtitle: 'Equality. Power. Excellence.'
    },
    {
      image: heroImages.feature_card_3,
      title: 'Data Driving Our World',
      subtitle: 'Analytics. Insights. Success.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setCurrentFeatureImage((prev) => (prev + 1) % featureImages.length);
    }, 4500);
    return () => clearInterval(featureTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % alternatingWords.length);
    }, 3000);
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] overflow-hidden">
      {/* Animated Background Carousel with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center animate-slow-zoom"
              style={{ 
                backgroundImage: `url(${slide})`,
                animation: index === currentSlide ? 'slowZoom 20s ease-in-out infinite alternate' : 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/85 via-[#0B0F19]/60 to-[#0B0F19]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/10 via-transparent to-[#FFC527]/10"></div>
          </div>
        ))}
        
        {/* Floating particles animation - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#FFC527]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 -right-24 sm:-right-48 w-48 h-48 sm:w-96 sm:h-96 bg-[#0057B8]/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -left-24 sm:-left-48 w-48 h-48 sm:w-96 sm:h-96 bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30 backdrop-blur-xl border border-[#FFC527]/50 rounded-full shadow-lg shadow-[#FFC527]/20">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFC527] blur-md animate-pulse"></div>
                <div className="relative w-2 h-2 sm:w-3 sm:h-3 bg-[#FFC527] rounded-full"></div>
              </div>
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">PREMIUM SPORTS CONTENT</span>
            </div>

            {/* Main Headline with Alternating Text */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                <span className="block text-white animate-fade-in-up mb-1 sm:mb-2">
                  Feeding every
                </span>
                <span className="block relative min-h-[1.3em]">
                  {alternatingWords.map((item, index) => (
                    <span
                      key={index}
                      className={`block text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} transition-all duration-700 ${
                        index === currentWord
                          ? 'opacity-100 relative'
                          : 'opacity-0 absolute top-0 left-0'
                      }`}
                    >
                      {item.text}
                    </span>
                  ))}
                </span>
              </h1>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="h-1.5 sm:h-2 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full animate-expand"></div>
                <div className="h-1 sm:h-1.5 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-[#0057B8] to-transparent rounded-full animate-expand" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="h-0.5 w-8 sm:w-12 bg-[#FFC527]"></div>
                <p className="text-[#FFC527] font-bold text-sm sm:text-base lg:text-lg tracking-wider uppercase">
                  Sports Content Curated For All
                </p>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B0B8C8] leading-relaxed font-light">
                We at <span className="text-white font-bold">Bettitude</span>, strive and want to provide our viewers, visitors and most of all our subscribers the 
                <span className="text-[#FFC527] font-semibold"> very best of sports entertainment</span> within our capacity.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B0B8C8]/90 leading-relaxed font-light">
                Our people are all <span className="text-white font-semibold">Sports people</span> but at this point we want to maintain our focus on 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] font-bold"> Football, soccer or footy</span>, 
                for everyone where you are and whatever you call the beautiful game.
              </p>
            </div>

            {/* Feature Pills - Responsive Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {['Match Analysis', 'Live Updates', 'Expert Insights', 'Community'].map((feature, idx) => (
                <div
                  key={idx}
                  className="group px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-[#0057B8]/20 to-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/40 rounded-full hover:border-[#FFC527]/60 transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-[#B0B8C8] group-hover:text-[#FFC527] font-semibold text-xs sm:text-sm transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 sm:pt-6">
              {/* <a 
                href="/product" 
                className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-black rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 text-center text-base sm:text-lg"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Explore Our Products</span>
                  <FiArrowRight className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffb700] to-[#FFC527] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a> */}
              <Link to="/product" className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-black rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 text-center text-base sm:text-lg">
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Explore Our Products</span>
                  <FiArrowRight className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffb700] to-[#FFC527] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            </div>

            {/* Stats - Responsive */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 pt-6 sm:pt-8 pb-2 sm:pb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFC527] blur-lg animate-pulse"></div>
                  <FiUsers className="relative text-[#FFC527] text-2xl sm:text-3xl" />
                </div>
                <div>
                  <p className="text-white font-black text-lg sm:text-xl lg:text-2xl">250K+</p>
                  <p className="text-[#B0B8C8] text-xs sm:text-sm">Global Reach</p>
                </div>
              </div>
              
              <div className="h-8 sm:h-10 lg:h-12 w-px bg-[#0057B8]/30"></div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0057B8] blur-lg animate-pulse"></div>
                  <FiGlobe className="relative text-[#0057B8] text-2xl sm:text-3xl" />
                </div>
                <div>
                  <p className="text-white font-black text-lg sm:text-xl lg:text-2xl">50+</p>
                  <p className="text-[#B0B8C8] text-xs sm:text-sm">Countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section with Carousel - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC527]/40 to-[#0057B8]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#0057B8]/40 group-hover:border-[#FFC527]/60 transition-all duration-500 shadow-2xl">
                  {featureImages.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentFeatureImage
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img 
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/10 to-[#FFC527]/10"></div>
                    </div>
                  ))}
                  
                  <div className="absolute top-8 left-8 px-6 py-3 bg-[#0B0F19]/80 backdrop-blur-xl border border-[#FFC527]/50 rounded-2xl z-10">
                    <p className="text-[#FFC527] font-black text-sm tracking-wider">THE BEAUTIFUL GAME</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3 z-10">
                    {featureImages.map((item, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          index === currentFeatureImage
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8 absolute'
                        }`}
                      >
                        <p className="text-4xl font-black text-white leading-tight">
                          {item.title}
                        </p>
                        <div className="flex items-center space-x-2 mt-3">
                          <div className="h-1 w-16 bg-gradient-to-r from-[#FFC527] to-transparent rounded-full"></div>
                          <p className="text-[#B0B8C8] text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-24 right-8 flex flex-col space-y-2 z-10">
                    {featureImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeatureImage(index)}
                        className={`transition-all duration-500 rounded-full ${
                          index === currentFeatureImage 
                            ? 'h-12 w-3 bg-gradient-to-b from-[#FFC527] to-[#ffb700] shadow-lg shadow-[#FFC527]/50' 
                            : 'h-3 w-3 bg-[#B0B8C8]/30 hover:bg-[#B0B8C8]/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-2xl rotate-12 animate-float opacity-80 flex items-center justify-center">
                <span className="text-[#0B0F19] font-black text-3xl">⚽</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-3xl -rotate-12 animate-float opacity-80 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <span className="text-white font-black text-2xl">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-12 sm:w-16 h-2 sm:h-3 bg-gradient-to-r from-[#FFC527] to-[#ffb700] shadow-lg shadow-[#FFC527]/50' 
                : 'w-2 sm:w-3 h-2 sm:h-3 bg-[#B0B8C8]/30 hover:bg-[#B0B8C8]/60'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slowZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slow-zoom { animation: slowZoom 20s ease-in-out infinite alternate; }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-expand { animation: expand 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}