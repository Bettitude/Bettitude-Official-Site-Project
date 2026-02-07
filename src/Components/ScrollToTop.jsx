import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/50 hover:scale-110 hover:shadow-[#FFC527]/70 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-[#0B0F19] text-xl sm:text-2xl font-bold group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}
