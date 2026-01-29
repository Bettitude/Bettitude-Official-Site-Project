import React from "react";
import { FiShield, FiLock, FiEye, FiFileText, FiMail, FiMapPin } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <main className="w-full bg-gradient-to-br from-[#0B0F19] via-[#0B0F19] to-[#0057B8]/10 text-gray-100 py-30 px-6 md:px-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#FFC527]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#0057B8]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30 backdrop-blur-xl border border-[#FFC527]/50 rounded-full shadow-lg shadow-[#FFC527]/20 mb-6">
            <FiShield className="text-[#FFC527] text-xl" />
            <span className="text-white text-sm font-bold tracking-wide">YOUR PRIVACY MATTERS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-[#0057B8]">
            Privacy Policy
          </h1>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#FFC527] rounded-full"></div>
            <p className="text-sm text-gray-400 font-semibold tracking-wide">Bettitude Inc.</p>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FFC527] rounded-full"></div>
          </div>
          
          <p className="text-sm text-[#FFC527] font-medium">Effective Date: November, 2025</p>
        </header>

        {/* Intro */}
        <section className="mb-12 p-8 bg-gradient-to-br from-[#0057B8]/10 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/30 rounded-2xl shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            This Privacy Policy describes how <strong className="text-white">Bettitude Inc.</strong>{" "}
            ("Bettitude," "We," "Us," or "Our") collects, uses, processes, and
            protects the information of users ("You" or "User") when you access
            and use our websites, including Bettitude.com, BettiScores.com,
            ProbetPicks.com, BettiSports Blog, and any related services,
            applications, or platforms (collectively, the "Service").
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            By using the Service, you consent to the data practices described in
            this policy.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <article className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl shadow-lg">
              <FiEye className="text-[#0B0F19] text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">1. Information We Collect</h2>
          </div>
          
          <p className="mb-6 text-gray-300 text-lg">
            We collect information to provide and improve our Service, personalize
            your experience, and communicate with you. This information falls into
            three primary categories:
          </p>

          <div className="space-y-6">
            {/* A */}
            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#FFC527]">A. Information You Provide Directly</h3>
              <p className="mb-4 text-gray-300">
                This is information you voluntarily give us when creating an account,
                subscribing to a newsletter, or communicating with us.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span>
                    <strong className="text-white">Contact & Account Data:</strong> Name, email address,
                    username, and password.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span>
                    <strong className="text-white">Financial Data (Future Monetization):</strong> When we
                    introduce paid services, we may collect payment information (e.g.,
                    credit card details) and billing addresses. Payment processing will
                    be handled by secure third-party processors.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span>
                    <strong className="text-white">Communication Data:</strong> Records of correspondence when
                    you contact customer support or submit feedback.
                  </span>
                </li>
              </ul>
            </div>

            {/* B */}
            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#FFC527]">B. Information Collected Automatically</h3>
              <p className="mb-4 text-gray-300">
                When you access the Service, we automatically collect data related to
                your device and activity to improve functionality and analyze usage.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Usage Data:</strong> Pages viewed, time spent, searches, clicks.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Device Data:</strong> IP address, OS, browser, device identifiers, crash data.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Location Data:</strong> General location from IP or precise location with your consent.</span>
                </li>
              </ul>
            </div>

            {/* C */}
            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#FFC527]">C. Information from Third Parties</h3>
              <p className="mb-4 text-gray-300">
                We may receive information about you from third-party partners, such as:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Social Media:</strong> If you sign in with Google, Facebook, etc.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Affiliates & Partners:</strong> Activity data when you click affiliate links.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFC527] mt-1">●</span>
                  <span><strong className="text-white">Analytics Providers:</strong> Aggregated data about demographics and interests.</span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* 2. How We Use Your Information */}
        <article className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-xl shadow-lg">
              <FiFileText className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">2. How We Use Your Information</h2>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Provide & Maintain the Service:</strong> Deliver core features and content.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Account Management:</strong> Verify identity and manage access.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Personalization:</strong> Customize feeds, predictions and local stats.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Communication:</strong> Service updates, security alerts, responses to inquiries.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Analytics & Improvement:</strong> Monitor usage, measure content effectiveness.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Marketing & Advertising:</strong> Show relevant ads (including affiliate-based ads).</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span><strong className="text-white">Security & Legal Compliance:</strong> Detect fraud, comply with laws and requests.</span>
              </li>
            </ul>
          </div>
        </article>

        {/* 3. Data Sharing */}
        <article className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl shadow-lg">
              <FiLock className="text-[#0B0F19] text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">3. Data Sharing and Disclosure</h2>
          </div>
          
          <p className="mb-6 text-gray-300 text-lg">
            We only share your information in the following circumstances:
          </p>

          <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span>
                  <strong className="text-white">Service Providers:</strong> Hosting, analytics, payment processors — only for performing services on our behalf.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span>
                  <strong className="text-white">Affiliates & Partners:</strong> Non-personally identifiable aggregate data may be shared for affiliate reporting and revenue attribution.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span>
                  <strong className="text-white">Business Transfers:</strong> In connection with mergers, acquisitions, or sales.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span>
                  <strong className="text-white">Legal Requirements:</strong> When required by law (court order, subpoena).
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">→</span>
                <span>
                  <strong className="text-white">With Your Consent:</strong> When you explicitly give permission.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* 4. Cookies */}
        <article className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6">4. Cookies and Tracking Technologies</h2>
          <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl">
            <p className="mb-4 text-gray-300 text-lg">
              We use cookies, web beacons, and similar tracking technologies for authentication,
              security, personalization, analytics, and targeted advertising.
            </p>
            <p className="text-gray-300 text-lg">
              You can manage cookies via our Cookie Preference Center (if available) or through your browser settings.
              Note that blocking cookies may limit your ability to use portions of the Service.
            </p>
          </div>
        </article>

        {/* 5. Data Security */}
        <article className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6">5. Data Security</h2>
          <div className="p-6 bg-gradient-to-br from-[#FFC527]/10 to-[#FFC527]/5 backdrop-blur-sm border border-[#FFC527]/40 rounded-xl">
            <p className="text-gray-300 text-lg">
              We implement reasonable technical and organizational measures to protect your data from accidental loss and unauthorized access.
              However, no system is 100% secure. If a breach occurs, we will follow applicable notification requirements.
            </p>
          </div>
        </article>

        {/* 6. Your Privacy Rights */}
        <article className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6">6. Your Privacy Rights (GDPR & CCPA)</h2>
          <p className="mb-6 text-gray-300 text-lg">
            Depending on where you live, you may have rights over your personal data, including:
          </p>

          <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl">
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">✓</span>
                <span><strong className="text-white">Right to Access:</strong> Request copies of your personal information.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">✓</span>
                <span><strong className="text-white">Right to Rectification:</strong> Ask that inaccurate data be corrected.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">✓</span>
                <span><strong className="text-white">Right to Erasure:</strong> Request deletion of data under certain conditions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">✓</span>
                <span><strong className="text-white">Right to Object/Restrict Processing:</strong> Object to or limit how we process your data.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC527] mt-1 text-xl">✓</span>
                <span><strong className="text-white">Data Portability:</strong> Request transfer of your data to another controller where applicable.</span>
              </li>
            </ul>

            <p className="text-gray-300 text-lg">
              To exercise any of these rights, contact us using the details in Section 9. We will respond within a timeframe required by applicable law.
            </p>
          </div>
        </article>

        {/* 7. Children's Privacy */}
        <article className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6">7. Children's Privacy</h2>
          <div className="p-6 bg-gradient-to-br from-[#FFC527]/10 to-[#FFC527]/5 backdrop-blur-sm border border-[#FFC527]/40 rounded-xl">
            <p className="text-gray-300 text-lg">
              Our Service is not directed to individuals under 18 (or the legal age of majority/gambling in their jurisdiction).
              We do not knowingly collect personal information from anyone under 18. If you believe your child has provided information, please contact us immediately.
            </p>
          </div>
        </article>

        {/* 8. Changes to This Policy */}
        <article className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6">8. Changes to This Policy</h2>
          <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl">
            <p className="text-gray-300 text-lg">
              We may update this Privacy Policy from time to time. Any material changes will be posted on this page with an updated Effective Date.
              Please review this policy periodically.
            </p>
          </div>
        </article>

        {/* 9. Contact Us */}
        <footer className="pt-8 border-t border-[#0057B8]/30">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl shadow-lg">
              <FiMail className="text-[#0B0F19] text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">9. Contact Us</h2>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-[#0057B8]/20 to-[#FFC527]/10 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl space-y-4">
            <div className="flex items-start space-x-3">
              <FiMail className="text-[#FFC527] text-xl mt-1" />
              <p className="text-gray-300 text-lg">
                Email:{" "}
                <a
                  href="mailto:legal@bettitude.com"
                  className="text-[#FFC527] hover:text-[#ffb700] font-semibold transition-colors duration-300"
                  aria-label="Email Bettitude Legal"
                >
                  legal@bettitude.com
                </a>
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <FiMapPin className="text-[#FFC527] text-xl mt-1" />
              <p className="text-gray-300 text-lg">
                Mailing Address: Bettitude Inc., Legal Department, 58 Berrigan Rd, Miandetta, Tas 7320, AUS
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30 backdrop-blur-sm border border-[#FFC527]/30 rounded-full">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Bettitude Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default PrivacyPolicy;