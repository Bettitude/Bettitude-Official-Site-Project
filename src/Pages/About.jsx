import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiChevronDown, FiUsers, FiGlobe, FiTrendingUp, FiAward, FiTarget, FiArrowRight, FiCode, FiCpu, FiBarChart2 } from 'react-icons/fi';
import { fetchPageImages } from '../utils/imageService';

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);
  const [pageImages, setPageImages] = useState({});
  useEffect(() => { fetchPageImages().then(setPageImages); }, []);

  const timeline = [
    {
      year: '2016',
      title: 'The Beginning',
      description: 'Started as a one-page side project driven by passion for understanding the "why" behind sporting outcomes and belief that data could make sports more enjoyable and rewarding for everyone.'
    },
    {
      year: '2018-2020',
      title: 'Evolution & Growth',
      description: 'Completely rebuilt our platforms with modern UX/UI, leveraging real-time data from powerful APIs and integrating sophisticated AI and predictive modeling.'
    },
    {
      year: '2024',
      title: 'Leading Innovation',
      description: 'Now a leading sports data technology company, operating globally with flagship products serving millions of users across multiple continents.'
    }
  ];

  const faqs = [
    
  {
    "question": "What is Bettitude and what services do you offer?",
    "answer": "Bettitude Inc. is a sports data technology company focused on enhancing sports entertainment through expert analysis, real-time statistics, and proprietary technology. Our key products include BettiScores for real-time scores and player data, ProBetPicks for data-driven betting analysis, and BettiSports Blog for strategic sports content."
  },
  {
    "question": "Who is Bettitude's content and service designed for?",
    "answer": "Our services are built for sports lovers who value data. This includes passionate fans who want deeper insights, fantasy sports players who need reliable statistics, and sports bettors seeking disciplined, analytical decision-making."
  },
  {
    "question": "Is Bettitude currently free to use?",
    "answer": "Yes. Most of Bettitude's core services, including BettiScores, foundational ProBetPicks content, and all BettiSports Blog articles, are currently free."
  },
  {
    "question": "How does Bettitude sustain its operations if the services are free?",
    "answer": "We sustain operations through affiliate partnerships, advertising and sponsorships, as well as data licensing and consultancy services provided to B2B clients."
  },
  {
    "question": "Will Bettitude ever become a paid service?",
    "answer": "Yes. We plan to introduce paid subscription tiers within the next one to two years to support the expansion of our AI models, real-time data feeds, and expert analyst team."
  },
  {
    "question": "What will happen to the free services when paid subscriptions are introduced?",
    "answer": "We will maintain a strong free tier. BettiScores will remain mostly free, BettiSports Blog will keep offering high-quality free content, and ProBetPicks will introduce a Premium Tier while preserving basic free insights."
  },
  {
    "question": "What features will be included in future paid tiers?",
    "answer": "Paid tiers will include exclusive predictive models, deeper statistical data, an ad-free experience, and direct access to expert analysts, among other premium features."
  },
  {
    "question": "Where does the data on BettiScores come from, and how fast is it?",
    "answer": "BettiScores sources data from multiple industry-leading high-speed APIs. Our internal aggregation and cleaning systems ensure that updates are delivered in near real-time with high accuracy."
  },
  {
    "question": "Are ProBetPicks guaranteed to win?",
    "answer": "No. While ProBetPicks uses advanced statistical models and expert reviews to provide high-probability predictions, no outcome in sports is guaranteed. We emphasize long-term profitability and risk management."
  },
  {
    "question": "How many markets does ProBetPicks cover?",
    "answer": "ProBetPicks covers multiple markets including Goals, Corners, Winnings, and more. Our platforms—BettiScores, BettiSports Blog, Fantasy Sports, and ProBetPicks—provide insights across major leagues worldwide."
  },
  {
    "question": "What exactly is our strategy recommendation?",
    "answer": "Our strategy recommendations combine statistical analysis, historical performance, team metrics, and real-time factors powered by advanced AI predictive modeling to transform predictions into strategic insights."
  },
  {
    "question": "How guaranteed are ProBetPicks tips and predictions?",
    "answer": "Our predictions are powered by advanced AI models and expert analysis, reaching up to 95% accuracy. While no prediction is 100% guaranteed, our approach delivers high-quality, data-backed insights."
  },
  {
    "question": "How can Bettitude Admin assistance be reached?",
    "answer": "You can contact our support team 24/7 via live chat, email at hello@bettitude.com, or by calling our hotline."
  }
  ];

  const stats = [
    { icon: FiUsers, value: '5K+', label: 'Monthly Users' },
    { icon: FiGlobe, value: '5+', label: 'Countries' },
    { icon: FiTrendingUp, value: '95%', label: 'Accuracy Rate' },
    { icon: FiAward, value: '2+', label: 'Years Experience' }
  ];

  const services = [
    {
      icon: FiBarChart2,
      title: 'For the Enthusiast',
      description: 'Our platform provides a rich source of content, from in-depth statistical breakdowns to engaging articles and blogs. We turn raw data into compelling narratives that deepen a fan\'s understanding of the game.'
    },
    {
      icon: FiTarget,
      title: 'For the Bettor',
      description: 'We empower our community to make informed decisions. Our ProBetPicks platform leverages a blend of API data analysis, predictive models, and expert human insight to provide high-quality picks and comprehensive risk management guidance.'
    },
    {
      icon: FiAward,
      title: 'Making Sports Rewarding',
      description: 'We believe sports should be an active and rewarding experience. By providing the tools and knowledge to understand the game on a deeper level, we enable our users to feel a sense of ownership and excitement.'
    }
  ];

  return (
    <div className="relative py-30 min-h-screen bg-[#0B0F19]">

      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={pageImages.about_hero || 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80'}
            alt="Team celebrating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 lg:space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiTarget className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">About Bettitude Inc.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-4">
            Our Mission
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] px-4">
            To empower sports fans with smarter,
            <br />
            transparent and entertaining insights
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-4xl mx-auto leading-relaxed px-4">
            through sports data technology for analytics and engaging media. Bettitude Inc. is a leading sports data technology company dedicated to transforming the way fans engage with sports through the power of statistics, content, and entertainment. Reaching over 50,000+ users every month, our platforms create unmissable experiences through market-leading editorial, data, analytics, and AI-powered insights.
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                
                <div className="relative text-center space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl">
                    <stat.icon className="text-[#0B0F19] text-lg sm:text-xl lg:text-2xl" />
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="relative py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Story</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                Our journey began modestly in <span className="text-[#FFC527] font-bold">2016</span> as a one-page side project, driven by a passion for understanding the "why" behind sporting outcomes and a belief that data could make sports more enjoyable and rewarding for everyone.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                Over the years, Bettitude has evolved from a simple concept into a <span className="text-white font-semibold">robust and advanced project</span>. We have completely rebuilt our platforms, moving beyond older designs to create a seamless and modern user experience (UX) and user interface (UI) that are built on the latest technologies.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                This evolution has been fueled by a deep commitment to innovation, leveraging <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] font-bold">real-time data from powerful APIs</span> and integrating sophisticated Artificial Intelligence (AI) and predictive modeling. Our technology is designed not just to present information, but to generate insights and make sports more accessible and interactive for our community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-[#0057B8]/20 to-transparent backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#FFC527]/50 transition-all duration-300">
                <FiCode className="text-[#FFC527] text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Modern Tech Stack</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm">Built on latest technologies with seamless UX/UI</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFC527]/20 to-transparent backdrop-blur-sm border border-[#FFC527]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#0057B8]/50 transition-all duration-300 mt-4 sm:mt-6 lg:mt-8">
                <FiCpu className="text-[#0057B8] text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">AI-Powered</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm">Sophisticated AI and predictive modeling</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFC527]/20 to-transparent backdrop-blur-sm border border-[#FFC527]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#0057B8]/50 transition-all duration-300 -mt-2 sm:-mt-4">
                <FiBarChart2 className="text-[#0057B8] text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Real-Time Data</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm">Powered by advanced APIs for live insights</p>
              </div>
              <div className="bg-gradient-to-br from-[#0057B8]/20 to-transparent backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#FFC527]/50 transition-all duration-300 mt-2 sm:mt-4">
                <FiGlobe className="text-[#FFC527] text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4" />
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Global Reach</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm">Serving users across 50+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Value Proposition Section */}
      <div className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent via-[#0057B8]/5 to-transparent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Statement */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
              <FiTarget className="text-[#FFC527] text-xs sm:text-sm" />
              <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Our Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4 leading-tight">
              To become the world's most
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> trusted and entertaining platform</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto px-4">
              for sports predictions intelligence, entertainment and fan engagement
            </p>
          </div>

          {/* Value Proposition Card */}
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#FFC527]/20 via-[#0057B8]/20 to-[#FFC527]/10 backdrop-blur-xl border-2 border-[#FFC527]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden group hover:border-[#0057B8]/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/0 to-[#0057B8]/0 group-hover:from-[#0057B8]/20 group-hover:to-[#FFC527]/20 transition-all duration-500"></div>
              
              <div className="relative text-center space-y-4 sm:space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl sm:rounded-2xl shadow-lg shadow-[#FFC527]/30">
                  <FiAward className="text-[#0B0F19] text-2xl sm:text-3xl lg:text-4xl" />
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">
                  Our Value Proposition
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#E0E0E0] leading-relaxed max-w-3xl mx-auto">
                  We combine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] font-bold">API & AI-driven analytics</span>, expert insights, and deep sports data to give bettors a <span className="text-white font-semibold">competitive edge</span>
                </p>

                <div className="flex justify-center pt-2">
                  <div className="h-1 w-24 bg-gradient-to-r from-[#0057B8] via-[#FFC527] to-[#0057B8] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4">
              {/* Our Services & */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Our Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-3xl mx-auto px-4">
              Creating value for users, subscribers, and followers through our flagship products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl">
                    <service.icon className="text-[#0B0F19] text-lg sm:text-xl lg:text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base text-[#E0E0E0] leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-4xl mx-auto">
              Ultimately, our goal at <span className="text-[#FFC527] font-bold">Bettitude Inc.</span> is to make sports enjoyable and rewarding for all, providing a single, intelligent hub where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] font-bold">passion for the game meets the power of data.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-12 sm:py-16 lg:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0]">Building excellence, one milestone at a time</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                    {item.year}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#E0E0E0] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent to-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
              <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4">
              BETTITUDE Help Desk:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> FAQs</span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FFC527]/50 transition-all duration-300"
              >
               <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-white pr-3 sm:pr-4">{faq.question}</span>
                  <FiChevronDown
                    className={`text-[#FFC527] text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                    <p className="text-xs sm:text-sm lg:text-base text-[#E0E0E0] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}