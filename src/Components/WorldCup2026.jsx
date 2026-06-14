import React from 'react';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Betsport from '../assets/Betsport.png';
import Bettisportsblog from '../assets/Bettisportsblog.png';
import Probetfav from '../assets/Probetfav.png';
import SportsDisDat from '../assets/SportsDisDat.png';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' } }),
};

const serviceGrid = [
  // Row 1
  {
    icon: Betsport,
    name: 'BettiScores',
    description: 'Get the latest scores, results & stats for playing teams.',
    cta: 'Go to BettiScores.com',
    link: 'https://bettiscores.com',
    accentBorder: 'border-[#FFC527]/40',
    accentGlow: 'shadow-[#FFC527]/20',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    row: 0,
  },
  {
    icon: Bettisportsblog,
    name: 'BettiSports Blog',
    description: 'For all the reports, team news, analysis, articles & more.',
    cta: 'Go to BettiSportsBlog.com',
    link: 'http://bettisportsblog.com',
    accentBorder: 'border-[#0057B8]/40',
    accentGlow: 'shadow-[#0057B8]/20',
    ctaClass: 'bg-gradient-to-r from-[#0057B8] to-[#003d82] text-white',
    row: 0,
  },
  {
    icon: Probetfav,
    name: 'ProBetPicks',
    description: 'Get the best odds & market picks to maximise your winning.',
    cta: 'Go to ProBetPicks.com',
    link: 'https://probetpicks.com',
    accentBorder: 'border-[#FFC527]/40',
    accentGlow: 'shadow-[#FFC527]/20',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    row: 0,
  },
  // Row 2
  {
    icon: null,
    name: 'BettiFantasy Games',
    description: 'Join the competition, play and win games.',
    cta: 'Go to BtFantasyFootball.com',
    link: 'https://btfantasyfootball.com',
    accentBorder: 'border-[#0057B8]/40',
    accentGlow: 'shadow-[#0057B8]/20',
    ctaClass: 'bg-gradient-to-r from-[#0057B8] to-[#003d82] text-white',
    row: 1,
  },
  {
    icon: SportsDisDat,
    name: 'SportsDisandDat',
    description: 'Get the best Bettitude exclusive drops & football equipment.',
    cta: 'Shop Now',
    link: 'https://www.sportsdisanddat.com',
    accentBorder: 'border-[#FFC527]/40',
    accentGlow: 'shadow-[#FFC527]/20',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    row: 1,
  },
  {
    icon: null,
    name: 'Predict & Rake',
    description: 'Bet on yourself. Predict, Stake, Win — take control of your game.',
    cta: 'Go to Bwinalott.com',
    link: 'https://www.bwinalott.com',
    accentBorder: 'border-[#FFC527]/40',
    accentGlow: 'shadow-[#FFC527]/20',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    row: 1,
  },
];

export default function WorldCup2026() {
  return (
    <section className="relative bg-[#0B0F19] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0057B8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#FFC527]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-30">

        {/* ── Hero Banner ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFC527]/10 border border-[#FFC527]/30 rounded-full">
            <FiStar className="text-[#FFC527] text-sm" />
            <span className="text-[#FFC527] text-xs sm:text-sm font-bold tracking-wide uppercase">2026 FIFA World Cup</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              1 Step Ahead
            </span>{' '}
            of the Game
          </h2>
          <p className="text-[#E0E0E0] text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to dominate the 2026 FIFA World Cup season — scores, insights, predictions, merch, and more.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-[#0057B8] to-[#FFC527] rounded-full" />
          </div>
        </motion.div>

        {/* ── 3 × 2 Service Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {serviceGrid.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`group relative flex flex-col bg-white/[0.03] backdrop-blur-sm border ${s.accentBorder} rounded-2xl p-6 hover:shadow-xl ${s.accentGlow} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* icon */}
              {s.icon && (
                <div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                  <img src={s.icon} alt={s.name} className="w-full h-full object-contain p-1.5" loading="lazy" />
                </div>
              )}
              {!s.icon && (
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#0057B8]/30 to-[#FFC527]/20 flex items-center justify-center">
                  <FiStar className="text-[#FFC527] text-xl" />
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{s.name}</h3>
              <p className="text-[#B0B8C8] text-sm sm:text-base leading-relaxed flex-1">{s.description}</p>

              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 ${s.ctaClass} font-bold text-sm rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 self-start`}
              >
                <span>{s.cta}</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#0057B8]/50 to-transparent mb-16" />

        {/* ── Brand Tagline Section ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left — tagline + content teasers */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0057B8]/15 border border-[#0057B8]/30 rounded-full">
              <span className="text-[#E0E0E0] text-xs font-semibold tracking-widest">@PremiumSportsConus</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Feeding Every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#0057B8]">
                Football Fan's
              </span>{' '}
              Desire
            </h3>

            <p className="text-[#B0B8C8] text-base leading-relaxed max-w-md">
              From live scores and expert predictions to exclusive merch drops and fantasy competitions — Bettitude has everything the modern football fan needs.
            </p>

            {/* Content teasers (wavy-line placeholders rendered as skeleton cards) */}
            <div className="space-y-3">
              {[
                'World Cup 2026 Group Stage Preview',
                'Top 5 Players to Watch This Tournament',
                'Best Betting Markets for the World Cup',
              ].map((title, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC527] flex-shrink-0" />
                  <span className="text-[#E0E0E0] text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — "The Beautiful Game" feature card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0057B8]/20 to-[#FFC527]/10 border border-[#0057B8]/30 rounded-3xl p-8 text-center space-y-6">
              {/* pitch icon */}
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#0057B8] to-[#003d82] flex items-center justify-center shadow-xl shadow-[#0057B8]/30">
                <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" stroke="#FFC527" strokeWidth="3" />
                  <path d="M32 4 L32 60 M4 32 L60 32" stroke="#FFC527" strokeWidth="2" opacity="0.5" />
                  <circle cx="32" cy="32" r="10" stroke="#FFC527" strokeWidth="2" opacity="0.7" />
                  <polygon points="27,24 42,32 27,40" fill="#FFC527" />
                </svg>
              </div>

              <div>
                <p className="text-[#FFC527] text-xs font-bold tracking-widest uppercase mb-1">Featured</p>
                <h4 className="text-2xl font-black text-white">The Beautiful Game</h4>
                <p className="text-[#B0B8C8] text-sm mt-2 leading-relaxed">
                  Experience the 2026 World Cup like never before — deeper analysis, sharper predictions, bigger wins.
                </p>
              </div>

              <a
                href="http://bettisportsblog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold text-sm rounded-xl hover:scale-105 transition-transform duration-200"
              >
                Explore Now
                <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
