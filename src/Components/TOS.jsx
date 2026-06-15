import React from "react";

const TOS = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0057B8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FFC527]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-30">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 border border-[#0057B8]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#FFC527] rounded-full"></div>
            <span className="text-[#B0B8C8] text-sm font-semibold">LEGAL DOCUMENT</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Terms of Service
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFC527] to-transparent rounded-full mb-4"></div>
          
          <p className="text-[#B0B8C8] text-lg">
            Effective Date: <span className="text-white font-semibold">November 2025</span>
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 bg-gradient-to-br from-[#0057B8]/5 to-transparent border-l-4 border-[#FFC527] rounded-r-2xl">
          <p className="text-[#B0B8C8] text-lg leading-relaxed">
            These Terms of Service ("Terms") constitute a legally binding agreement between you
            ("User," "You") and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700] font-bold">Bettitude Inc.</span> ("Bettitude," "We," "Us"), governing your access
            to and use of all Bettitude platforms, including the Bettitude Official Website,
            BettiScores, ProbetPicks, BettiSports Blog, and any related applications, data, or
            services (collectively, the "Service").
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* SECTION 1 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">1.</span> Acceptance of Terms
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              By accessing or using any part of the Service, you signify that you have read,
              understood, and agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">2.</span> Definitions
            </h2>
            <div className="space-y-4">
              <div className="pl-6 border-l-2 border-[#0057B8]/30">
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  <span className="text-white font-bold">Service:</span> All websites, applications, content, and data provided by Bettitude Inc.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-[#0057B8]/30">
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  <span className="text-white font-bold">User/You:</span> Any person or entity accessing or using the Service.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-[#0057B8]/30">
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  <span className="text-white font-bold">Content:</span> All text, graphics, images, proprietary analytical models, predictions, data feeds, and other material displayed on the Service.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-[#0057B8]/30">
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  <span className="text-white font-bold">Prediction Content:</span> Forecasts or statistical analysis displayed on platforms like ProbetPicks.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">3.</span> Eligibility and User Accounts
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Eligibility</h3>
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  You must be at least eighteen (18) years old or of legal gambling age in your region to use the Service.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Account Creation</h3>
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  You agree to provide accurate, complete, and updated information during registration.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Account Security</h3>
                <p className="text-[#B0B8C8] text-lg leading-relaxed">
                  You are responsible for maintaining the security of your account. Bettitude is not responsible for losses due to compromised accounts.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">4.</span> Use of Service and Restrictions
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed mb-6">
              Bettitude grants you a limited, non-transferable, revocable license to use the Service
              for personal, non-commercial purposes.
            </p>

            <h3 className="text-white font-bold text-xl mb-4">Prohibited Activities</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFC527] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#B0B8C8] text-lg">Copying, selling, or exploiting any part of the Service for commercial purposes without permission.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFC527] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#B0B8C8] text-lg">Using bots, scrapers, or automation tools without approved API access.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFC527] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#B0B8C8] text-lg">Interfering with the Service's security or infrastructure.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFC527] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#B0B8C8] text-lg">Using the Service to violate laws or regulations.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">5.</span> Intellectual Property Rights
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed mb-4">
              All trademarks, data, models, and content (e.g., Bettitude™, BettiScores™) are the exclusive
              property of Bettitude Inc.
            </p>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              If you submit User Content, you grant Bettitude a worldwide, royalty-free, perpetual license
              to use it.
            </p>
          </section>

          {/* SECTION 6 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">6.</span> Monetization and Service Changes
            </h2>
            
            <div className="mb-6">
              <h3 className="text-white font-bold text-xl mb-3">Currently Free</h3>
              <p className="text-[#B0B8C8] text-lg leading-relaxed">
                The Service is currently free for all users.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold text-xl mb-3">Future Monetization</h3>
              <p className="text-[#B0B8C8] text-lg leading-relaxed mb-4">
                Bettitude reserves the right to introduce:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC527] rounded-full"></div>
                  <p className="text-[#B0B8C8] text-lg">Subscriptions or premium tiers</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC527] rounded-full"></div>
                  <p className="text-[#B0B8C8] text-lg">Advertising</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC527] rounded-full"></div>
                  <p className="text-[#B0B8C8] text-lg">Paid Prediction Content</p>
                </div>
              </div>
            </div>

            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              If pricing changes, we will give reasonable notice. Continued use means acceptance.
            </p>
          </section>

          {/* SECTION 7 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">7.</span> Disclaimer of Warranties
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              The Service is provided "as-is" without warranties of any kind. Bettitude does not guarantee
              accuracy, availability, or reliability of any Prediction Content.
            </p>
          </section>

          {/* SECTION 8 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">8.</span> Limitation of Liability and Financial Risk
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed mb-4">
              Bettitude does not guarantee profits from predictions or sports information.
            </p>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              We are not liable for losses, damages, or financial impacts arising from use of the Service.
            </p>
          </section>

          {/* SECTION 9 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">9.</span> Third-Party Links and Affiliates
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              Bettitude may contain affiliate links. We are not responsible for third-party content or
              products. Bettitude may earn commissions from these links.
            </p>
          </section>

          {/* SECTION 10 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">10.</span> Indemnification
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              You agree to defend and indemnify Bettitude from claims arising from your use of the Service.
            </p>
          </section>

          {/* SECTION 11 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">11.</span> Governing Law and Dispute Resolution
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              These Terms are governed by the laws of your chosen jurisdiction (e.g., Delaware). Legal
              actions must be filed in the designated courts.
            </p>
          </section>

          {/* SECTION 12 */}
          <section className="border-b border-[#0057B8]/10 pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">12.</span> Changes to Terms
            </h2>
            <p className="text-[#B0B8C8] text-lg leading-relaxed">
              Bettitude may update these Terms at any time. Continued use after changes means you accept
              the revised Terms.
            </p>
          </section>

          {/* SECTION 13 */}
          <section className="pb-12">
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="text-[#FFC527]">13.</span> Contact Information
            </h2>
            <div className="space-y-4">
              <p className="text-[#B0B8C8] text-lg">
                <span className="text-white font-bold">Email:</span> <a href="mailto:legal@bettitude.com" className="text-[#FFC527] hover:text-[#ffb700] transition-colors">legal@bettitude.com</a>
              </p>
              <p className="text-[#B0B8C8] text-lg leading-relaxed">
                <span className="text-white font-bold">Mailing Address:</span><br />
                Bettitude Inc., Legal Department<br />
                58 Berrigan Rd, Miandetta, Tas 7320, AUS
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#0057B8]/20 text-center">
          <p className="text-[#B0B8C8] text-sm">
            © 2025 Bettitude Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TOS;