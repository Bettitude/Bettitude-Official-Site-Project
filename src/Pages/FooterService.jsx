import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiBarChart2,
  FiDatabase,
  FiTrendingUp,
  FiVideo,
  FiCpu,
  FiBriefcase,
  FiTarget,
  FiZap
} from 'react-icons/fi';
import { fetchPageImages } from '../utils/imageService';

const FooterService = () => {
  const { hash } = useLocation();
  const [pageImages, setPageImages] = useState({});
  useEffect(() => { fetchPageImages().then(setPageImages); }, []);

  // Ensure hash-based scrolling works after route change
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  const services = [
    {
      id: 'analytics',
      icon: FiBarChart2,
      title: 'Betting Analytics & Combination',
      description:
        'Sophisticated betting analytics that go beyond simple predictions. We leverage proprietary AI-driven predictive models that synthesize vast historical and real-time data to generate high-probability wagers.',
      features: [
        'Meticulously researched picks',
        'Tailored funds management plans',
        'Detailed risk analysis',
        'Strategic, data-informed investment approach'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'data',
      icon: FiDatabase,
      title: 'Sports Stats and Data Gathering',
      description:
        'At the heart of Bettitude is our comprehensive data gathering capability. We utilize robust, high-speed APIs and proprietary scraping technologies to collect, clean, and consolidate massive volumes of global sports data in real-time.',
      features: [
        'Real-time data collection',
        'Player performance metrics',
        'Team trends analysis',
        'Historical results database'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    },
    {
      id: 'news',
      icon: FiTrendingUp,
      title: 'Sports News and Live Updates',
      description:
        'Stay ahead with timely sports news and live updates. We deliver lightning-fast live scores, critical match events, and breaking news coverage, ensuring you\'re never behind the action.',
      features: [
        'Lightning-fast live scores',
        'Breaking news coverage',
        'Real-time data visualization',
        'Context-rich actionable insights'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'media',
      icon: FiVideo,
      title: 'Sports Media and Production',
      description:
        'Expanding our footprint with engaging and accessible content. We create video analysis segments, produce explanatory tutorials, develop insightful podcasts, and generate visually appealing infographics.',
      features: [
        'Video analysis segments',
        'Explanatory tutorials',
        'Insightful podcasts',
        'Visual infographics'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    },
    {
      id: 'ai-research',
      icon: FiCpu,
      title: 'Stats Research and AI in Sports',
      description:
        'The innovation engine of Bettitude. We invest heavily in designing and refining cutting-edge machine learning and deep learning models, identifying overlooked variables and optimizing predictive algorithms.',
      features: [
        'Machine learning models',
        'Predictive algorithm optimization',
        'Proprietary statistical methodologies',
        'Advanced technology research'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'consultancy',
      icon: FiBriefcase,
      title: 'Sports Business Consultancy',
      description:
        'Leveraging our deep expertise in sports data, technology, and analytics to provide specialized insights and solutions to professional sports teams, media companies, and investment firms.',
      features: [
        'Performance optimization models',
        'Scouting analysis',
        'Audience monetization strategies',
        'B2B sports tech authority'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">

      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.footer_service_bg || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'}
            alt="Bettitude Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 border border-[#0057B8]/50 rounded-full">
            <FiTarget className="text-[#FFC527]" />
            <span className="text-[#E0E0E0] font-semibold">What We Do</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white">
            Bettitude Core
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Services
            </span>
          </h1>

          <p className="text-lg text-[#E0E0E0] max-w-4xl mx-auto">
            Transforming sports data into actionable insights through advanced AI,
            comprehensive analytics, and cutting-edge technology solutions
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative bg-gradient-to-br ${service.bgGradient} border border-[#0057B8]/30 rounded-3xl p-10 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500`}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="text-white text-4xl" />
                  </div>
                  <div>
                    <span className="text-[#FFC527] font-bold">Service {index + 1}</span>
                    <h2 className="text-3xl font-black text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-[#E0E0E0] text-lg">{service.description}</p>

                <div>
                  <h3 className="text-white font-bold flex items-center mb-3">
                    <FiZap className="text-[#FFC527] mr-2" /> Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 bg-[#0B0F19]/40 border border-[#0057B8]/20 rounded-lg p-3"
                      >
                        <span className="w-2 h-2 mt-2 bg-[#FFC527] rounded-full" />
                        <span className="text-sm text-[#E0E0E0]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterService;
