import React, { useState } from 'react';
import { FaTrophy, FaHandshake, FaUsers, FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaUser, FaPaperPlane } from 'react-icons/fa';
import { submitForm } from '../utils/formSubmit';

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.company || !formData.partnershipType || !formData.message) return;

    setSubmitStatus("loading");
    try {
      await submitForm("partnership", formData);
      setSubmitStatus("success");
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        partnershipType: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const benefits = [
    {
      icon: FaTrophy,
      title: 'Brand Visibility',
      description: 'Gain exposure across our platforms and events reaching thousands of sports enthusiasts worldwide.'
    },
    {
      icon: FaHandshake,
      title: 'Strategic Alliance',
      description: 'Collaborate with a leading sports data technology company serving 5000+ users monthly.'
    },
    {
      icon: FaUsers,
      title: 'Community Impact',
      description: 'Make a real difference by supporting our mission to build a digitally unified global sports audience.'
    },
    {
      icon: FaRocket,
      title: 'Growth Opportunities',
      description: 'Access exclusive networking events, co-branded marketing, and AI-powered insights.'
    }
  ];

  const partnershipTypes = [
    'Platinum Sponsor',
    'Gold Sponsor',
    'Silver Sponsor',
    'Equipment Partner',
    'Media Partner',
    'Technology Partner',
    'Community Partner',
    'Other'
  ];

 const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'hello@bettitude.com',
    link: 'mailto:hello@bettitude.com'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+61412877500',
    link: 'tel:+61412877500'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    value: '25 Ladbroke Avenue, Burnie, Tas 7320, Australia',
    link: null
  }
];


  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 lg:space-y-8 py-12 sm:py-16 lg:py-30">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
            <FaHandshake className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Partnership Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-4">
            Become a Partner
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] px-4">
            Building the Future of Sports
            <br className="hidden sm:block" />
            Together
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-4xl mx-auto leading-relaxed px-4">
            Join us in transforming how fans engage with sports through the power of data,  and entertainment. Partner with a company reaching 5000+ users monthly across 50+ countries.
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Benefits Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Partnership
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Benefits</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-3xl mx-auto">
              Discover the advantages of partnering with Bettitude Inc.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl">
                      <Icon className="text-[#0B0F19] text-lg sm:text-xl lg:text-2xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-[#E0E0E0] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base text-[#E0E0E0] mb-6 sm:mb-8">
                  Fill out the form below and our partnership team will reach out to you within 24-48 hours.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFC527]" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFC527]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                        Company Name *
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFC527]" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-11 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFC527]" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                      Partnership Type *
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    >
                      <option value="" className="bg-[#0B0F19]">Select partnership type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-[#0B0F19]">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#E0E0E0] font-semibold mb-2 text-sm sm:text-base">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#0B0F19]/50 border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#FFC527] focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us about your interest in partnering with Bettitude..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={submitStatus === "loading"}
                    className="w-full bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <FaPaperPlane />
                        Request Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Submit Partnership Request
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 rounded-lg sm:rounded-xl text-center">
                      <p className="text-green-300 font-semibold text-sm sm:text-base">Thank you for your interest! We will contact you within 24-48 hours.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-lg sm:rounded-xl text-center">
                      <p className="text-red-300 font-semibold text-sm sm:text-base">Something went wrong. Please try again.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-base sm:text-xl text-[#0B0F19]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-[#E0E0E0] hover:text-[#FFC527] transition-colors text-xs sm:text-sm break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-[#E0E0E0] text-xs sm:text-sm">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#0057B8] to-[#0057B8]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#FFC527]/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#FFC527]/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">
                  Quick Response
                </h3>
                <p className="text-[#E0E0E0] mb-3 sm:mb-4 text-sm sm:text-base">
                  Our partnership team typically responds within 24-48 hours during business days.
                </p>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
                  <div className="w-2 h-2 bg-[#FFC527] rounded-full animate-pulse"></div>
                  <span className="text-[#FFC527] text-xs sm:text-sm font-semibold">Available 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative text-center space-y-3 sm:space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl mx-auto">
                  <FaTrophy className="text-[#0B0F19] text-xl sm:text-2xl" />
                </div>
                <p className="text-[#E0E0E0] text-xs sm:text-sm leading-relaxed">
                  Join <span className="text-[#FFC527] font-bold">5000+</span> users and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527] font-bold">leading brands</span> in our global sports community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;