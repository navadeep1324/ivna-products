import { User, BarChart3, CheckCircle, Zap, Clock, Headphones, Phone, TrendingUp } from "lucide-react";

export const Features = () => {
  const schedulingFeatures = [
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

  const callTrackingFeatures = [
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

  return (
    <>
      <section
        id="features"
        className="py-20 bg-white overflow-hidden relative"
        style={{
          backgroundImage: "url('/dashboard/Features-section.png')",
          backgroundSize: '40%',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          {/* Main Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003E94]">
              Features that help you scale
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Stay in control with a unified view of all your business communications —
              track, analyze, and improve every conversation effortlessly.
            </p>
          </div>

          {/* Scheduling Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col">
              <h3 className="h3-heading font-bold mb-5 text-[#003E94]">
                Scheduling
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stay in control with a unified view of all your business communications —
                track, analyze, and improve every conversation effortlessly.
              </p>

              <ul className="space-y-5 mb-10">
                {schedulingFeatures.map((feature, index) => (
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
                  className="px-8 py-3 rounded-lg text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #64FEF0 0%, #15B6E7 100%)'
                  }}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="relative min-h-[400px]">
              <img
                src="/dashboard/schedule.jpg"
                alt="Scheduling Dashboard"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F2F2F7] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
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
              <h3 className="h3-heading font-bold mb-5 text-[#003E94]">
                Call Tracking
              </h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Stay in control with a unified view of all your business communications —
                track, analyze, and improve every conversation effortlessly.
              </p>

              <ul className="space-y-5 mb-10">
                {callTrackingFeatures.map((feature, index) => (
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
    </>
  );
};
