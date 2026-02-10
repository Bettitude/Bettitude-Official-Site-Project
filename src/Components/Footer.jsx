import React from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowUp,
  FiTrendingUp,
  FiHeart,
  FiSmartphone,
} from 'react-icons/fi';
import { FaReddit, FaTiktok,FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Betlogo from "../assets/Betlogo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'News', href: '/news' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Sponsorship', href: '/sponorship' },
      { name: 'Advertisement', href: '/advertisment' },
    ],
    product: [
      { name: 'BettiSportsblog', href: 'https://BettiSportsblog.com', external: true },
      { name: 'ProBetPicks', href: 'https://ProBetPicks.com', external: true },
      { name: 'BettiScores', href: 'https://BettiScores.com', external: true },
      { name: 'SportDisandDat', href: 'https://sportdisanddat', external: true }
    ],
    services: [
  { name: 'Betting Analytics', href: '/services#analytics' },
  { name: 'Igaming Service & entertainment', href: '/services#igaming' },
  { name: 'Live Predictions', href: '/services#predictions' },
  { name: 'Sports News', href: '/services#news' },
  { name: 'Consultancy', href: '/services#consultancy' },
],

    resources: [
      // { name: 'Blog', href: '/blog' },
      // { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Feedback', href: '/feedback' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
    legal: [
      { name: 'Legal', href: '/legal' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookies-policy' },
    ],
  };

  const socialLinks = [
    {
      icon: FiFacebook,
      href: 'https://facebook.com/people/Bettitude/100071057204593/',
      label: 'Facebook',
      color: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/bettitude',
      label: 'Twitter',
      color: 'hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/50',
    },
    {
      icon: FiInstagram,
      href: 'https://instagram.com/bettitude_',
      label: 'Instagram',
      color: 'hover:bg-[#E4405F]/20 hover:border-[#E4405F]/50',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/company/bettitude',
      label: 'LinkedIn',
      color: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50',
    },
    {
      icon: FiYoutube,
      href: 'https://youtube.com/@bettitudeofficial',
      label: 'YouTube',
      color: 'hover:bg-[#FF0000]/20 hover:border-[#FF0000]/50',
    },
    {
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@bettitude_',
      label: 'TikTok',
      color: 'hover:bg-[#00F2EA]/20 hover:border-[#00F2EA]/50',
    },
    {
      icon: FaReddit,
      href: 'https://www.reddit.com/user/bettitude/',
      label: 'Reddit',
      color: 'hover:bg-[#FF4500]/20 hover:border-[#FF4500]/50',
    },
    {
      icon: FaTelegramPlane,
      href: 'https://t.me/bettitude',
      label: 'Telegra,',
      color: 'hover:bg-[#FF4500]/20 hover:border-[#FF4500]/50',
    },
  ];

  return (
    <footer className="relative bg-[#0B0F19] border-t border-[#0057B8]/30">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-[#0057B8] via-[#FFC527] to-[#0057B8]"></div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-4 sm:right-8 lg:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/50 hover:scale-110 transition-all duration-300 group z-10"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-[#0B0F19] text-lg sm:text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* Logo */}
            {/* <a href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0057B8] blur-xl opacity-50"></div>
                  <div className="relative text-3xl sm:text-4xl font-black">
                    <span className="text-[#FFFFFF]">Bett</span>
                    <span className="text-[#FFC527]">itude</span>
                  </div>
                </div>
              </div>
            </a> */}
            <Link to="/">
              <img src={Betlogo} alt="" loading="lazy" className='h-[50px]' />
            </Link>

            <p className="text-[#E0E0E0] leading-relaxed text-sm sm:text-base">
              Your trusted partner for sports data technology, sports analytics and sports media. We bring data driven insight and content  to help you stay ontop of the game.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@bettitude.com" className="flex items-center space-x-3 text-[#E0E0E0] hover:text-[#FFC527] transition-colors group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg flex items-center justify-center group-hover:bg-[#0057B8]/40 group-hover:border-[#FFC527]/50 transition-all duration-300">
                  <FiMail className="text-[#FFC527] text-base sm:text-lg" />
                </div>
                <span className="text-sm sm:text-base">hello@bettitude.com</span>
              </a>

              <a href="tel:+61412877500" className="flex items-center space-x-3 text-[#E0E0E0] hover:text-[#FFC527] transition-colors group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg flex items-center justify-center group-hover:bg-[#0057B8]/40 group-hover:border-[#FFC527]/50 transition-all duration-300">
                  <FiPhone className="text-[#FFC527] text-base sm:text-lg" />
                </div>
                <span className="text-sm sm:text-base">+61 412 877 500</span>
              </a>

              <div className="flex items-start space-x-3 text-[#E0E0E0]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-[#FFC527] text-base sm:text-lg" />
                </div>
                <span className="text-sm sm:text-base">25 Ladbroke Avenue, Burnie, Tas 7320, Australia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 sm:pt-4">
              <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 sm:w-12 sm:h-12 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg flex items-center justify-center text-[#FFC527] ${social.color} hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Company</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Products</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Services</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Resources</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Legal</span>
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter CTA Banner */}
        <div className="mb-10 sm:mb-12 bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center flex-shrink-0">
                <FiTrendingUp className="text-[#0B0F19] text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl">Stay Ahead of the Game</h3>
                <p className="text-[#E0E0E0] text-sm sm:text-base">Get weekly predictions and exclusive insights</p>
              </div>
            </div>
            <a
              href="/newsletter"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mb-10 sm:mb-12 bg-gradient-to-r from-[#0057B8]/20 via-[#0B0F19]/50 to-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-xl flex items-center justify-center flex-shrink-0">
                <FiSmartphone className="text-[#FFC527] text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl">Download Our App</h3>
                <p className="text-[#E0E0E0] text-sm sm:text-base">Get the full Bettitude experience on mobile</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/search?q=Bettitude+World&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 sm:px-6 py-3 bg-[#0B0F19] border border-[#0057B8]/50 rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                  <path d="M17.556 8.232L5.243.95a1.002 1.002 0 00-1.634.864L13.792 12l3.764-3.768z" fill="#EA4335"/>
                  <path d="M17.556 15.768L13.792 12 3.61 22.186a1 1 0 001.634.864l12.312-7.282z" fill="#34A853"/>
                  <path d="M21.39 12c0-.388-.14-.756-.452-.976l-3.382-2.792L13.792 12l3.764 3.768 3.382-2.792c.312-.22.452-.588.452-.976z" fill="#FBBC04"/>
                </svg>
                <div className="text-left">
                  <p className="text-[#E0E0E0] text-[10px] sm:text-xs leading-none">GET IT ON</p>
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">Google Play</p>
                </div>
              </a>

              {/* Apple Store Button */}
              <a
                href="https://apps.apple.com/app/bettitude-world"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 sm:px-6 py-3 bg-[#0B0F19] border border-[#0057B8]/50 rounded-xl hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[#E0E0E0] text-[10px] sm:text-xs leading-none">Download on the</p>
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0057B8]/30 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-[#E0E0E0] text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bettitude. All rights reserved. 
              <span className="inline-flex items-center ml-2 flex-wrap justify-center">
                Made with <FiHeart className="text-[#FFC527] mx-1" /> for sports enthusiasts
              </span>
            </p>

            {/* Trust Badges */}
            <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg">
                <span className="text-[#E0E0E0] text-xs font-semibold">🔒 SSL Secured</span>
              </div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg">
                <span className="text-[#E0E0E0] text-xs font-semibold">✓ Verified</span>
              </div>
            </div>
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-[#FFC527]/10 backdrop-blur-sm border border-[#FFC527]/30 rounded-lg">
            <p className="text-[#E0E0E0] text-xs text-center leading-relaxed">
              <strong className="text-[#FFC527]">Responsible Gaming:</strong> Betting should be fun and entertaining. 
              Please gamble responsibly and only bet what you can afford to lose. If you need help, visit BeGambleAware.org
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}