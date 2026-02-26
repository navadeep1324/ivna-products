

export const ProductShowcase = () => {
  const featureList = [
    "Digital onboarding workflows and task tracking",
    "Document collection and compliance validation",
    "License, certification, and background check tracking",
    "Role-based access for HR and coordinators",
    "Reduced onboarding time and faster caregiver readiness",
  ];

  const assessmentFeatures = [
    "Customizable assessment templates by care type",
    "Medical, functional, and lifestyle data capture",
    "Notes, attachments, and supporting documents",
    "Assessment history and version tracking",
    "Secure storage with audit-ready documentation",
  ];

  const handleBookDemoClick = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Section 1: Smart Digital Care Assessments */}
      <section id="suite" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[2rem] md:py-20 md:px-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-32">
            {/* Left Column: Content */}
            <div className="flex-1 text-black relative z-10">
               <h2 className="h3-heading font-bold mb-4">
                Smart Digital Care<br></br> Assessments
              </h2>
              <p className="text-black/90 text-lg mb-8 leading-relaxed max-w-xl">
                 Capture every critical detail to evaluate care needs accurately and create personalized, compliant care plans.
              </p>

              <ul className="space-y-5 mb-10">
                {assessmentFeatures.map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="playGrad3" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#64FEF0" />
                          <stop offset="100%" stopColor="#15B6E7" />
                        </linearGradient>
                      </defs>
                      <polygon points="4,2 18,10 4,18" fill="url(#playGrad3)" />
                    </svg>
                    <span className="text-black/95 text-lg">{text}</span>
                  </li>
                ))}
              </ul>

              <div>
                <a href="https://clientassessment.ivna.ai/" target="_blank"><button
                  onClick={handleBookDemoClick}
                  className="px-10 py-3 rounded-lg text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ background: '#006EF5' }}
                >
                  Schedule a Demo
                </button>
                </a>
              </div>
            </div>

            {/* Right Column: Device Mockups */}
            <div className="flex-1 relative z-10 w-full self-stretch flex items-stretch">
              <div className="w-full rounded-[2rem] overflow-hidden">
                <img
                  src="/dashboard/Team Performance.jpg"
                  alt="Assessment Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Simplified Hiring & Caregiver Readiness */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: '#F2F2F7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-26 items-center">
            {/* Left Column: Image Area */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 transform translate-y-4 scale-95" />
              <img
                src="/dashboard/feature.png"
                alt="Hiring Dashboard"
                className="rounded-2xl w-full h-auto relative z-10 lg:-mt-20"
              />
            </div>

            {/* Right Column: Content */}
            <div className="order-1 lg:order-2 flex flex-col">
              <h3 className="h3-heading font-bold mb-4 text-black ">
                Simplified Hiring &<br></br> Caregiver Readiness 
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Automate and manage the entire caregiver<br></br> onboarding journey—from hiring to compliance—<br></br>without delays.
              </p>

              <ul className="space-y-4 mb-10">
                {featureList.map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="playGrad4" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#64FEF0" />
                          <stop offset="100%" stopColor="#15B6E7" />
                        </linearGradient>
                      </defs>
                      <polygon points="4,2 18,10 4,18" fill="url(#playGrad4)" />
                    </svg>
                    <span className="text-gray-700 text-lg">{text}</span>
                  </li>
                ))}
              </ul>

              <div>
               <a href="https://caregiveronboarding.ivna.ai/" target="_blank"> <button
                  onClick={handleBookDemoClick}
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