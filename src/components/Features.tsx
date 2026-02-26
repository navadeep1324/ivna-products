

export const Features = () => {
  const schedulingFeatures = [
    "Caller details with full conversation history",
    "AI-generated transcripts, summaries, and key highlights",
    "Call quality indicators and sentiment insights",
    "Performance scoring and improvement suggestions",
  ];

  const callTrackingFeatures = [
    "Live dashboards for operational and care metrics",
    "Team performance and workload visibility",
    "Alerts for compliance gaps and critical issues",
    "Customizable KPIs and reporting views",
    "Data-driven insights for faster decision-making",
  ];

  return (
    <>
      <section
        id="features"
        className="py-20 bg-white overflow-hidden relative"
      >
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          {/* Main Header */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Features That Help You Scale
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Stay in control with a unified view of all your business communications —
              track, analyze, and improve every conversation effortlessly.
            </p>
          </div>

          {/* Scheduling Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center px-8">
            {/* Left Column: Content */}
            <div className="flex flex-col lg:col-span-5">
              <h3 className="h3-heading font-bold mb-5 text-black">
                Voice Intelligence & Communication Insights 
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stay in control of all care conversations with AI-powered analysis that turns voice interactions into actionable insights.
              </p>

              <ul className="space-y-5 mb-10">
                {schedulingFeatures.map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="playGrad1" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#64FEF0" />
                          <stop offset="100%" stopColor="#15B6E7" />
                        </linearGradient>
                      </defs>
                      <polygon points="4,2 18,10 4,18" fill="url(#playGrad1)" />
                    </svg>
                    <span className="text-gray-700 text-lg">{text}</span>
                  </li>
                ))}
              </ul>

              <div>
                <a href="https://voicaai.ivna.ai/" target="_blank"><button
                  className="px-8 py-3 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ background: '#006EF5' }}
                >
                  Schedule a Demo
                </button>
                </a>
              </div>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="relative min-h-[400px] lg:col-span-7 md:translate-x-12 ">
              <img
                src="/dashboard/Assesment.png"
                alt="Scheduling Dashboard"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F2F2F7] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
            {/* Left Column: Image Area */}
            <div className="order-2 lg:order-1 relative">
              <img
                src="/dashboard/Call Tracking.png"
                alt="Call Tracking Dashboard"
                className="rounded-2xl w-full h-auto"
              />
            </div>

            {/* Right Column: Content */}
            <div className="order-1 lg:order-2 flex flex-col">
              <h3 className="h3-heading font-bold mb-5 text-black ">
              Real-Time Operations & <br></br>Performance Monitoring 
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Get a unified, real-time view of care operations to track <br></br>performance, identify risks, and act faster.
              </p>

              <ul className="space-y-4 mb-10">
                {callTrackingFeatures.map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="playGrad2" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#64FEF0" />
                          <stop offset="100%" stopColor="#15B6E7" />
                        </linearGradient>
                      </defs>
                      <polygon points="4,2 18,10 4,18" fill="url(#playGrad2)" />
                    </svg>
                    <span className="text-gray-700 text-lg">{text}</span>
                  </li>
                ))}
              </ul>

              <div>
               <a href="https://pulseboard.ivna.ai/" target="_blank"> <button
                  className="px-8 py-3 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ background: '#006EF5' }}
                >
                  Schedule a Demo
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
