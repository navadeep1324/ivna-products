export const GameChangerSection = () => {

  return (
    <section className="py-8 sm:py-12 bg-[#EEFCFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-6xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[#003E94]">Everything Your Business Needs,</span> <span className="text-[#31E6C8]">In One Place</span>
          </h2>
        </div>
        
        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Experience the measurable edge that AI-powered communication brings
          </p>
        </div>

        {/* New Card Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                image: "/sections/medical-records.png",
                title: "Secure Electronic Records",
                description: "Streamline clinical documentation and maintain HIPAA compliance with our intuitive digital health record system."
              },
              {
                image: "/sections/care-coordination.png",
                title: "Seamless Care Coordination",
                description: "Build stronger relationships between caregivers and clients through organized, efficient service delivery."
              },
              {
                image: "/sections/communication.jpg",
                title: "AI-Powered CRM",
                description: "Never miss a lead with intelligent call tracking and automated follow-ups designed for home care agencies."
              },
              {
                image: "/sections/home-care.jpg",
                title: "Patient-Centered Care",
                description: "Empower your staff to focus on what matters most—providing high-quality, compassionate care in the home."
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 hover:shadow-md card-border-gradient">
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col text-center">
                  <h3 className="text-[#003E94] text-lg font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <button 
                      className="w-full py-3 px-6 rounded-lg text-[#003E94] font-semibold transition-all hover:opacity-90 active:scale-95"
                      style={{
                        background: 'linear-gradient(90deg, #31E6C8 0%, #00BDE5 100%)'
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16" />
      </div>
    </section>
  );
};