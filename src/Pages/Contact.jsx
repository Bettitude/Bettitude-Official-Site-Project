import React, { useState } from "react";
import {
  FiMail,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { submitForm } from "../utils/formSubmit";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, loading, success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      await submitForm("contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "General info and Technical Support",
      description:
        "For general information about BETTITUDE and any issues regarding support",
      email: "support@bettitude.com",
      color: "from-[#FFC527] to-[#ffb700]",
    },
    {
      icon: FiMessageSquare,
      title: "Press info",
      description:
        "All inquiry and information about Bettitude Sports blog and press-related issues or more",
      email: "pr@bettitude.com",
      color: "from-[#0057B8] to-[#003d82]",
    },
    {
      icon: FiSend,
      title: "B2B, Advertisement & Sponsorship",
      description:
        "For information regarding sponsorships and advert placements",
      email: "b2bops@bettitude.com",
      color: "from-[#FFC527] to-[#ffb700]",
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  const additionalInfo = [
    { icon: FiPhone, text: "+61412877500", label: "Phone Support" },
    { icon: FiMail, text: "hello@bettitude.com", label: "Mail" },
    {
      icon: FiMapPin,
      text: "25 Ladbroke Avenue, Burnie, Tas 7320, Australia",
      label: "Address",
    },
    { icon: FiClock, text: "24/7 Support Available", label: "Hours" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-8 py-12 sm:py-30">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiMail className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-4">
            Need Assistance?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Reach Out
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] max-w-3xl mx-auto px-4">
            We're here to help! Choose the best way to connect with us
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                <div className="relative space-y-4 sm:space-y-6">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="text-[#0B0F19] text-2xl sm:text-3xl" />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#E0E0E0] leading-relaxed text-sm sm:text-base min-h-[50px] sm:min-h-[60px]">
                      {info.description}
                    </p>
                  </div>

                  <a
                    href={`mailto:${info.email}`}
                    className="group/email flex items-center space-x-2 text-[#FFC527] font-semibold text-sm sm:text-base hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Write to us at:</span>
                  </a>

                  <a
                    href={`mailto:${info.email}`}
                    className="block px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl text-white font-bold text-sm sm:text-base hover:bg-[#0057B8]/40 hover:border-[#FFC527]/50 transition-all duration-300"
                  >
                    {info.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-[#FFC527]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 hover:from-[#FFC527]/10 hover:to-[#0057B8]/10 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"></div>

              <div className="relative space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-[#E0E0E0] text-sm sm:text-base">
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0B0F19]/80 border-2 border-[#0057B8]/50 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 text-sm sm:text-base focus:border-[#FFC527] focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0B0F19]/80 border-2 border-[#0057B8]/50 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 text-sm sm:text-base focus:border-[#FFC527] focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#0B0F19]/80 border-2 border-[#0057B8]/50 rounded-lg sm:rounded-xl text-white placeholder-[#E0E0E0]/50 text-sm sm:text-base focus:border-[#FFC527] focus:outline-none transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={
                      submitStatus === "loading" || submitStatus === "success"
                    }
                    className={`group w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                      submitStatus === "success"
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105"
                    }`}
                  >
                    {submitStatus === "loading" && (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    )}
                    {submitStatus === "success" && (
                      <>
                        <FiCheckCircle className="text-lg sm:text-xl" />
                        <span>Message Sent!</span>
                      </>
                    )}
                    {submitStatus === "idle" && (
                      <>
                        <span>Let's Get Started</span>
                        <FiSend className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info & Social Links */}
            <div className="space-y-6 sm:space-y-8">
              {/* Social Media */}
              <div className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 transition-all duration-500">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Follow Us
                  </h3>
                  <p className="text-[#E0E0E0] text-sm sm:text-base">
                    Stay connected on social media for the latest updates
                  </p>

                  <div className="flex space-x-3 sm:space-x-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:border-[#FFC527]/50 hover:scale-110 transition-all duration-300"
                      >
                        <social.icon className="text-xl sm:text-2xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FFC527]/50 transition-all duration-500">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Other Ways to Reach Us
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {additionalInfo.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 sm:space-x-4 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-[#FFC527]/50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-[#0B0F19] text-lg sm:text-xl" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {item.label}
                          </p>
                          <p className="text-[#E0E0E0] text-xs sm:text-sm">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="text-[#0B0F19] text-2xl sm:text-3xl" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">
                      Quick Response
                    </p>
                    <p className="text-[#E0E0E0] text-xs sm:text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
