// Updated stats array to use image paths instead of Lucide icons
const stats = [
  {
    icon: "/icons/fast icon.png",
    value: "40%",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
  },
  {
    icon: "/icons/Overlay.png",
    value: "Up to 60%",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
  },
  {
    icon: "/icons/Overlay (1).png",
    value: "6+ hours",
    label: "Saves Time ",
    description: " Weekly by eliminating manual note-taking and follow-ups. ",
  },
  {
    icon: "/icons/Overlay (2).png",
    value: "100% ",
    label: "Visibility ",
    description: "Visibility into every call, transcript, and action item.",
  },
];

export const GameChangerSection = () => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background image positioned behind the container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/dashboard/wave-green.png" 
          alt="Background Wave" 
          className="w-full h-full object-cover opacity-10 pointer-events-none"
        />
      </div>
      
      {/* Left side image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 hidden lg:block z-10">
        <img 
          src="/dashboard/Untitled design (10) 1.png" 
          alt="Decoration" 
          className="w-full h-auto object-contain opacity-80"
        />
      </div>
      
      {/* Right side image - REMOVED as per request */}
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Key Business Benefits section with gradient background */}
        <div className="bg-gradient-to-r from-[#C4EFEA] to-[#EFF9FD] p-6 sm:p-8 rounded-2xl shadow-xl">
          {/* Added missing heading for Key Business Benefits */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-relaxed">
              What Makes {" "}
              <span className="text-custom-blue">
                VoicaAI a Game Changer
              </span>
            </h2>
          </div>
          
          {/* Middle descriptive paragraph */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              AI that helps your team communicate smarter and drive better ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-card/90 p-4 sm:p-5 rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all backdrop-blur-sm hover:-translate-y-2 duration-300 leading-relaxed"
              >
                {/* Icon and description aligned together */}
                <div className="flex">
                  <div className="flex items-start justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-2 sm:mr-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                    <img src={stat.icon} alt={`${stat.label} icon`} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: '#36c0ed' }} />
                  </div>
                  <div className="flex flex-col justify-start">
                    <div className="text-xl lg:text-2xl font-bold mb-1" style={{ color: '#36c0ed' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold mb-1" style={{ color: '#36c0ed' }}>{stat.label}</div>
                  </div>
                </div>
                {/* Description aligned with icon - center aligned */}
                <p className="text-xs sm:text-sm text-foreground leading-relaxed mt-2 text-center">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};