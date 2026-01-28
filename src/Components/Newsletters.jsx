import React, { useState } from 'react';
import { FiMail, FiCheckCircle, FiArrowRight, FiStar, FiTrendingUp } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';

export default function Newsletters() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);

      // Mailchimp endpoint (replace with your list's action URL)
      const mailchimpURL =
        'https://yahoo.us3.list-manage.com/subscribe/post?u=dd6afb4fc5ed6710c3c9a8e77&id=f9898608ae';

      const response = await fetch(mailchimpURL, {
        method: 'POST',
        mode: 'no-cors', // prevents CORS errors; Mailchimp doesn't respond with JSON
        body: formData,
      });

      // Since Mailchimp doesn't return JSON for no-cors, we assume success
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setSubscribeStatus('idle');
      alert('Network error. Please try again.');
    }
  };

  const benefits = [
    { icon: FiTrendingUp, text: 'Weekly forecasts & predictions' },
    { icon: FiStar, text: 'Exclusive betting insights' },
    { icon: FiMail, text: 'Priority news updates' },
    { icon: FiCheckCircle, text: 'Early access to features' },
  ];

  return (
    <section id="newsletter" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#0B0F19]/95 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-[#0057B8]/10 to-[#FFC527]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 text-center">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 border border-[#FFC527]/50 rounded-full">
              <FiMail className="text-[#FFC527] text-xs sm:text-sm" />
              <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Stay Connected</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-4">
              Subscribe for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
                Newsletter
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#E0E0E0] max-w-2xl mx-auto px-4">
              Stay up-to-date with forecasts, posts and predictions.
            </p>

            <div className="flex justify-center pt-2">
              <div className="h-1 sm:h-1.5 w-20 sm:w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-[#FFC527]/10 border border-[#FFC527]/30 rounded-xl p-4 hover:border-[#FFC527]/50 hover:bg-[#FFC527]/15 transition-all duration-300">
                <benefit.icon className="text-[#FFC527] text-xl sm:text-2xl flex-shrink-0" />
                <span className="text-[#E0E0E0] text-sm sm:text-base text-left">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="relative bg-gradient-to-br from-[#FFC527]/10 to-[#0B0F19]/50 border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/5 to-[#0057B8]/5 rounded-2xl sm:rounded-3xl"></div>
            <div className="relative space-y-6">
              <label className="block text-white font-semibold text-sm sm:text-base text-left">Your Email Address</label>

              <div className="relative">
                <FiMail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#E0E0E0]/50 text-lg sm:text-xl" />
                <input
                  type="email"
                  name="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3 sm:py-4 bg-[#0B0F19]/80 border-2 border-[#FFC527]/50 rounded-xl text-white placeholder:text-[#E0E0E0]/50 focus:border-[#FFC527] focus:outline-none transition-colors duration-300"
                />
              </div>

              <button
                onClick={handleSubscribe}
                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                className={`group w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 ${
                  subscribeStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105'
                }`}
              >
                {subscribeStatus === 'loading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                )}

                {subscribeStatus === 'success' && (
                  <>
                    <FiCheckCircle className="text-xl" />
                    <span>Successfully Subscribed!</span>
                  </>
                )}

                {subscribeStatus === 'idle' && (
                  <>
                    <span>Subscribe Now</span>
                    <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              <p className="text-xs sm:text-sm text-[#E0E0E0]/70 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Telegram Channel CTA */}
          <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto hover:border-[#0057B8]/50 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8]/0 to-[#0057B8]/0 group-hover:from-[#0057B8]/5 group-hover:to-[#FFC527]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center space-x-4 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0088cc] to-[#006699] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaTelegram className="text-white text-3xl sm:text-4xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Join Our Telegram Channel
                  </h3>
                  <p className="text-sm sm:text-base text-[#E0E0E0]/80">
                    Get instant updates, tips & exclusive content
                  </p>
                </div>
              </div>
              
              <a
                href="https://t.me/bettitude"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#0088cc] to-[#006699] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#0088cc]/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <span>Join Channel</span>
                <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
         <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto hover:border-[#0057B8]/50 transition-all duration-300 group">
  <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#25D366]/0 group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>

  <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
    <div className="flex items-center space-x-4 text-center sm:text-left">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white text-3xl sm:text-4xl" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
          Join Our WhatsApp Community
        </h3>
        <p className="text-sm sm:text-base text-[#E0E0E0]/80">
          Get instant updates, tips & exclusive offers
        </p>
      </div>
    </div>

    <a
      href="https://wa.me/234XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
    >
      <span>Join WhatsApp</span>
      <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
    </a>
  </div>
</div>


          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#0057B8] to-[#FFC527] border-2 border-[#0B0F19] flex items-center justify-center text-white font-bold text-xs"
                >
                  {i}K
                </div>
              ))}
            </div>
            <span className="text-[#E0E0E0] text-sm sm:text-base font-medium">
              Join 10,000+ subscribers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}