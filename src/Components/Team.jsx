import React, { useState } from 'react';
import { FiLinkedin, FiTwitter, FiMail, FiUsers, FiAward, FiTrendingUp, FiHeart } from 'react-icons/fi';
import Profile from '../assets/Profile.jpg'


export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const leadership = [
    {
      name: 'Henry Bundu',
      role: 'CEO & Founder',
      image: Profile,
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Visionary leader with 15+ years in sports analytics and technology. Founded Bettitude to revolutionize sports entertainment.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@bettitude.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      image: Profile,
      bio: 'Tech innovator specializing in AI and machine learning. Leading our data science and engineering teams.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@bettitude.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operating Officer',
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      image: Profile,
      bio: 'Operations expert with deep sports industry knowledge. Ensuring excellence in everything we deliver.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@bettitude.com'
      }
    }
  ];

  const departments = [
    // {
    //   name: 'Analytics Team',
    //   icon: FiTrendingUp,
    //   color: 'from-[#0057B8] to-[#003d82]',
    //   members: [
    //     {
    //       name: 'David Martinez',
    //       role: 'Head of Analytics',
    //       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    //       image: Profile,
    //       expertise: 'Statistical Modeling, Sports Data'
    //     },
    //     {
    //       name: 'Emma Wilson',
    //       role: 'Senior Data Scientist',
    //       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    //       image: Profile,
    //       expertise: 'Machine Learning, Predictions'
    //     },
    //     {
    //       name: 'James Brown',
    //       role: 'Sports Analyst',
    //       image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    //       image: Profile,
    //       expertise: 'Football Analytics, Research'
    //     }
    //   ]
    // },
    {
      name: 'Content Team',
      icon: FiUsers,
      color: 'from-[#FFC527] to-[#ffb700]',
      members: [
        {
          name: 'Olivia Davis',
          role: 'Head of Content',
          // image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
          image: Profile,
          expertise: 'Sports Journalism, Editorial'
        },
        {
          name: 'Liam Anderson',
          role: 'Senior Sports Writer',
          // image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
          image: Profile,
          expertise: 'Match Analysis, Previews'
        },
        {
          name: 'Sophia Garcia',
          role: 'Video Producer',
          // image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
          image: Profile,
          expertise: 'Video Content, Social Media'
        }
      ]
    },
    {
      name: 'Engineering Team',
      icon: FiAward,
      color: 'from-[#0057B8] to-[#003d82]',
      members: [
        {
          name: 'Alex Turner',
          role: 'Lead Engineer',
          // image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
          image: Profile,
          expertise: 'Full Stack, Architecture'
        },
        {
          name: 'Nina Patel',
          role: 'Frontend Developer',
          // image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
          image: Profile,
          expertise: 'React, UI/UX Development'
        },
        {
          name: 'Ryan Cooper',
          role: 'Backend Developer',
          // image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80',
          image: Profile,
          expertise: 'Node.js, Database Design'
        }
      ]
    }
  ];

  const stats = [
    { icon: FiUsers, value: '50+', label: 'Team Members' },
    { icon: FiAward, value: '10+', label: 'Countries' },
    { icon: FiTrendingUp, value: '6+', label: 'Years Experience' },
    { icon: FiHeart, value: '100%', label: 'Passion for Sports' }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8 py-30">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiUsers className="text-[#FFC527] text-sm" />
            <span className="text-[#E0E0E0] text-sm font-semibold">Meet The Team</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            The People Behind
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Bettitude
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            A diverse team of passionate sports enthusiasts, data scientists, engineers, and content creators united by one mission: revolutionizing sports entertainment
          </p>

          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
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
                  <p className="text-[#E0E0E0] font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="relative py-24 bg-gradient-to-b from-transparent via-[#0057B8]/5 to-transparent">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Leadership Team
            </h2>
            <p className="text-xl text-[#E0E0E0]">Guiding Bettitude to excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl overflow-hidden hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 transition-all duration-500"></div>
                
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#0057B8] font-bold">{member.role}</p>
                  </div>

                  <p className="text-[#E0E0E0] leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:bg-[#0057B8]/40 transition-all duration-300"
                    >
                      <FiLinkedin />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:bg-[#0057B8]/40 transition-all duration-300"
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:bg-[#0057B8]/40 transition-all duration-300"
                    >
                      <FiMail />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Teams */}
      {departments.map((dept, deptIndex) => (
        <div key={deptIndex} className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Department Header */}
            <div className="flex items-center justify-center mb-16 space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center`}>
                <dept.icon className="text-[#0B0F19] text-3xl" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                {dept.name}
              </h2>
            </div>

            {/* Team Members Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {dept.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl overflow-hidden hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 transition-all duration-500"></div>
                  
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FFC527] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#0057B8] font-semibold text-sm">{member.role}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#FFC527] rounded-full"></div>
                      <p className="text-[#E0E0E0] text-sm">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Join Team CTA */}
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

              <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
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