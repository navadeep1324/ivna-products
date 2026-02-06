import { User, BarChart3, CheckCircle, Zap, Clock, Headphones, Phone, TrendingUp, History, FileText, Activity, LayoutDashboard, Users, AlertTriangle, PieChart, Lightbulb } from "lucide-react";

export const Features = () => {
  const schedulingFeatures = [
    {
      icon: History,
      text: "Caller details with full conversation history ",
    },
    {
      icon: FileText,
      text: "AI-generated transcripts, summaries, and key highlights ",
    },
    {
      icon: Activity,
      text: "Call quality indicators and sentiment insights ",
    },
    {
      icon: TrendingUp,
      text: "Performance scoring and improvement suggestions ",
    },
    
  ];

  const callTrackingFeatures = [
    {
      icon: LayoutDashboard,
      text: "Live dashboards for operational and care metrics ",
    },
    {
      icon: Users,
      text: "Team performance and workload visibility ",
    },
    {
      icon: AlertTriangle,
      text: "Alerts for compliance gaps and critical issues ",
    },
    {
      icon: PieChart,
      text: "Customizable KPIs and reporting views ",
    },
    {
      icon: Lightbulb,
      text: "Data-driven insights for faster decision-making ",
    },
    
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003E94]">
              Features that help you scale
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Stay in control with a unified view of all your business communications —
              track, analyze, and improve every conversation effortlessly.
            </p>
          </div>

          {/* Scheduling Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col lg:col-span-5">
              <h3 className="h3-heading font-bold mb-5 text-[#003E94]">
                Voice Intelligence & Communication Insights 
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stay in control of all care conversations with AI-powered analysis that turns voice interactions into actionable insights.
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
                <a href="https://lightslategrey-cattle-983050.hostingersite.com/" target="_blank"><button
                  className="px-8 py-3 rounded-lg text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #64FEF0 0%, #15B6E7 100%)'
                  }}
                >
                  Book Demo
                </button>
                </a>
              </div>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="relative min-h-[400px] lg:col-span-7 md:translate-x-12 ">
              <img
                src="/dashboard/Assesment.jpg"
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
              Real-Time Operations & Performance Monitoring 
              </h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
               Get a unified, real-time view of care operations to track performance, identify risks, and act faster.
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
               <a href="https://blue-sandpiper-473638.hostingersite.com/" target="_blank"> <button
                  className="px-8 py-3 rounded-lg text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #64FEF0 0%, #15B6E7 100%)'
                  }}
                >
                  Book Demo
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
