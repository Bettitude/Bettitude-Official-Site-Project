import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiTwitter, FiMail, FiInstagram, FiYoutube, FiGlobe, FiUsers, FiAward, FiTrendingUp, FiHeart, FiLoader } from 'react-icons/fi';
// FiLinkedin … FiGlobe used inside SocialLinks component below
import Profile from '../assets/Profile.jpg'
import { fetchPageImages, fetchTeamImages } from '../utils/imageService';

const SOCIAL_ICONS = [
  { key: 'linkedin',  Icon: FiLinkedin,  href: (v) => v },
  { key: 'twitter',   Icon: FiTwitter,   href: (v) => v },
  { key: 'instagram', Icon: FiInstagram, href: (v) => v },
  { key: 'youtube',   Icon: FiYoutube,   href: (v) => v },
  { key: 'website',   Icon: FiGlobe,     href: (v) => v },
  { key: 'email',     Icon: FiMail,      href: (v) => `mailto:${v}` },
];

function SocialLinks({ member }) {
  const links = SOCIAL_ICONS.filter(s => member[s.key]);
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-2 pt-4">
      {links.map(({ key, Icon, href }) => (
        <a
          key={key}
          href={href(member[key])}
          target={key === 'email' ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center text-[#B0B8C8] hover:text-[#FFC527] hover:bg-[#0057B8]/40 transition-all duration-300"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

export default function TeamPage() {
  const [pageImages, setPageImages]   = useState({});
  const [leadership, setLeadership]   = useState([]);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    fetchPageImages().then(setPageImages);
    fetchTeamImages()
      .then((rows) => {
        const members = (rows || []).map((r, i) => ({
          name:      r.name      || '',
          role:      r.role      || '',
          bio:       r.bio       || '',
          image_url: r.image_url || null,
          linkedin:  r.linkedin  || '',
          twitter:   r.twitter   || '',
          email:     r.email     || '',
          instagram: r.instagram || '',
          youtube:   r.youtube   || '',
          website:   r.website   || '',
          isFounder: i === 0,
        })).filter(m => m.name);
        setLeadership(members);
      })
      .catch((err) => console.error('[Team] fetch failed:', err))
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { icon: FiUsers,     value: '15+',  label: 'Team Members' },
    { icon: FiAward,     value: '3+',   label: 'Countries of Location' },
    { icon: FiTrendingUp,value: '10+',  label: 'Combined Experience (across different fields)' },
    { icon: FiHeart,     value: '101%', label: 'Passion for Sports' }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">

      {/* ── Hero ── */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.team_hero || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'}
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8 py-30">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiUsers className="text-[#FFC527] text-sm" />
            <span className="text-[#B0B8C8] text-sm font-semibold">Meet The Team</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            The People Behind
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Bettitude
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-[#B0B8C8] max-w-3xl mx-auto leading-relaxed">
            A diverse team of passionate sports enthusiasts, engineers, and content creators united by one mission: revolutionizing sports entertainment
          </p>

          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="relative -mt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-2xl transition-all duration-500"></div>
                <div className="relative text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl">
                    <stat.icon className="text-[#0B0F19] text-2xl" />
                  </div>
                  <p className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                    {stat.value}
                  </p>
                  <p className="text-[#B0B8C8] font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Leadership ── */}
      <div className="relative py-24 bg-gradient-to-b from-transparent via-[#0057B8]/5 to-transparent">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Leadership Team</h2>
            <p className="text-xl text-[#B0B8C8]">Guiding Bettitude to excellence</p>
            <div className="flex justify-center pt-2">
              <div className="h-1 w-20 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center py-20">
              <FiLoader size={32} className="text-[#FFC527] animate-spin" />
            </div>
          )}

          {/* First member — centred hero card */}
          {!loading && leadership.length > 0 && (
            <div className="flex justify-center mb-8">
              <div className="group relative w-full max-w-sm bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/40 rounded-3xl overflow-hidden hover:border-[#FFC527] transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 transition-all duration-500"></div>

                {leadership[0].isFounder && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                      Founder
                    </span>
                  </div>
                )}

                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={leadership[0].image_url || Profile}
                    alt={leadership[0].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="relative p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {leadership[0].name}
                    </h3>
                    <p className="text-[#0057B8] font-bold">{leadership[0].role}</p>
                  </div>
                  <p className="text-[#B0B8C8] leading-relaxed">{leadership[0].bio}</p>
                  <SocialLinks member={leadership[0]} />
                </div>
              </div>
            </div>
          )}

          {/* Remaining members — grid */}
          {!loading && leadership.length === 0 && (
            <p className="text-center text-[#B0B8C8]/60 py-10">No team members found.</p>
          )}
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.slice(1).map((member, index) => (
              <div
                key={member.name || index}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl overflow-hidden hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 transition-all duration-500"></div>

                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image_url || Profile}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="relative p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#0057B8] font-bold">{member.role}</p>
                  </div>
                  <p className="text-[#B0B8C8] leading-relaxed">{member.bio}</p>
                  <SocialLinks member={member} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Join CTA ── */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

            <div className="relative text-center space-y-8">
              <h3 className="text-4xl lg:text-5xl font-black text-white">
                Want to Join Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Amazing Team?</span>
              </h3>
              <p className="text-xl text-[#B0B8C8] max-w-2xl mx-auto">
                We're always looking for talented, passionate individuals who share our vision of revolutionizing sports entertainment
              </p>
              <div className="pt-4">
                <a
                  href="/careers"
                  className="group inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span>View Open Positions</span>
                  <FiUsers className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}