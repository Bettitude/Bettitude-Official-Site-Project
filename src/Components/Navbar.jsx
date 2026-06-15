import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiTrendingUp,
  FiBookOpen,
  FiPhone,
  FiArrowRight,
  FiLayers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Betlogo from "../assets/Betlogo.png";

export default function BettitudeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // NavLink component defined inside
  const NavLink = ({ href, icon: Icon, children }) => {
    return (
      <a
        href={href}
        className="group relative px-5 py-3 flex items-center space-x-2 text-[#B0B8C8] font-medium rounded-xl overflow-hidden transition-all duration-300 hover:text-[#FFFFFF]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/0 via-[#0057B8]/20 to-[#0057B8]/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -skew-x-12"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFC527] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Icon className="relative text-xl group-hover:text-[#FFC527] transition-colors duration-300" />
        </div>
        <span className="relative">{children}</span>
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFC527] to-transparent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
      </a>
    );
  };

  // MobileNavLink component defined inside
  const MobileNavLink = ({ href, icon: Icon, children }) => {
    return (
      <a
        href={href}
        className="group flex items-center space-x-4 px-6 py-4 rounded-xl bg-[#0057B8]/10 hover:bg-[#0057B8]/30 border border-[#0057B8]/20 hover:border-[#FFC527]/50 transition-all duration-300"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFC527] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <Icon className="relative text-2xl text-[#B0B8C8] group-hover:text-[#FFC527] transition-colors duration-300" />
        </div>
        <span className="text-lg font-semibold text-[#B0B8C8] group-hover:text-[#FFFFFF] transition-colors duration-300">
          {children}
        </span>
        <FiArrowRight className="ml-auto text-[#0057B8] group-hover:text-[#FFC527] group-hover:translate-x-1 transition-all duration-300" />
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0F19] shadow-2xl backdrop-blur-lg"
          : "bg-[#0B0F19]/95"
      }`}
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#0057B8] via-[#00C853] to-[#FFC527]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with animation */}
          <Link to="/">
            <div className="flex-shrink-0 group">
            <img
              src={Betlogo}
              alt="Bettitude Logo"
              className="h-6 sm:h-7 lg:h-8 xl:h-[30px] w-auto transition-all duration-300"
            />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink href="/" icon={FiHome}>
              Home
            </NavLink>
            <NavLink href="/product" icon={FiTrendingUp}>
              Products
            </NavLink>
            <NavLink href="/our-services" icon={FiLayers}>
              Services
            </NavLink>
            <NavLink href="/about" icon={FiInfo}>
              About
            </NavLink>
            <NavLink href="/news" icon={FiBookOpen}>
              News
            </NavLink>
            <NavLink href="/contact" icon={FiPhone}>
              Contact
            </NavLink>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="/appointment"
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-[#FFC527] text-[#0B0F19] font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#0057B8]/20 hover:bg-[#0057B8]/40 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <FiX className="absolute inset-0 w-6 h-6 text-[#FFC527]" />
                ) : (
                  <FiMenu className="absolute inset-0 w-6 h-6 text-[#FFC527]" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-[#0B0F19] to-[#0B0F19]/98 backdrop-blur-xl border-t border-[#0057B8]/30">
          <div className="px-6 py-8 space-y-3 max-w-7xl mx-auto">
            <MobileNavLink href="/" icon={FiHome}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/product" icon={FiTrendingUp}>
              Products
            </MobileNavLink>
            <MobileNavLink href="/our-services" icon={FiLayers}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/about" icon={FiInfo}>
              About
            </MobileNavLink>
            <MobileNavLink href="/news" icon={FiBookOpen}>
              News
            </MobileNavLink>
            <MobileNavLink href="/contact" icon={FiPhone}>
              Contact
            </MobileNavLink>

            {/* Mobile CTA */}
            <div className="pt-6">
              <a
                href="/appointment"
                className="group relative inline-flex items-center justify-center space-x-2 w-full px-8 py-5 bg-[#FFC527] text-[#0B0F19] font-bold rounded-xl shadow-2xl shadow-[#FFC527]/30 hover:shadow-[#FFC527]/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}