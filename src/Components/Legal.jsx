import React, { useState } from "react";
import { FiShield, FiLock, FiAlertTriangle, FiFileText, FiHeart, FiMail, FiChevronRight } from "react-icons/fi";

const Legal = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const legalSections = [
    {
      id: 1,
      icon: FiFileText,
      title: "Terms of Service",
      subtitle: "Your Agreement with Bettitude",
      description: "The Terms of Service constitute a legally binding agreement between you and Bettitude Inc., outlining the rules and conditions for accessing and using our platforms, content, and services.",
      highlights: [
        "User Responsibilities (account creation, conduct, restrictions)",
        "Service Access (free tier, subscriptions, feature limitations)",
        "Termination conditions & policy enforcement",
        "Governing Law & dispute resolution jurisdiction"
      ],
      link: "/terms-of-service",
      gradient: "from-[#0057B8] to-[#003d82]",
      accentColor: "#0057B8"
    },
    {
      id: 2,
      icon: FiLock,
      title: "Privacy Policy",
      subtitle: "How We Protect Your Data",
      description: "Our Privacy Policy explains how we collect, use, store, and protect your information across Bettitude platforms.",
      highlights: [
        "Data collected (personal, technical, usage)",
        "How data is used (payments, personalization, analytics)",
        "Data sharing with third-party service providers",
        "Your rights (GDPR, CCPA, access, deletion, portability)"
      ],
      link: "/privacy-policy",
      gradient: "from-[#FFC527] to-[#ffb700]",
      accentColor: "#FFC527"
    },
    {
      id: 3,
      icon: FiAlertTriangle,
      title: "Disclaimer & Risk Warning",
      subtitle: "Understanding Financial Risks",
      description: "This disclaimer applies especially to ProBetPicks and all prediction content.",
      highlights: [
        "No guarantee of profit or prediction accuracy",
        "All wagering & financial decisions carry risk",
        "Content is informational—NOT financial or legal advice",
        "Bettitude is not a bookmaker; users must follow local laws"
      ],
      link: "/disclaimer",
      gradient: "from-[#0057B8] to-[#FFC527]",
      accentColor: "#FFC527"
    },
    {
      id: 4,
      icon: FiShield,
      title: "Copyright & Intellectual Property",
      subtitle: "Protecting Our Innovation",
      description: "All content, models, code, trademarks, and analytics tools are the exclusive intellectual property of Bettitude Inc.",
      highlights: [
        "Unauthorized reproduction or distribution is prohibited",
        "Logos & trademarks (Bettitude™, BettiScores™, ProBetPicks™)",
        "API & data licensing available for commercial use"
      ],
      link: null,
      gradient: "from-[#003d82] to-[#0057B8]",
      accentColor: "#0057B8"
    },
    {
      id: 5,
      icon: FiHeart,
      title: "Responsible Gambling Policy",
      subtitle: "Stay Safe, Play Smart",
      description: "We support healthy and responsible gambling behavior and provide resources to help users stay in control.",
      highlights: [
        "Educational tools for safe wagering",
        "Guidance to avoid compulsive gambling",
        "Links to professional addiction support",
        "Users must be of legal gambling age in their jurisdiction"
      ],
      link: null,
      gradient: "from-[#ffb700] to-[#FFC527]",
      accentColor: "#FFC527"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0057B8]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#FFC527]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC527]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Header */}
      <div className="relative z-10 bg-gradient-to-br from-[#0057B8]/20 via-transparent to-[#FFC527]/10 border-b border-[#0057B8]/20">
        <div className="max-w-7xl mx-auto px-6 py-30">
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFC527] blur-lg animate-pulse"></div>
              <div className="relative p-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-2xl rotate-3">
                <FiShield className="text-[#0B0F19] text-3xl" />
              </div>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC527] to-transparent rounded-full"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Legal & Compliance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] mt-2">
              Hub
            </span>
          </h1>

          <p className="text-xl text-[#B0B8C8] leading-relaxed max-w-3xl">
            Welcome to the Legal Hub for <span className="text-white font-bold">Bettitude Inc.</span> and its associated
            properties, including <span className="text-[#FFC527] font-semibold">Bettiscores.com</span> and <span className="text-[#FFC527] font-semibold">ProBetPicks.com</span>. This page
            serves as a central location for accessing the formal agreements and
            policies that govern the use of our websites, mobile applications, and
            services.
          </p>

          <div className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/40 rounded-full">
            <div className="w-2 h-2 bg-[#FFC527] rounded-full animate-pulse"></div>
            <span className="text-[#B0B8C8] font-semibold text-sm">Your engagement with any Bettitude platform signifies acceptance</span>
          </div>
        </div>
      </div>

      {/* Legal Sections Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {legalSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-[#0057B8]/10 to-transparent backdrop-blur-sm border border-[#0057B8]/20 rounded-3xl p-8 transition-all duration-500 group-hover:border-[#FFC527]/40 group-hover:transform group-hover:scale-[1.02]">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 bg-gradient-to-br ${section.gradient} rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-[#FFC527] font-black text-lg">{section.id}.</span>
                          <h2 className="text-2xl font-black text-white">{section.title}</h2>
                        </div>
                        <p className="text-[#B0B8C8] text-sm font-semibold">{section.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#B0B8C8] leading-relaxed mb-6">
                    {section.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {section.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 transition-all duration-300"
                        style={{
                          transform: hoveredCard === section.id ? 'translateX(8px)' : 'translateX(0)',
                          transitionDelay: `${idx * 50}ms`
                        }}
                      >
                        <div className="w-2 h-2 bg-[#FFC527] rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FFC527]/50"></div>
                        <p className="text-[#B0B8C8] text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {section.link && (
                    <a
                      href={section.link}
                      className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${section.gradient} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[${section.accentColor}]/30 group-hover:translate-x-2`}
                    >
                      <span>Read Full Document</span>
                      <FiChevronRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FFC527]/20 to-[#0057B8]/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#FFC527]/5 backdrop-blur-xl border border-[#FFC527]/30 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <FiMail className="text-[#FFC527] text-3xl" />
                  <h2 className="text-3xl font-black text-white">Compliance Inquiries</h2>
                </div>
                
                <div className="h-1 w-16 bg-gradient-to-r from-[#FFC527] to-transparent rounded-full mb-6"></div>
                
                <p className="text-[#B0B8C8] text-lg leading-relaxed mb-8">
                  For questions about legal documents, data issues, or compliance matters, our legal team is here to assist you.
                </p>

                <a
                  href="mailto:legal@bettitude.com"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-black rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/40 transition-all duration-300 hover:scale-105"
                >
                  <FiMail className="text-xl" />
                  <span>Contact Legal Team</span>
                  <FiChevronRight className="text-xl" />
                </a>
              </div>

              {/* Right Content - Contact Info */}
              <div className="space-y-6">
                <div className="p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-[#FFC527] rounded-full"></div>
                    <p className="text-white font-bold text-lg">Email Address</p>
                  </div>
                  <a href="mailto:legal@bettitude.com" className="text-[#FFC527] text-xl font-semibold hover:text-[#ffb700] transition-colors">
                    legal@bettitude.com
                  </a>
                </div>

                <div className="p-6 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-[#FFC527] rounded-full"></div>
                    <p className="text-white font-bold text-lg">Mailing Address</p>
                  </div>
                  <p className="text-[#B0B8C8] leading-relaxed">
                    <span className="text-white font-semibold">Bettitude Inc.</span><br />
                    Legal Department<br />
                   25 Ladbroke Avenue<br />
                    Burnie, Tas 7320<br />
                    Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[#B0B8C8] text-sm">
            Last Updated: November 2025 • All policies are subject to change with notice
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Legal;