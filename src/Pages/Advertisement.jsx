import React, { useState, useEffect } from 'react';
import {
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiTarget,
  FiMonitor,
  FiSmartphone,
  FiBarChart2,
  FiCheck,
  FiArrowRight,
  FiMail,
  FiDollarSign,
  FiZap,
  FiEye,
  FiAward,
} from 'react-icons/fi';
import { submitForm } from '../utils/formSubmit';
import { fetchPageImages } from '../utils/imageService';

export default function Advertisement() {
  const [pageImages, setPageImages] = useState({});
  useEffect(() => { fetchPageImages().then(setPageImages); }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    adType: '',
    budget: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: '', success: false });

  const stats = [
    { icon: FiUsers, value: '2M+', label: 'Monthly Active Users', color: 'from-[#FFC527] to-[#ffb700]' },
    { icon: FiEye, value: '15M+', label: 'Monthly Impressions', color: 'from-[#0057B8] to-[#003d82]' },
    { icon: FiGlobe, value: '50+', label: 'Countries Reached', color: 'from-[#FFC527] to-[#ffb700]' },
    { icon: FiTrendingUp, value: '85%', label: 'Engagement Rate', color: 'from-[#0057B8] to-[#003d82]' },
  ];

  const adFormats = [
    {
      icon: FiMonitor,
      title: 'Display Advertising',
      description: 'Premium banner placements across our platform with high visibility on match pages, analytics dashboards, and news sections.',
      features: ['Leaderboard banners', 'Sidebar placements', 'Interstitial ads', 'Native content integration'],
      color: 'from-[#FFC527] to-[#ffb700]',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Advertising',
      description: 'Reach our mobile-first audience with optimized ad formats designed for smartphones and tablets.',
      features: ['In-app banners', 'Push notifications', 'Interstitial screens', 'Native mobile ads'],
      color: 'from-[#0057B8] to-[#003d82]',
    },
    {
      icon: FiBarChart2,
      title: 'Sponsored Content',
      description: 'Integrate your brand into our editorial content with sponsored articles, match previews, and expert analysis.',
      features: ['Sponsored articles', 'Brand mentions', 'Product features', 'Expert collaborations'],
      color: 'from-[#FFC527] to-[#ffb700]',
    },
    {
      icon: FiMail,
      title: 'Newsletter Advertising',
      description: 'Access our engaged subscriber base through dedicated email placements and sponsored newsletter content.',
      features: ['Dedicated sends', 'Banner placements', 'Sponsored sections', 'Custom templates'],
      color: 'from-[#0057B8] to-[#003d82]',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for testing the waters',
      features: ['Display ads on select pages', 'Basic analytics dashboard', 'Email support', 'Monthly performance report'],
      highlight: false,
    },
    {
      name: 'Professional',
      description: 'Most popular for growing brands',
      features: ['All display ad placements', 'Mobile advertising', 'Newsletter inclusion', 'Priority support', 'Weekly analytics', 'A/B testing'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      description: 'Full partnership experience',
      features: ['All ad formats included', 'Sponsored content', 'Dedicated account manager', 'Custom integrations', 'Real-time analytics', 'Exclusive placements'],
      highlight: false,
    },
  ];

  const audienceDemo = [
    { label: 'Age 18-34', percentage: 65 },
    { label: 'Age 35-54', percentage: 28 },
    { label: 'Age 55+', percentage: 7 },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: '', success: false });

    try {
      await submitForm('advertisement', formData);
      setSubmitStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', company: '', phone: '', adType: '', budget: '', message: '' });
      setTimeout(() => setSubmitStatus((prev) => ({ ...prev, success: false })), 5000);
    } catch (error) {
      setSubmitStatus({ loading: false, error: error.message || 'Failed to submit. Please try again.', success: false });
      setTimeout(() => setSubmitStatus((prev) => ({ ...prev, error: '' })), 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pageImages.advertisement_hero || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80'}
            alt="Advertising"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/85 to-[#0B0F19]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 border border-[#0057B8]/50 rounded-full mb-6">
            <FiTarget className="text-[#FFC527]" />
            <span className="text-[#E0E0E0] font-semibold text-sm">Reach Sports Enthusiasts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Advertise with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Bettitude
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#E0E0E0] max-w-3xl mx-auto mb-10">
            Connect your brand with millions of passionate sports fans. Our platform offers premium advertising opportunities with measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Get Started</span>
              <FiArrowRight />
            </a>
            <a
              href="#ad-formats"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#0057B8]/20 border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
            >
              <span>View Ad Formats</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111827]/90 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-6 text-center hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="text-2xl text-[#0B0F19]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-[#E0E0E0] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Formats Section */}
      <div id="ad-formats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Advertising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Formats</span>
          </h2>
          <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
            Choose from a variety of high-impact advertising formats designed to maximize your brand exposure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adFormats.map((format, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border border-[#0057B8]/30 rounded-2xl p-8 hover:border-[#FFC527]/50 hover:scale-[1.02] transition-all duration-500"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${format.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <format.icon className="text-3xl text-[#0B0F19]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFC527] transition-colors duration-300">
                {format.title}
              </h3>
              <p className="text-[#E0E0E0] mb-6">{format.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {format.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <FiCheck className="text-[#FFC527] flex-shrink-0" />
                    <span className="text-sm text-[#E0E0E0]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Demographics */}
      <div className="bg-gradient-to-r from-[#0057B8]/10 via-[#0B0F19] to-[#FFC527]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Know Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Audience</span>
              </h2>
              <p className="text-lg text-[#E0E0E0] mb-8">
                Our audience consists of highly engaged sports enthusiasts who are passionate about sports analytics, betting insights, and staying ahead of the game.
              </p>
              <div className="space-y-6">
                {audienceDemo.map((demo, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">{demo.label}</span>
                      <span className="text-[#FFC527]">{demo.percentage}%</span>
                    </div>
                    <div className="h-3 bg-[#1F2937] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0057B8] to-[#FFC527] rounded-full transition-all duration-1000"
                        style={{ width: `${demo.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 text-center">
                <FiZap className="text-4xl text-[#FFC527] mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">High Intent</h4>
                <p className="text-sm text-[#E0E0E0]">Users actively seeking sports data</p>
              </div>
              <div className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 text-center">
                <FiDollarSign className="text-4xl text-[#FFC527] mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Premium Spending</h4>
                <p className="text-sm text-[#E0E0E0]">Higher than average disposable income</p>
              </div>
              <div className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 text-center">
                <FiUsers className="text-4xl text-[#FFC527] mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Loyal Community</h4>
                <p className="text-sm text-[#E0E0E0]">Strong retention and engagement</p>
              </div>
              <div className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 text-center">
                <FiAward className="text-4xl text-[#FFC527] mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Brand Advocates</h4>
                <p className="text-sm text-[#E0E0E0]">Active social media sharers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Advertising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Packages</span>
          </h2>
          <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
            Flexible packages designed to meet your marketing objectives and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border rounded-2xl p-8 transition-all duration-500 ${
                pkg.highlight
                  ? 'border-[#FFC527] scale-105 shadow-2xl shadow-[#FFC527]/20'
                  : 'border-[#0057B8]/30 hover:border-[#FFC527]/50'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold text-sm rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-[#E0E0E0] mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <FiCheck className="text-[#FFC527] mt-1 flex-shrink-0" />
                    <span className="text-[#E0E0E0]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry-form"
                className={`block text-center py-3 rounded-xl font-bold transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] hover:shadow-lg hover:shadow-[#FFC527]/50'
                    : 'bg-[#0057B8]/20 border border-[#0057B8] text-white hover:bg-[#0057B8]/40'
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div id="inquiry-form" className="bg-gradient-to-b from-[#0B0F19] to-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Campaign</span>
            </h2>
            <p className="text-lg text-[#E0E0E0]">
              Fill out the form below and our advertising team will get in touch within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Advertising Type *</label>
                <select
                  name="adType"
                  value={formData.adType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white focus:border-[#FFC527] focus:outline-none transition-colors"
                >
                  <option value="">Select ad type</option>
                  <option value="display">Display Advertising</option>
                  <option value="mobile">Mobile Advertising</option>
                  <option value="sponsored">Sponsored Content</option>
                  <option value="newsletter">Newsletter Advertising</option>
                  <option value="multiple">Multiple Formats</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Monthly Budget *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white focus:border-[#FFC527] focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Tell us about your campaign goals</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors resize-none"
                placeholder="Describe your advertising objectives, target audience, and any specific requirements..."
              />
            </div>

            {submitStatus.error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
                {submitStatus.error}
              </div>
            )}
            {submitStatus.success && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                Thank you! We'll be in touch shortly to discuss your advertising needs.
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus.loading}
              className="w-full py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {submitStatus.loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
