import { FiHome, FiGrid, FiUsers, FiMail, FiMessageSquare, FiShield, FiBook, FiTrendingUp } from 'react-icons/fi';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: FiHome,
      color: 'from-[#FFC527] to-[#ffb700]',
      links: [
        { name: 'Home', href: '/', description: 'Welcome to Bettitude - Your sports data hub' },
        { name: 'About Us', href: '/about', description: 'Learn about our mission, vision, and journey' },
        { name: 'Products', href: '/product', description: 'Explore our flagship products and platforms' },
        { name: 'Team', href: '/team', description: 'Meet the experts behind Bettitude' },
      ]
    },
    {
      title: 'Services',
      icon: FiGrid,
      color: 'from-[#0057B8] to-[#003d82]',
      links: [
        { name: 'Our Services', href: '/our-services', description: 'Comprehensive overview of all our solutions' },
        { name: 'What We Do', href: '/services', description: 'Core services and capabilities' },
        { name: 'Betting Analytics', href: '/our-services#analytics', description: 'AI-driven betting predictions and analysis', sub: true },
        { name: 'iGaming & Entertainment', href: '/our-services#igaming', description: 'Gaming platform solutions and analytics', sub: true },
        { name: 'Live Predictions', href: '/our-services#predictions', description: 'Real-time AI-powered predictions', sub: true },
        { name: 'Sports News', href: '/our-services#news', description: 'Live scores and breaking news coverage', sub: true },
        { name: 'Media Production', href: '/our-services#media', description: 'Video analysis, podcasts, and infographics', sub: true },
        { name: 'Business Consultancy', href: '/our-services#consultancy', description: 'Expert sports business solutions', sub: true },
      ]
    },
    {
      title: 'Business',
      icon: FiTrendingUp,
      color: 'from-[#FFC527] to-[#ffb700]',
      links: [
        { name: 'Advertisement', href: '/advertisment', description: 'Advertise your brand with Bettitude' },
        { name: 'Sponsorship', href: '/sponorship', description: 'Become a sponsor and partner with us' },
        { name: 'Partnership', href: '/partner', description: 'Collaborate and grow together' },
        { name: 'Careers', href: '/careers', description: 'Join our growing team of innovators' },
      ]
    },
    {
      title: 'Contact & Support',
      icon: FiUsers,
      color: 'from-[#0057B8] to-[#003d82]',
      links: [
        { name: 'Contact Us', href: '/contact', description: 'Get in touch with our team' },
        { name: 'Book Appointment', href: '/appointment', description: 'Schedule a consultation with experts' },
        { name: 'Support Us', href: '/support', description: 'Help us keep the lights on' },
      ]
    },
    {
      title: 'Connect & Subscribe',
      icon: FiMail,
      color: 'from-[#FFC527] to-[#ffb700]',
      links: [
        { name: 'Newsletter', href: '/newsletter', description: 'Subscribe for weekly insights and updates' },
        { name: 'Feedback', href: '/feedback', description: 'Share your thoughts and suggestions' },
        { name: 'Community', href: '/community', description: 'Join the Bettitude community' },
      ]
    },
    {
      title: 'Legal & Policies',
      icon: FiShield,
      color: 'from-[#FFC527] to-[#ffb700]',
      links: [
        { name: 'Legal Center', href: '/legal', description: 'Legal information and compliance' },
        { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we protect your data' },
        { name: 'Terms of Service', href: '/terms-of-service', description: 'Terms and conditions of use' },
        { name: 'Cookie Policy', href: '/cookies-policy', description: 'Our cookie usage policy' },
      ]
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Sitemap"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 py-12 sm:py-16 lg:py-30">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
            <FiBook className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Site Navigation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Sitemap
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed px-4">
            Navigate through all pages and sections of Bettitude
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Sitemap Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {sitemapSections.map((section, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527]/50 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
              
              <div className="relative space-y-5 sm:space-y-6">
                {/* Section Header */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <section.icon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                    {section.title}
                  </h2>
                </div>

                {/* Links List */}
                <div className="space-y-3 sm:space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <a
                        href={link.href}
                        className={`block bg-[#0B0F19]/30 backdrop-blur-sm border border-[#0057B8]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-[#FFC527]/50 hover:bg-[#0B0F19]/50 transition-all duration-300 group/link ${link.sub ? 'ml-4 sm:ml-6' : ''}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white group-hover/link:text-[#FFC527] transition-colors duration-300 mb-1">
                              {link.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <div className="ml-3 flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#FFC527]/20 to-[#0057B8]/20 rounded-lg flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                              <span className="text-[#FFC527] text-sm group-hover/link:translate-x-0.5 transition-transform duration-300">→</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Footer */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Can't Find What You're
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Looking For?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E0E0E0] max-w-2xl mx-auto">
              Our team is here to help. Reach out to us directly for any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <a
                href="/contact"
                className="group/btn flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <FiMail className="text-lg sm:text-xl" />
                <span>Contact Us</span>
              </a>
              <a
                href="/feedback"
                className="group/btn flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0057B8]/20 border border-[#0057B8]/50 text-white rounded-xl font-bold hover:bg-[#0057B8]/30 hover:border-[#0057B8] hover:scale-105 transition-all duration-300"
              >
                <FiMessageSquare className="text-lg sm:text-xl" />
                <span>Send Feedback</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '25+', label: 'Pages' },
            { number: '6', label: 'Core Services' },
            { number: '12+', label: 'Resources' },
            { number: '24/7', label: 'Support' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#E0E0E0] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}