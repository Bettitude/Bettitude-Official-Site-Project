import React from 'react';
import { FiArrowRight, FiStar, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Betsport from '../assets/Betsport.png';
import Bettisportsblog from '../assets/Bettisportsblog.png';
import Probetfav from '../assets/Probetfav.png';
import SportsDisDat from '../assets/SportsDisDat.png';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

/* ─── Badge ──────────────────────────────────────────────────── */
function Badge({ label, variant = 'live' }) {
  const variants = {
    live: 'bg-[#00C853]/15 border-[#00C853]/40 text-[#00C853]',
    new: 'bg-[#0057B8]/15 border-[#0057B8]/40 text-[#5b9cf6]',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-bold tracking-widest uppercase ${variants[variant]}`}>
      {variant === 'live' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00C853]" />
        </span>
      )}
      {label}
    </span>
  );
}

const supportingCards = [
  {
    icon: Betsport,
    name: 'BettiScores',
    description: 'Live scores & stats',
    cta: 'Scores',
    link: 'https://bettiscores.com',
    accent: 'border-[#FFC527]/30 hover:border-[#FFC527]/60',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
  },
  {
    icon: Bettisportsblog,
    name: 'BettiSports Blog',
    description: 'News & analysis',
    cta: 'News',
    link: 'http://bettisportsblog.com',
    accent: 'border-[#0057B8]/30 hover:border-[#0057B8]/60',
    ctaClass: 'bg-gradient-to-r from-[#0057B8] to-[#003d82] text-white',
  },
  {
    icon: Probetfav,
    name: 'ProBetPicks',
    description: 'Best odds & picks',
    cta: 'Odds',
    link: 'https://probetpicks.com',
    accent: 'border-[#FFC527]/30 hover:border-[#FFC527]/60',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
  },
  {
    icon: SportsDisDat,
    name: 'SportsDisandDat',
    description: 'Gear & drops',
    cta: 'Shop',
    link: 'https://www.sportsdisanddat.com',
    accent: 'border-[#FFC527]/30 hover:border-[#FFC527]/60',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
  },
  {
    icon: null,
    name: 'Predict & Rake',
    description: 'Stake & win',
    cta: 'Predict',
    link: 'https://www.bwinalott.com',
    accent: 'border-[#FFC527]/30 hover:border-[#FFC527]/60',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
  },
];

export default function WorldCup2026() {
  return (
    <section className="relative bg-[#0B0F19] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0057B8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FFC527]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[250px] h-[250px] bg-[#00C853]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-14">

        {/* ── Compact header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC527]/10 border border-[#FFC527]/30 rounded-full">
            <FiStar className="text-[#FFC527] text-xs" />
            <span className="text-[#FFC527] text-[11px] font-bold tracking-widest uppercase">
              2026 FIFA World Cup
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F5F7FA] leading-tight">
            Stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              1 Step Ahead
            </span>{' '}
            of the Game
          </h2>

          <p className="text-[#B0B8C8] text-sm sm:text-base max-w-xl mx-auto">
            Feeding every football fan's desire — scores, news, odds, gear & fantasy, all in one place.
          </p>
        </motion.div>

        {/* ── BTFF featured banner (single row) ────────────────── */}
        <motion.a
          href="https://btfantasyfootball.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="group flex flex-col sm:flex-row items-center gap-4 bg-white/[0.03] border border-[#00C853]/30 hover:border-[#00C853]/60 rounded-xl px-5 py-3.5 mb-3 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C853]/25 to-[#0057B8]/20 border border-[#00C853]/30 flex items-center justify-center shrink-0">
            <FiShield className="text-[#00C853] text-lg" />
          </div>

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <h3 className="text-[#F5F7FA] font-black text-sm sm:text-base">BT Fantasy Football</h3>
              <Badge label="Live" variant="live" />
              <Badge label="New" variant="new" />
            </div>
            <p className="text-[#B0B8C8] text-xs sm:text-sm mt-0.5">
              Draft your World Cup squad, set a captain, earn live points.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C853] to-[#00a844] text-[#0B0F19] font-bold text-xs rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-200">
            Build Your Squad
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </motion.a>

        {/* ── Supporting cards row ─────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {supportingCards.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`group flex flex-col bg-white/[0.03] border ${s.accent} rounded-xl px-3.5 py-3 transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center shrink-0">
                  {s.icon ? (
                    <img src={s.icon} alt={s.name} className="w-full h-full object-contain p-1" loading="lazy" />
                  ) : (
                    <FiShield className="text-[#FFC527] text-sm" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[#F5F7FA] text-xs font-bold leading-tight truncate">{s.name}</p>
                  <p className="text-[#B0B8C8] text-[10px] leading-tight">{s.description}</p>
                </div>
              </div>

              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1 px-3 py-1.5 ${s.ctaClass} font-bold text-[11px] rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200`}
              >
                {s.cta}
                <FiArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
