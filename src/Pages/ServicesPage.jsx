import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPageImages } from '../utils/imageService';
import {
  FiBarChart2,
  FiDatabase,
  FiTrendingUp,
  FiVideo,
  FiCpu,
  FiBriefcase,
  FiTarget,
  FiZap,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiDollarSign,
  FiUsers,
  FiGlobe,
  FiShield,
  FiAward,
} from 'react-icons/fi';

const ServicesPage = () => {
  const { hash } = useLocation();
  const [pageImages, setPageImages] = useState({});
  useEffect(() => { fetchPageImages().then(setPageImages); }, []);

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
      title: 'Betting Analytics',
      tagline: 'Data-Driven Betting Intelligence',
      description:
        'Transform your betting strategy with our sophisticated analytics platform. We leverage proprietary AI-driven predictive models that synthesize vast historical and real-time data to generate high-probability wagers.',
      longDescription:
        'Our betting analytics service goes beyond simple predictions. We provide comprehensive risk analysis, tailored bankroll management strategies, and multi-factor decision frameworks. Every pick is backed by rigorous statistical testing and real-time market analysis.',
      features: [
        { title: 'Predictive Models', desc: 'AI-powered predictions with 75%+ accuracy rates' },
        { title: 'Risk Assessment', desc: 'Detailed risk-reward analysis for every bet' },
        { title: 'Odds Comparison', desc: 'Real-time odds from 50+ bookmakers' },
        { title: 'Bankroll Tools', desc: 'Smart money management strategies' },
      ],
      stats: [
        { value: '75%+', label: 'Accuracy Rate' },
        { value: '50+', label: 'Bookmakers Tracked' },
        { value: '10K+', label: 'Daily Predictions' },
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50',
    },
    {
      id: 'igaming',
      icon: FiPlay,
      title: 'iGaming & Entertainment',
      tagline: 'Powering the Future of Gaming',
      description:
        'Comprehensive solutions for iGaming platforms and entertainment companies. We provide real-time data feeds, player analytics, and engagement tools designed for the modern gaming industry.',
      longDescription:
        'Our iGaming services help operators maximize player engagement and revenue. From live betting data integration to player behavior analytics, we deliver the tools needed to stay competitive in the fast-paced gaming industry.',
      features: [
        { title: 'Live Betting Data', desc: 'Real-time feeds for in-play wagering' },
        { title: 'Player Analytics', desc: 'Deep insights into player behavior' },
        { title: 'Platform Integration', desc: 'Seamless API integration for gaming platforms' },
        { title: 'Engagement Tools', desc: 'Features to boost player retention' },
      ],
      stats: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '<50ms', label: 'Latency' },
        { value: '24/7', label: 'Support' },
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50',
    },
    {
      id: 'predictions',
      icon: FiCpu,
      title: 'Live Predictions',
      tagline: 'AI-Powered Real-Time Insights',
      description:
        'Experience the power of real-time AI predictions. Our machine learning models process thousands of data points per second to deliver instant, actionable predictions during live matches.',
      longDescription:
        'Our live prediction engine uses advanced deep learning algorithms trained on millions of historical data points. We factor in real-time match dynamics, player performance, weather conditions, and market movements to generate predictions that adapt as the game unfolds.',
      features: [
        { title: 'Real-Time Processing', desc: 'Predictions updated every 30 seconds' },
        { title: 'Multi-Sport Coverage', desc: 'Football, basketball, tennis, and more' },
        { title: 'Confidence Scores', desc: 'Probability ratings for every prediction' },
        { title: 'Alert System', desc: 'Instant notifications for high-value opportunities' },
      ],
      stats: [
        { value: '30s', label: 'Update Frequency' },
        { value: '15+', label: 'Sports Covered' },
        { value: '1M+', label: 'Predictions/Day' },
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50',
    },
    {
      id: 'news',
      icon: FiTrendingUp,
      title: 'Sports News & Live Updates',
      tagline: 'Stay Ahead of the Game',
      description:
        'Never miss a crucial update. Our news platform delivers lightning-fast coverage of breaking news, live scores, injury reports, and transfer news across all major leagues and sports.',
      longDescription:
        'Our editorial team works around the clock to bring you the news that matters. We combine automated data feeds with expert analysis to provide context-rich updates that help you make informed decisions, whether you are betting, trading, or just following your favorite teams.',
      features: [
        { title: 'Breaking News', desc: 'First to report on major developments' },
        { title: 'Live Scores', desc: 'Real-time scores across all leagues' },
        { title: 'Expert Analysis', desc: 'In-depth commentary from industry experts' },
        { title: 'Custom Alerts', desc: 'Personalized notifications for your teams' },
      ],
      stats: [
        { value: '500+', label: 'News/Day' },
        { value: '100+', label: 'Leagues Covered' },
        { value: '<1min', label: 'Breaking News Speed' },
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50',
    },
    {
      id: 'media',
      icon: FiVideo,
      title: 'Sports Media Production',
      tagline: 'Premium Content Creation',
      description:
        'Elevate your content with our professional media production services. From video analysis to podcasts and infographics, we create engaging content that captivates audiences.',
      longDescription:
        'Our media team combines sports expertise with creative excellence. We produce original video content, develop insightful podcasts, create visually stunning infographics, and provide comprehensive media packages for brands looking to establish authority in the sports space.',
      features: [
        { title: 'Video Production', desc: 'Match analysis and highlights' },
        { title: 'Podcast Creation', desc: 'Sports talk shows and interviews' },
        { title: 'Infographics', desc: 'Data visualization and social content' },
        { title: 'Branded Content', desc: 'Custom content for partners' },
      ],
      stats: [
        { value: '100+', label: 'Videos/Month' },
        { value: '50K+', label: 'Social Reach' },
        { value: '10+', label: 'Podcast Episodes/Month' },
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50',
    },
    {
      id: 'consultancy',
      icon: FiBriefcase,
      title: 'Sports Business Consultancy',
      tagline: 'Strategic Growth Partners',
      description:
        'Leverage our deep expertise in sports data, technology, and analytics. We provide specialized consulting services to professional sports teams, media companies, and investment firms.',
      longDescription:
        'Our consultancy practice brings together decades of combined experience in sports analytics, technology, and business strategy. We help organizations optimize their use of data, develop new revenue streams, and navigate the rapidly evolving sports technology landscape.',
      features: [
        { title: 'Data Strategy', desc: 'Optimize your data infrastructure' },
        { title: 'Market Analysis', desc: 'Deep dive into market opportunities' },
        { title: 'Partnership Brokerage', desc: 'Connect with the right partners' },
        { title: 'Revenue Optimization', desc: 'Maximize your commercial potential' },
      ],
      stats: [
        { value: '50+', label: 'Clients Served' },
        { value: '$10M+', label: 'Revenue Generated' },
        { value: '95%', label: 'Client Satisfaction' },
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50',
    },
  ];

  const whyChooseUs = [
    {
      icon: FiDatabase,
      title: 'Data Excellence',
      description: 'Access to comprehensive sports data from hundreds of sources worldwide.',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered',
      description: 'Cutting-edge machine learning models trained on billions of data points.',
    },
    {
      icon: FiShield,
      title: 'Reliability',
      description: '99.9% uptime with enterprise-grade infrastructure and security.',
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Industry veterans with deep expertise in sports and technology.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.services_hero || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80'}
            alt="Our Services"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 border border-[#0057B8]/50 rounded-full mb-6">
            <FiTarget className="text-[#FFC527]" />
            <span className="text-[#B0B8C8] font-semibold">Our Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Comprehensive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Sports Solutions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#B0B8C8] max-w-4xl mx-auto mb-10">
            From cutting-edge analytics to premium content production, we deliver end-to-end solutions that help you stay ahead in the world of sports data and entertainment.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#analytics"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Explore Services</span>
              <FiArrowRight />
            </a>
            <a
              href="/appointment"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0057B8]/20 border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
            >
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Offer</span>
          </h2>
          <p className="text-lg text-[#B0B8C8] max-w-2xl mx-auto">
            Tailored solutions designed to meet the unique needs of sports enthusiasts, betting professionals, and gaming operators.
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative bg-gradient-to-br ${service.bgGradient} border border-[#0057B8]/30 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-[#FFC527]/50 transition-all duration-500`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="text-white text-3xl sm:text-4xl" />
                    </div>
                    <div>
                      <span className="text-[#FFC527] font-bold text-sm uppercase tracking-wider">
                        {service.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#B0B8C8] text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <p className="text-[#B0B8C8] leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl sm:text-3xl font-black text-[#FFC527]">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-[#B0B8C8]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                    <FiZap className="text-[#FFC527] mr-2" /> Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0B0F19]/60 border border-[#0057B8]/20 rounded-xl p-4 hover:border-[#FFC527]/30 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <FiCheck className="text-[#FFC527] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                            <p className="text-[#B0B8C8] text-xs mt-1">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/appointment"
                    className={`mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-[#0B0F19] font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <span>Get Started</span>
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-[#0057B8]/10 via-[#0B0F19] to-[#FFC527]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Bettitude</span>
            </h2>
            <p className="text-lg text-[#B0B8C8] max-w-2xl mx-auto">
              What sets us apart in the sports data and analytics industry
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 text-center hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                  <item.icon className="text-3xl text-[#0B0F19]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#B0B8C8] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 border border-[#0057B8]/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Started?</span>
          </h2>
          <p className="text-lg text-[#B0B8C8] max-w-2xl mx-auto mb-8">
            Let's discuss how Bettitude can help you achieve your goals. Book a free consultation with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Book Free Consultation</span>
              <FiArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#0057B8]/20 border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
