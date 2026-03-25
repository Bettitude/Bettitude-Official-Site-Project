import React, { useState, useEffect } from 'react';
import { FiX, FiVolume2, FiArrowRight, FiStar } from 'react-icons/fi';
import { fetchAnnouncements } from '../utils/imageService';

// Inject ticker keyframe once
if (typeof document !== 'undefined' && !document.getElementById('ticker-style')) {
  const s = document.createElement('style');
  s.id = 'ticker-style';
  s.textContent = `
    @keyframes ticker {
      from { transform: translateX(-50%); }
      to   { transform: translateX(0); }
    }
    .ticker-track { animation: ticker var(--ticker-duration, 30s) linear infinite; }
    .ticker-track:hover { animation-play-state: paused; }
  `;
  document.head.appendChild(s);
}

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchAnnouncements()
      .then(data => {
        if (data && data.length > 0) {
          setItems(data);
        }
      })
      .catch(error => {
        console.error('Error fetching announcements:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!isVisible || loading || items.length === 0) return null;

  // Duration scales with number of items so speed stays consistent
  const duration = `${items.length * 10}s`;

  return (
    <div className="w-full bg-[#0B0F19] py-3 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0057B8] border-2 border-[#FFC527] rounded-2xl overflow-hidden shadow-2xl">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-[#FFC527] opacity-20 rounded-br-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FFC527] opacity-20 rounded-tl-full pointer-events-none"></div>

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, #FFC527 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}></div>
          </div>

          <div className="relative flex items-center">

            {/* Speaker badge — fixed left */}
            <div className="flex-shrink-0 flex items-center gap-2 bg-[#FFC527] px-4 py-3 z-10">
              <FiVolume2 className="text-[#0057B8] text-xl animate-pulse" />
              <span className="text-[#0057B8] font-black text-sm uppercase tracking-wide hidden sm:block">
                Live
              </span>
            </div>

            {/* Ticker track — scrolling area */}
            <div className="flex-1 overflow-hidden">
              <div
                className="ticker-track flex items-center"
                style={{ '--ticker-duration': duration }}
              >
                {/* Items duplicated for seamless loop */}
                {[...items, ...items].map((item, i) => (
                  <div
                    key={`${item.id ?? i}-${i}`}
                    className="flex items-center gap-3 px-6 whitespace-nowrap"
                  >
                    {item.label && (
                      <span className="flex items-center gap-1 bg-[#FFC527]/20 border border-[#FFC527]/40 px-3 py-1 rounded-full text-xs font-black text-[#FFC527] uppercase tracking-wide">
                        <FiStar className="text-xs" />
                        {item.label}
                      </span>
                    )}
                    <span className="text-white text-sm font-medium">
                      {item.message}
                    </span>
                    <a
                      href={item.linkUrl}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFC527] hover:bg-[#ffb700] rounded-lg text-xs font-bold text-[#0057B8] transition-colors duration-200"
                    >
                      {item.linkText}
                      <FiArrowRight className="text-xs" />
                    </a>
                    {/* Divider */}
                    <span className="text-[#FFC527]/50 text-lg font-thin">|</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close — fixed right */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 w-10 h-10 bg-white/10 hover:bg-[#FFC527] rounded-lg flex items-center justify-center transition-all duration-300 mx-2"
              aria-label="Close announcement"
            >
              <FiX className="text-white hover:text-[#0057B8] text-xl" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;