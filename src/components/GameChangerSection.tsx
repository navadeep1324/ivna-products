export const GameChangerSection = () => {

  return (
    <section id="product" className="py-8 sm:py-12 bg-[#F1F1F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-6xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
           Enterprise-Grade Applications Built for Better Care Outcomes
          </h2>
        </div>

        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
Built to adapt, integrate, and perform—our applications help care organizations stay ahead in an evolving care landscape.           </p>
        </div>

        {/* New Card Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                image: "/sections/Voica AI.jpg",
                title: "Voica AI",
                description: "AI-powered voice intelligence that captures, analyzes, and transforms care conversations into actionable insights.",
                borderColor: "#01A0E4",
                link: "https://voicaai.kleza.io/"
              },
              {
                image: "/sections/Pulseboard.jpg",
                title: "Pulseboard ",
                description: " A real-time operational dashboard that gives care teams instant visibility into performance, compliance, and care metrics.",
                borderColor: "#ED1B24",
                link: "https://blue-sandpiper-473638.hostingersite.com/"
              },
              {
                image: "/sections/Caregiver Onboarding.jpg",
                title: "Caregiver Onboarding",
                description: " An end-to-end onboarding solution that simplifies hiring, training, and compliance for faster, confident caregiver readiness.",
                borderColor: "#FFCB05",
                link: "https://lightslategrey-cattle-983050.hostingersite.com/"
              },
              {
                image: "/sections/Client Assessment.jpg",
                title: "Client Assessment",
                description: "A smart digital assessment tool that standardizes evaluations, identifies care needs, and helps build accurate, personalized care plans.",
                borderColor: "#00A652",
                link: "https://cornflowerblue-buffalo-126512.hostingersite.com/"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 hover:shadow-md bg-white border-[3px] p-2"
                style={{ borderColor: feature.borderColor }}
              >
                <div className="h-48 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col text-center">
                  <h3 className="text-[#003E94] text-lg font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-6 rounded-lg text-black font-bold transition-all hover:opacity-90 active:scale-95 shadow-md"
                      style={{
                        background: 'linear-gradient(90deg, #64FEF0 0%, #15B6E7 100%)'
                      }}
                    >
                      Learn more
                    </a>
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