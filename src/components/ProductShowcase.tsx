import { User, BarChart3, CheckCircle, Zap, Clock, Headphones, Phone, TrendingUp } from "lucide-react";

export const ProductShowcase = () => {
  const featureList = [
    {
      icon: User,
      text: "Caller details and communication history.",
    },
    {
      icon: BarChart3,
      text: "Call quality indicators and performance scores.",
    },
    {
      icon: CheckCircle,
      text: "Follow-up status and assigned team member.",
    },
    {
      icon: Zap,
      text: "Real-time AI insights and feedback.",
    },
    {
      icon: Clock,
      text: "Quick filters to sort by date, client, or call type.",
    },
    {
      icon: Headphones,
      text: "One-click access to transcripts and summaries.",
    },
  ];

  const assessmentFeatures = [
    {
      icon: BarChart3,
      text: "Call Summary Snapshot.",
    },
    {
      icon: Phone,
      text: "Call Type Analysis.",
    },
    {
      icon: Headphones,
      text: "Recordings & Transcriptions.",
    },
    {
      icon: User,
      text: "Lead Enquiry Tracking.",
    },
    {
      icon: Zap,
      text: "Quality Call Insights.",
    },
    {
      icon: BarChart3,
      text: "Team Performance Dashboard.",
    },
    {
      icon: TrendingUp,
      text: "Strategic Analytics & Trends.",
    },
  ];

  const handleBookDemoClick = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="suite" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Team Performance Section (Blue Container) */}
        <div className="bg-[#0059B2] rounded-[2rem] p-8 md:py-20 md:px-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-32 mb-24">
          {/* Subtle wavy background pattern */}
          {/* <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: '/dashboard/new-wave.png',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          /> */}

          {/* Left Column: Content */}
          <div className="flex-1 text-white relative z-10">
            <h2 className="h3-heading font-bold mb-4">
              Team performance
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
              Stay in control with a unified view of all your business communications —
              track, analyze, and improve every conversation effortlessly.
            </p>

            <ul className="space-y-5 mb-10">
              {featureList.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/95 text-lg">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={handleBookDemoClick}
                className="px-10 py-3 rounded-lg bg-white text-black font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#5FE9EF]"
              >
                Book Demo
              </button>
            </div>
          </div>

          {/* Right Column: Device Mockups */}
          <div className="flex-1 relative z-10 w-full lg:w-auto h-[400px] sm:h-[500px] flex items-center justify-center">
            {/* Tablet Mockup */}
            <div className="relative w-[300px] sm:w-[400px] rounded-[2rem] overflow-hidden">
              <img
                src="/dashboard/Team Performance.png"
                alt="Tablet Dashboard"
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>

            {/* Phone Mockup - overlapping */}
            {/* <div className="absolute -bottom-6 -right-4 sm:right-0 w-[140px] sm:w-[180px] aspect-[1/2] bg-black rounded-[2.5rem] p-2 shadow-2xl overflow-hidden border-4 border-gray-900 translate-x-4">
               <img 
                 src="/dashboard/Voica_Call details_02.png" 
                 alt="Phone Dashboard" 
                 className="w-full h-full object-cover rounded-[2rem]"
               />
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-white/30 rounded-full" />
            </div> */}
          </div>
        </div>

        {/* Assessment Now Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column: Image Area */}
          <div className="order-2 lg:order-1 relative">
            {/* Cyan background element */}
            <div className="absolute inset-0 transform translate-y-4 scale-95" />
            <img
              src="/dashboard/Assesment.jpg"
              alt="Performance Graph"
              className="rounded-2xl w-full h-auto relative z-10"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 flex flex-col">
            <h3 className="h3-heading font-bold mb-4 text-[#003E94] ">
              Assessment now
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Stay in control with a unified view of all your business communications —
              track, analyze, and improve every conversation effortlessly.
            </p>

            <ul className="space-y-5 mb-10">
              {assessmentFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#36C0ED]" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={handleBookDemoClick}
                className="px-8 py-3 rounded-lg text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #64FEF0 0%, #15B6E7 100%)'
                }}
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};