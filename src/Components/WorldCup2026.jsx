import React from 'react';
import { FiArrowRight, FiStar, FiShield, FiZap, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Betsport from '../assets/Betsport.png';
import Bettisportsblog from '../assets/Bettisportsblog.png';
import Probetfav from '../assets/Probetfav.png';
import SportsDisDat from '../assets/SportsDisDat.png';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
};

/* ─── Badge component ───────────────────────────────────────── */
function Badge({ label, variant = 'live' }) {
  const variants = {
    live:     'bg-[#00C853]/15 border-[#00C853]/40 text-[#00C853]',
    new:      'bg-[#0057B8]/15 border-[#0057B8]/40 text-[#5b9cf6]',
    deadline: 'bg-[#E53935]/15 border-[#E53935]/40 text-[#E53935]',
    captain:  'bg-[#FFC527]/15 border-[#FFC527]/40 text-[#FFC527]',
    boosted:  'bg-gradient-to-r from-[#FFC527]/20 to-[#00C853]/20 border-[#00C853]/30 text-[#00C853]',
  };
  const dots = {
    live:     'bg-[#00C853] animate-ping',
    deadline: 'bg-[#E53935] animate-ping',
    captain:  'bg-[#FFC527]',
    new:      'bg-[#0057B8]',
    boosted:  'bg-[#00C853]',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-widest uppercase ${variants[variant]}`}>
      {(variant === 'live' || variant === 'deadline') && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${dots[variant]}`} />
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${variant === 'live' ? 'bg-[#00C853]' : 'bg-[#E53935]'}`} />
        </span>
      )}
      {label}
    </span>
  );
}

/* ─── Supporting service cards ──────────────────────────────── */
const supportingCards = [
  {
    icon: Betsport,
    name: 'BettiScores',
    description: 'Get the latest scores, results & stats for playing teams.',
    cta: 'Go to BettiScores.com',
    link: 'https://bettiscores.com',
    accentBorder: 'border-[#FFC527]/30',
    accentGlow: 'hover:shadow-[#FFC527]/10',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    badge: null,
  },
  {
    icon: Bettisportsblog,
    name: 'BettiSports Blog',
    description: 'All the reports, team news, analysis, articles & more.',
    cta: 'Go to BettiSportsBlog.com',
    link: 'http://bettisportsblog.com',
    accentBorder: 'border-[#0057B8]/30',
    accentGlow: 'hover:shadow-[#0057B8]/10',
    ctaClass: 'bg-gradient-to-r from-[#0057B8] to-[#003d82] text-white',
    badge: null,
  },
  {
    icon: Probetfav,
    name: 'ProBetPicks',
    description: 'Best odds & market picks to maximise your winning.',
    cta: 'Go to ProBetPicks.com',
    link: 'https://probetpicks.com',
    accentBorder: 'border-[#FFC527]/30',
    accentGlow: 'hover:shadow-[#FFC527]/10',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    badge: null,
  },
  {
    icon: SportsDisDat,
    name: 'SportsDisandDat',
    description: 'Exclusive Bettitude drops & official football equipment.',
    cta: 'Shop Now',
    link: 'https://www.sportsdisanddat.com',
    accentBorder: 'border-[#FFC527]/30',
    accentGlow: 'hover:shadow-[#FFC527]/10',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    badge: null,
  },
  {
    icon: null,
    name: 'Predict & Rake',
    description: 'Predict, Stake, Win — take full control of your game.',
    cta: 'Go to Bwinalott.com',
    link: 'https://www.bwinalott.com',
    accentBorder: 'border-[#FFC527]/30',
    accentGlow: 'hover:shadow-[#FFC527]/10',
    ctaClass: 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19]',
    badge: null,
  },
];

/* ─── BTFF stats strip ──────────────────────────────────────── */
const fantasyStats = [
  { value: '10', label: 'Teams Per League', color: 'text-[#00C853]' },
  { value: '15', label: 'Players Per Squad', color: 'text-[#FFC527]' },
  { value: '32', label: 'World Cup Nations', color: 'text-[#0057B8]' },
  { value: '2x', label: 'Captain Multiplier', color: 'text-[#00C853]' },
];

export default function WorldCup2026() {
  return (
    <section className="relative bg-[#0B0F19] overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0057B8]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#FFC527]/8 rounded-full blur-3xl" />
        {/* New BTFF Turf Green glow */}
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#00C853]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">

        {/* ── Section hero ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16 space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFC527]/10 border border-[#FFC527]/30 rounded-full">
            <FiStar className="text-[#FFC527] text-sm" />
            <span className="text-[#FFC527] text-xs font-bold tracking-widest uppercase">
              2026 FIFA World Cup
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F7FA] leading-tight">
            Stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              1 Step Ahead
            </span>{' '}
            of the Game
          </h2>

          <p className="text-[#B0B8C8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to dominate the 2026 FIFA World Cup season —
            scores, insights, predictions, fantasy squads, and more.
          </p>

          <div className="flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-[#0057B8] to-[#FFC527] rounded-full" />
          </div>
        </motion.div>

        {/* ── BTFF Hero Card ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-6"
        >
          <div className="relative group rounded-2xl overflow-hidden border border-[#00C853]/30 bg-white/[0.03] backdrop-blur-sm hover:border-[#00C853]/60 hover:shadow-2xl hover:shadow-[#00C853]/10 transition-all duration-300">

            {/* Turf Green accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00C853] to-transparent" />

            <div className="grid lg:grid-cols-5 gap-0">

              {/* Left — identity column */}
              <div className="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2">
                    <Badge label="Live" variant="live" />
                    <Badge label="New" variant="new" />
                  </div>

                  {/* BTFF shield icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C853]/25 to-[#0057B8]/20 border border-[#00C853]/30 flex items-center justify-center">
                    <FiShield className="text-[#00C853] text-2xl" />
                  </div>

                  <div>
                    <p className="text-[#00C853] text-xs font-bold tracking-widest uppercase mb-1">
                      BT Fantasy Football · btfantasyfootball.com
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] leading-tight">
                      BettiFantasy Games
                    </h3>
                    <p className="text-[#B0B8C8] text-sm sm:text-base leading-relaxed mt-3">
                      Your game. Your squad. Your glory. Draft your dream World Cup
                      squad, set your captain, and compete for league supremacy every
                      matchday.
                    </p>
                  </div>
                </div>

                <a
                  href="https://btfantasyfootball.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C853] to-[#00a844] text-[#0B0F19] font-bold text-sm rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 self-start shadow-lg shadow-[#00C853]/20"
                >
                  <span>Build Your Squad</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Right — stats + features */}
              <div className="lg:col-span-3 p-6 sm:p-8 space-y-6">

                {/* Stats strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {fantasyStats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/[0.04] border border-white/8 rounded-xl px-3 py-4 text-center"
                    >
                      <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                      <p className="text-[#B0B8C8] text-[10px] font-semibold tracking-wide uppercase mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <div className="space-y-2.5">
                  {[
                    { icon: FiShield,  text: 'Draft 15-man squads from 32 World Cup nations',  badge: null },
                    { icon: FiZap,     text: 'Set your captain for 2× points every matchday',   badge: { label: 'Captain', variant: 'captain' } },
                    { icon: FiStar,    text: 'Live scoring synced to real match statistics',      badge: { label: 'Live', variant: 'live' } },
                    { icon: FiClock,   text: 'Transfer deadline — lock lineups before kick-off', badge: { label: 'Deadline', variant: 'deadline' } },
                  ].map(({ icon: Icon, text, badge }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3"
                    >
                      <Icon className="text-[#00C853] shrink-0" />
                      <span className="text-[#F5F7FA] text-sm flex-1">{text}</span>
                      {badge && <Badge label={badge.label} variant={badge.variant} />}
                    </div>
                  ))}
                </div>

                {/* Bottom tagline */}
                <p className="text-[#B0B8C8] text-xs italic leading-relaxed border-t border-white/5 pt-4">
                  "Pick your squad. Set your captain. Stake your claim."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Supporting 5-card grid ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {supportingCards.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`group relative flex flex-col bg-white/[0.03] backdrop-blur-sm border ${s.accentBorder} rounded-2xl p-6 hover:shadow-xl ${s.accentGlow} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              {s.icon ? (
                <div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                  <img src={s.icon} alt={s.name} className="w-full h-full object-contain p-1.5" loading="lazy" />
                </div>
              ) : (
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#0057B8]/30 to-[#FFC527]/20 flex items-center justify-center">
                  <FiStar className="text-[#FFC527] text-xl" />
                </div>
              )}

              <h3 className="text-lg font-black text-[#F5F7FA] mb-2">{s.name}</h3>
              <p className="text-[#B0B8C8] text-sm leading-relaxed flex-1">{s.description}</p>

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
        <div className="h-px bg-gradient-to-r from-transparent via-[#00C853]/30 to-transparent mb-16" />

        {/* ── Tagline section ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0057B8]/15 border border-[#0057B8]/30 rounded-full">
              <span className="text-[#B0B8C8] text-xs font-semibold tracking-widest">
                @PremiumSportsConus
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] leading-tight">
              Feeding Every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#0057B8]">
                Football Fan's
              </span>{' '}
              Desire
            </h3>

            <p className="text-[#B0B8C8] text-base leading-relaxed max-w-md">
              From live scores and expert predictions to exclusive merch drops and
              fantasy competitions — Bettitude has everything the modern football
              fan needs.
            </p>

            <div className="space-y-3">
              {[
                'World Cup 2026 Group Stage Preview',
                'Top 5 Players to Watch This Tournament',
                'Best Fantasy Captains for Matchday 1',
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                  <span className="text-[#F5F7FA] text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00C853]/10 to-[#0057B8]/10 border border-[#00C853]/25 rounded-3xl p-8 text-center space-y-6">

              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#00C853]/50 to-transparent rounded-full" />

              {/* Shield icon */}
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#00C853]/20 to-[#0057B8]/30 border border-[#00C853]/30 flex items-center justify-center shadow-xl shadow-[#00C853]/15">
                <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 4 L56 14 L56 34 C56 48 44 58 32 62 C20 58 8 48 8 34 L8 14 Z"
                    stroke="#00C853"
                    strokeWidth="2.5"
                    fill="#00C853"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M32 4 L56 14 L56 34 C56 48 44 58 32 62 C20 58 8 48 8 34 L8 14 Z"
                    stroke="#00C853"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <text x="32" y="38" textAnchor="middle" fill="#FFC527" fontSize="14" fontWeight="900" fontFamily="system-ui">BTFF</text>
                </svg>
              </div>

              <div>
                <div className="flex justify-center mb-2">
                  <Badge label="Fantasy Live" variant="live" />
                </div>
                <h4 className="text-2xl font-black text-[#F5F7FA]">BT Fantasy Football</h4>
                <p className="text-[#B0B8C8] text-sm mt-2 leading-relaxed">
                  Experience the 2026 World Cup like never before — draft squads,
                  pick captains, earn points from real match stats.
                </p>
              </div>

              <a
                href="https://btfantasyfootball.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C853] to-[#00a844] text-[#0B0F19] font-bold text-sm rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#00C853]/20"
              >
                Play Now
                <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
