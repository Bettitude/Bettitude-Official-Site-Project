import React, { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiCheckCircle,
  FiArrowRight,
  FiLoader,
} from "react-icons/fi";
import { submitForm } from "../utils/formSubmit";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, loading, success, error

  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "AU" },
    { code: "+91", country: "IN" },
    { code: "+234", country: "NG" },
    { code: "+27", country: "ZA" },
    { code: "+254", country: "KE" },
    { code: "+233", country: "GH" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+39", country: "IT" },
    { code: "+34", country: "ES" },
    { code: "+31", country: "NL" },
    { code: "+46", country: "SE" },
    { code: "+47", country: "NO" },
    { code: "+45", country: "DK" },
    { code: "+358", country: "FI" },
    { code: "+48", country: "PL" },
    { code: "+32", country: "BE" },
    { code: "+41", country: "CH" },
    { code: "+43", country: "AT" },
    { code: "+353", country: "IE" },
    { code: "+351", country: "PT" },
    { code: "+30", country: "GR" },
    { code: "+90", country: "TR" },
    { code: "+7", country: "RU" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
    { code: "+82", country: "KR" },
    { code: "+55", country: "BR" },
    { code: "+52", country: "MX" },
    { code: "+54", country: "AR" },
    { code: "+57", country: "CO" },
    { code: "+56", country: "CL" },
    { code: "+20", country: "EG" },
    { code: "+212", country: "MA" },
    { code: "+971", country: "UAE" },
    { code: "+966", country: "SA" },
    { code: "+974", country: "QA" },
    { code: "+65", country: "SG" },
    { code: "+60", country: "MY" },
    { code: "+63", country: "PH" },
    { code: "+66", country: "TH" },
    { code: "+62", country: "ID" },
    { code: "+84", country: "VN" },
    { code: "+64", country: "NZ" },
    { code: "+256", country: "UG" },
    { code: "+255", country: "TZ" },
    { code: "+237", country: "CM" },
    { code: "+225", country: "CI" },
  ];

  const services = [
    "Betting Consultation",
    "Sports Analysis Strategy",
    "Bettitude Product Inquiry",
    "Business To Bettitude Service/Product Offering",
    "Advertising Inquiry",
    "Partnership Discussion",
    "General Inquiry",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

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
      const submissionData = {
        ...formData,
        phone: `${countryCode} ${formData.phone}`.trim(),
      };
      await submitForm("appointment", submissionData);
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
      setCountryCode("");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F19] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#0057B8]/10 to-[#FFC527]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-30">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiCalendar className="text-[#FFC527] text-sm" />
            <span className="text-[#E0E0E0] text-sm font-semibold">
              Book Your Session
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Schedule an
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              {" "}
              Appointment
            </span>
          </h1>

          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our services can help elevate your sports betting
            experience
          </p>

          <div className="flex justify-center">
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">
                Why Book With Us?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: FiCheckCircle,
                    text: "Expert consultation from industry professionals",
                  },
                  {
                    icon: FiCheckCircle,
                    text: "Personalized betting strategies tailored to you",
                  },
                  {
                    icon: FiCheckCircle,
                    text: "Access to premium insights and analysis",
                  },
                  {
                    icon: FiCheckCircle,
                    text: "Flexible scheduling to fit your needs",
                  },
                  {
                    icon: FiCheckCircle,
                    text: "Brand Promotion and Partnership",
                  },
                  {
                    icon: FiCheckCircle,
                    text: "Use our platform to grow your brand visibility",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <item.icon className="text-[#FFC527] text-xl flex-shrink-0 mt-1" />
                    <span className="text-[#E0E0E0]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#FFC527]/30 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#E0E0E0]">
                  <FiMail className="text-[#FFC527] text-xl" />
                  <span>support@bettitude.com</span>
                </div>
                <div className="flex items-center space-x-3 text-[#E0E0E0]">
                  <FiPhone className="text-[#FFC527] text-xl" />
                  <span>+61 412 877 500</span>
                </div>
                <div className="flex items-center space-x-3 text-[#E0E0E0]">
                  <FiClock className="text-[#FFC527] text-xl" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#0057B8]/20 to-transparent backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC527]/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-black text-white mb-3">
                  Need Help?
                </h3>
                <p className="text-[#E0E0E0] mb-4">
                  Our support team is available to assist you with any questions
                  about our services.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-[#FFC527] font-semibold hover:text-white transition-colors duration-300"
                >
                  <span>Contact Support</span>
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-8 lg:p-10">
            {submitStatus === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <FiCheckCircle className="text-[#0B0F19] text-4xl" />
                </div>
                <h3 className="text-3xl font-black text-white">
                  Appointment Booked!
                </h3>
                <p className="text-[#E0E0E0] text-lg">
                  Thank you! We've received your appointment request and will
                  send you a confirmation email shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 px-6 py-2 bg-[#0057B8]/30 border border-[#0057B8]/50 text-white rounded-xl hover:bg-[#0057B8]/50 transition-all duration-300"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-3xl font-black text-white mb-6">
                  Book Your Appointment
                </h3>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-center">
                    <p className="text-red-400 font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                    <FiUser className="text-[#FFC527]" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={submitStatus === "loading"}
                    className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                    <FiMail className="text-[#FFC527]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitStatus === "loading"}
                    className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                    <FiPhone className="text-[#FFC527]" />
                    <span>Phone Number</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      required
                      disabled={submitStatus === "loading"}
                      className="w-[130px] flex-shrink-0 px-2 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Code</option>
                      {countryCodes.map((cc, idx) => (
                        <option key={idx} value={cc.code} className="bg-[#0B0F19]">
                          {cc.code} ({cc.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === "loading"}
                      className="flex-1 px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="412 877 500"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                    <FiMessageSquare className="text-[#FFC527]" />
                    <span>Service Type</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={submitStatus === "loading"}
                    className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option
                        key={idx}
                        value={service}
                        className="bg-[#0B0F19]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                      <FiCalendar className="text-[#FFC527]" />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                      <FiClock className="text-[#FFC527]" />
                      <span>Time</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === "loading"}
                      className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, idx) => (
                        <option key={idx} value={time} className="bg-[#0B0F19]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-[#E0E0E0] font-semibold flex items-center space-x-2">
                    <FiMessageSquare className="text-[#FFC527]" />
                    <span>Additional Message (Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    disabled={submitStatus === "loading"}
                    className="w-full px-4 py-3 bg-[#0057B8]/10 border border-[#0057B8]/30 rounded-xl text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC527]/50 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitStatus === "loading" ? (
                    <>
                      <FiLoader className="text-xl animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Appointment</span>
                      <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}