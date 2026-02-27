export const GameChangerSection = () => {

  return (
    <section id="product" className="pt-8 sm:pt-12 pb-2 sm:pb-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-6xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
            Enterprise-Grade Applications Built for <br></br>Better Care Outcomes
          </h2>
        </div>

        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
            Built to Adapt, Integrate, and Perform—our applications help care organizations stay ahead in an evolving care landscape.           </p>
        </div>

        {/* New Card Section */}
        <div className="pt-12 pb-4 px-4 sm:px-6 lg:px-8 rounded-2xl mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-8xl mx-auto">
            {[
              {
                bgImage: "/dashboard/VoicaAI product.jpg",
                title: "Voica AI",
                description: "AI-Powered Voice Intelligence that captures, analyzes, and transforms care conversations into actionable insights.",
                borderColor: "#01A0E4",
                link: "https://voicaai.ivna.ai/"
              },
              {
                bgImage: "/dashboard/Pulseboard product.jpg",
                title: "Pulseboard",
                description: "A Real-Time Operational Dashboard that gives care teams instant visibility into performance, compliance, and care metrics.",
                link: "https://pulseboard.ivna.ai/"
              },
              {
                bgImage: "/dashboard/Caregiver Onboarding product.jpg",
                title: "Caregiver Onboarding",
                description: "An End-to-End Onboarding Solution that simplifies hiring, training, and compliance for faster, confident caregiver readiness.",
                link: "https://caregiveronboarding.ivna.ai/"
              },
              {
                bgImage: "/dashboard/Client Assessment product.jpg",
                title: "Client Assessment",
                description: "A Smart Digital Assessment Tool that standardizes evaluations, identifies care needs, and helps build accurate, personalized care plans.",
                link: "https://clientassessment.ivna.ai/"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white border border-gray-300 shadow-md p-2 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Inner box: background image wrapper */}
                <div className="rounded-xl overflow-hidden flex flex-col flex-grow relative bg-white">
                  {/* Background image layer */}
                  <div
                    className="absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('${feature.bgImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Card content */}
                  <div className="relative z-10 py-12 px-4 flex flex-col flex-grow text-center">
                    <h3 className="text-[#003E94] text-lg font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-8 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mx-auto py-3 px-4 rounded-lg text-black font-semibold transition-all hover:opacity-90 active:scale-85 shadow-md"
                        style={{ width: '90%', background: 'linear-gradient(90deg, rgb(100, 254, 240) 0%, rgb(21, 182, 231) 100%)' }}
                      >
                        Learn more
                      </a>
                    </div>
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