import React, { useState } from 'react';
import { FiUsers, FiTrendingUp, FiAward, FiMail, FiArrowRight, FiCheckCircle, FiFileText, FiPhone, FiClipboard, FiVideo } from 'react-icons/fi';

export default function CareerFullPage() {
  const [activeStep, setActiveStep] = useState(null);

  const positions = [
    'Marketer', 'Influencer', 'Analyst', 'Accounting',
    'Soccer/Football Specialist', 'Basketball Analyst', 
    'Cricket Expert', 'Aussie Rules Analyst', 
    'Gridiron/NFL Specialist'
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: 'Sell-able Experience',
      description: 'Published works with engagements can serve as a means for more experience and a chance for new skills acquisition.',
      color: 'from-[#FFC527] to-[#ffb700]'
    },
    {
      icon: FiAward,
      title: 'Full Recognition',
      description: 'While marketing or promoting any form of post, news or articles, full recognition is granted to the writer, designer or curator.',
      color: 'from-[#0057B8] to-[#003d82]'
    },
    {
      icon: FiUsers,
      title: 'Marketing Promotions',
      description: 'Different individual works such as articles, news, blog post and services with engagements of any kind can be promoted thereby assisting, reassuring and marketing the author/blogger and also the brand.',
      color: 'from-[#FFC527] to-[#ffb700]'
    }
  ];

  const recruitmentSteps = [
    {
      number: '1',
      icon: FiFileText,
      title: 'CV Submission',
      description: 'Submit your CV or resume through our online portal if you meet our requirements.',
      color: 'from-[#FFC527] to-[#ffb700]'
    },
    {
      number: '2',
      icon: FiPhone,
      title: 'Phone Screening',
      description: 'After looking at your CV you will be invited for a telephone interview at a time of your choosing.',
      color: 'from-[#0057B8] to-[#003d82]'
    },
    {
      number: '3',
      icon: FiClipboard,
      title: 'Skill Assessment',
      description: 'You will be invited at our head office to take a skills and knowledge assessment.',
      color: 'from-[#FFC527] to-[#ffb700]'
    },
    {
      number: '4',
      icon: FiVideo,
      title: 'Final Interview',
      description: 'If you can pass all stages we will invite you for a final interview with our CEO and HR executive.',
      color: 'from-[#0057B8] to-[#003d82]'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Team collaboration"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8 py-30">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiUsers className="text-[#FFC527] text-sm" />
            <span className="text-[#E0E0E0] text-sm font-semibold">Join Our Team</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Work With US...
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              @Bettitude
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-[#E0E0E0] max-w-4xl mx-auto leading-relaxed">
            Apply for various Corporate Positions such as Marketer, Influencer, Analyst, Accounting, etc AND divisional Roles in Sports such as… Soccer/football | Basketball | Cricket | Aussie rules | gridiron/NFL, etc.
          </p>

          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
{/* 
          <div className="pt-8">
            <a
              href="#"
              className="group inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 text-lg"
            >
              <span>Apply Now</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Available Positions */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Available Positions
            </h2>
            <p className="text-xl text-[#E0E0E0]">Explore opportunities across multiple departments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-6 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative flex items-center space-x-4">
                  <FiCheckCircle className="text-[#FFC527] text-2xl flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-24 bg-gradient-to-b from-transparent via-[#0057B8]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Why Work With Us?
            </h2>
            <p className="text-xl text-[#E0E0E0]">Benefits that empower your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-[#0B0F19] text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-[#E0E0E0] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interview Setup CTA */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

            <div className="relative text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-2xl">
                <FiMail className="text-[#0B0F19] text-4xl" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  Interested?!
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Talk with us</span>
                </h3>
                
                <p className="text-lg text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
                  We are available to have a chat and schedule a good time that will suit you. Digital meetings can be hosted by us via Zoom application or Microsoft Teams once a good time is reached and agreed upon. Please endeavor to have supporting documents required for the recruitment process.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="mailto:careers@bettitude.com"
                  className="group inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 text-lg"
                >
                  <FiMail className="text-xl" />
                  <span>Email Us to Setup Interview</span>
                </a>

                <a
                  href="#recruitment"
                  className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-[#0057B8]/20 backdrop-blur-sm border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300 text-lg"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Process */}
      <div id="recruitment" className="relative py-24 bg-gradient-to-b from-transparent via-[#0057B8]/5 to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
              <span className="text-[#E0E0E0] text-sm font-semibold">How It Works</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Learn Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Recruitment Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recruitmentSteps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative group"
              >
                {/* Connector Line (except for last item) */}
                {index < recruitmentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-[#FFC527]/30 to-[#0057B8]/30 z-0"></div>
                )}

                <div className="relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-8 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                  
                  <div className="relative space-y-6">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="text-[#0B0F19] text-3xl" />
                      </div>
                      <div className={`text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color} opacity-20`}>
                        {step.number}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC527] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#E0E0E0] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <a
              href="mailto:careers@bettitude.com"
              className="group inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 text-lg"
            >
              <span>Start Your Application</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}