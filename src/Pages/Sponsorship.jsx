import React, { useState } from 'react';
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiHeart,
  FiStar,
  FiZap,
  FiShield,
  FiCheck,
  FiArrowRight,
  FiTarget,
  FiDollarSign,
  FiBarChart2,
  FiVideo,
  FiMic,
} from 'react-icons/fi';
import { submitForm } from '../utils/formSubmit';

export default function Sponsorship() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    sponsorshipType: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: '', success: false });

  const benefits = [
    {
      icon: FiGlobe,
      title: 'Global Visibility',
      description: 'Get your brand seen by millions of sports enthusiasts across 50+ countries worldwide.',
    },
    {
      icon: FiUsers,
      title: 'Engaged Audience',
      description: 'Connect with a highly engaged community of sports analytics and betting enthusiasts.',
    },
    {
      icon: FiTrendingUp,
      title: 'Brand Growth',
      description: 'Accelerate your brand recognition through strategic placements and co-branded content.',
    },
    {
      icon: FiShield,
      title: 'Trusted Association',
      description: 'Align with a respected name in sports data and analytics technology.',
    },
  ];

  const sponsorshipTiers = [
    {
      tier: 'Bronze Partner',
      icon: FiAward,
      color: 'from-[#CD7F32] to-[#8B4513]',
      benefits: [
        'Logo on website footer',
        'Social media mentions (monthly)',
        'Partner directory listing',
        'Newsletter acknowledgment',
        'Quarterly performance reports',
      ],
      exclusive: false,
    },
    {
      tier: 'Silver Partner',
      icon: FiStar,
      color: 'from-[#C0C0C0] to-[#808080]',
      benefits: [
        'All Bronze benefits',
        'Logo on homepage',
        'Bi-weekly social media features',
        'Sponsored blog content (2/month)',
        'Event co-branding rights',
        'Monthly strategy calls',
      ],
      exclusive: false,
    },
    {
      tier: 'Gold Partner',
      icon: FiZap,
      color: 'from-[#FFC527] to-[#ffb700]',
      benefits: [
        'All Silver benefits',
        'Premium logo placement',
        'Weekly social media features',
        'Video content integration',
        'Podcast sponsorship',
        'Product integrations',
        'Dedicated account manager',
        'Exclusive industry reports',
      ],
      exclusive: true,
    },
    {
      tier: 'Platinum Partner',
      icon: FiHeart,
      color: 'from-[#0057B8] to-[#003d82]',
      benefits: [
        'All Gold benefits',
        'Title sponsorship opportunities',
        'Co-branded products/features',
        'VIP event access',
        'Executive advisory sessions',
        'Custom integration development',
        'Exclusive market data access',
        'Priority feature requests',
      ],
      exclusive: true,
    },
  ];

  const partnershipTypes = [
    {
      icon: FiVideo,
      title: 'Content Partnership',
      description: 'Co-create engaging sports content, analysis videos, and data-driven insights with our team.',
    },
    {
      icon: FiBarChart2,
      title: 'Data Partnership',
      description: 'Access exclusive sports data, analytics APIs, and real-time feeds for your platform.',
    },
    {
      icon: FiMic,
      title: 'Media Partnership',
      description: 'Cross-promote through our podcasts, newsletters, and social media channels.',
    },
    {
      icon: FiDollarSign,
      title: 'Affiliate Partnership',
      description: 'Earn revenue by referring users to Bettitude products and services.',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: '', success: false });

    try {
      await submitForm('sponsorship', formData);
      setSubmitStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', company: '', phone: '', sponsorshipType: '', message: '' });
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Partnership"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/85 to-[#0B0F19]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 border border-[#0057B8]/50 rounded-full mb-6">
            <FiHeart className="text-[#FFC527]" />
            <span className="text-[#E0E0E0] font-semibold text-sm">Partner With Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Sponsorship &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Partnership
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#E0E0E0] max-w-3xl mx-auto mb-10">
            Join forces with Bettitude and unlock exclusive opportunities to grow your brand in the sports analytics industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-form"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Become a Partner</span>
              <FiArrowRight />
            </a>
            <a
              href="#sponsorship-tiers"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#0057B8]/20 border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
            >
              <span>View Tiers</span>
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Bettitude</span>
          </h2>
          <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
            Discover the advantages of becoming a strategic partner in the sports analytics ecosystem
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border border-[#0057B8]/30 rounded-2xl p-6 text-center hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-3xl text-[#0B0F19]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC527] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Types */}
      <div className="bg-gradient-to-r from-[#0057B8]/10 via-[#0B0F19] to-[#FFC527]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Opportunities</span>
            </h2>
            <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
              Multiple ways to collaborate and grow together
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-[#111827]/80 border border-[#0057B8]/30 rounded-2xl p-6 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-xl flex items-center justify-center">
                  <type.icon className="text-2xl text-[#FFC527]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-sm text-[#E0E0E0]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <div id="sponsorship-tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Sponsorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Tiers</span>
          </h2>
          <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
            Choose the partnership level that aligns with your goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border rounded-2xl p-6 transition-all duration-500 ${
                tier.exclusive
                  ? 'border-[#FFC527]/50 hover:border-[#FFC527]'
                  : 'border-[#0057B8]/30 hover:border-[#FFC527]/50'
              }`}
            >
              {tier.exclusive && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold text-xs rounded-full">
                  Premium
                </div>
              )}
              <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center`}>
                <tier.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tier.tier}</h3>
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FiCheck className="text-[#FFC527] mt-1 flex-shrink-0 text-sm" />
                    <span className="text-sm text-[#E0E0E0]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#partnership-form"
                className={`block text-center py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  tier.exclusive
                    ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] hover:shadow-lg hover:shadow-[#FFC527]/30'
                    : 'bg-[#0057B8]/20 border border-[#0057B8] text-white hover:bg-[#0057B8]/40'
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Form */}
      <div id="partnership-form" className="bg-gradient-to-b from-[#0B0F19] to-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">Partner Up</span>
            </h2>
            <p className="text-lg text-[#E0E0E0]">
              Tell us about your organization and partnership interests
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
                <label className="block text-white font-semibold mb-2">Company/Organization *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors"
                  placeholder="Your Organization"
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
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Partnership Interest *</label>
              <select
                name="sponsorshipType"
                value={formData.sponsorshipType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white focus:border-[#FFC527] focus:outline-none transition-colors"
              >
                <option value="">Select partnership type</option>
                <option value="bronze">Bronze Partner</option>
                <option value="silver">Silver Partner</option>
                <option value="gold">Gold Partner</option>
                <option value="platinum">Platinum Partner</option>
                <option value="content">Content Partnership</option>
                <option value="data">Data Partnership</option>
                <option value="media">Media Partnership</option>
                <option value="affiliate">Affiliate Partnership</option>
                <option value="custom">Custom Partnership</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Tell us about your partnership goals</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-xl text-white placeholder-gray-500 focus:border-[#FFC527] focus:outline-none transition-colors resize-none"
                placeholder="Describe your organization, target audience, and what you hope to achieve through this partnership..."
              />
            </div>

            {submitStatus.error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
                {submitStatus.error}
              </div>
            )}
            {submitStatus.success && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                Thank you for your interest! Our partnership team will reach out within 48 hours.
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
                  <span>Submit Partnership Inquiry</span>
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
