// Benefit-Statistic pairs data - matching reference image order
const benefitPairs = [
  {
    icon: "/icons/fast icon.png",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
    value: "40%",
    valueLabel: null,
  },
  {
    icon: "/icons/Overlay.png",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
    value: "60%",
    valueLabel: "UPTO",
  },
  {
    icon: "/icons/Overlay (1).png",
    label: "Saves Time",
    description: "Weekly by eliminating manual note-taking and follow-ups.",
    value: "6+",
    valueLabel: "hours",
  },
  {
    icon: "/icons/Overlay (2).png",
    label: "Visibility",
    description: "Visibility into every call, transcript, and action item.",
    value: "100%",
    valueLabel: null,
  },
  {
    icon: "/icons/lead conversion .png",
    label: "Lead Conversion",
    description: "Improves prospect lead conversion rates by 25% through prompt follow-ups.",
    value: "25%",
    valueLabel: null,
  },
  {
    icon: "/icons/workflow.png",
    label: "Workflow Efficiency",
    description: "Boosts workflow efficiency by up to 50% through platform integration.",
    value: "50%",
    valueLabel: "UP TO",
  },
];

export const GameChangerSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-white">
      {/* Light blue wavy lines on the left - fading */}
      <div className="absolute left-0 top-0 bottom-0 w-80 opacity-20 -z-10 hidden lg:block pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#36C0ED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#36C0ED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 Q80 80, 160 100 T320 100"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0 200 Q80 180, 160 200 T320 200"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0 300 Q80 280, 160 300 T320 300"
            stroke="url(#waveGradient)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0 400 Q80 380, 160 400 T320 400"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 500 Q80 480, 160 500 T320 500"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Subtle sound wave icon on top right */}
      <div className="absolute top-8 right-8 opacity-10 -z-10 hidden lg:block pointer-events-none">
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="20" width="4" height="15" fill="#666" />
          <rect x="15" y="15" width="4" height="25" fill="#666" />
          <rect x="25" y="10" width="4" height="30" fill="#666" />
          <rect x="35" y="15" width="4" height="25" fill="#666" />
          <rect x="45" y="20" width="4" height="15" fill="#666" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 leading-tight">
            How Voica Redefines the Way{" "}
            <span className="text-[#2563eb]">
              Businesses Communicate
            </span>
          </h2>
        </div>
        
        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Experience the measurable edge that AI-powered communication brings.
          </p>
        </div>
        
        {/* Benefit-Statistic Pairs Grid - 3 pairs per row, 2 rows total */}
        <div className="max-w-7xl mx-auto space-y-6">
          {/* First Row - 3 pairs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {benefitPairs.slice(0, 3).map((pair, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-stretch group">
                {/* Benefit Box */}
                <div className="flex-1 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-5 sm:p-6 border border-[#36C0ED]/40 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm ring-2 ring-[#36C0ED]/30 transform transition-all duration-300 group-hover:rotate-6">
                      <img
                        src={pair.icon}
                        alt={`${pair.label} icon`}
                        className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#1e3a8a] mb-2 leading-tight">
                        {pair.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {pair.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Statistic Box */}
                <div className="flex-shrink-0 w-20 sm:w-24 md:w-28 bg-gradient-to-br from-white to-[#F0F8FF] rounded-xl p-4 sm:p-5 border-2 border-[#36C0ED] flex items-center justify-center min-h-[110px] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center w-full">
                    {pair.valueLabel && pair.valueLabel !== "hours" && (
                      <div className="text-[10px] sm:text-xs text-[#2563eb] mb-1 uppercase leading-tight font-bold">
                        {pair.valueLabel}
                      </div>
                    )}
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1e3a8a] leading-tight animate-pulse">
                      {pair.value}
                    </div>
                    {pair.valueLabel === "hours" && (
                      <div className="text-[10px] sm:text-xs text-[#2563eb] mt-1 font-bold">
                        {pair.valueLabel}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - 3 pairs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {benefitPairs.slice(3, 6).map((pair, index) => (
              <div key={index + 3} className="flex gap-3 sm:gap-4 items-stretch group">
                {/* Benefit Box */}
                <div className="flex-1 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-5 sm:p-6 border border-[#36C0ED]/40 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm ring-2 ring-[#36C0ED]/30 transform transition-all duration-300 group-hover:rotate-6">
                      <img
                        src={pair.icon}
                        alt={`${pair.label} icon`}
                        className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#1e3a8a] mb-2 leading-tight">
                        {pair.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {pair.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Statistic Box */}
                <div className="flex-shrink-0 w-20 sm:w-24 md:w-28 bg-gradient-to-br from-white to-[#F0F8FF] rounded-xl p-4 sm:p-5 border-2 border-[#36C0ED] flex items-center justify-center min-h-[110px] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center w-full">
                    {pair.valueLabel && pair.valueLabel !== "hours" && (
                      <div className="text-[10px] sm:text-xs text-[#2563eb] mb-1 uppercase leading-tight font-bold">
                        {pair.valueLabel}
                      </div>
                    )}
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1e3a8a] leading-tight animate-pulse">
                      {pair.value}
                    </div>
                    {pair.valueLabel === "hours" && (
                      <div className="text-[10px] sm:text-xs text-[#2563eb] mt-1 font-bold">
                        {pair.valueLabel}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};