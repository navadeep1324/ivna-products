import { Card } from "@/components/ui/card";
import { Phone, Wifi, Shield, Zap, Users, Globe, Headphones, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI-Powered Call Analysis",
    description: "Gives real-time feedback on conversation quality.",
  },
  {
    icon: Wifi,
    title: "Conversation Summaries & Insight",
    description: " Generates instant call summaries and action points.",
  },
  {
    icon: Shield,
    title: "Performance Dashboard",
    description: "Offers detailed analytics on call duration, response time, and customer satisfaction trends.",
  },
  {
    icon: Zap,
    title: "Intelligent Transcription",
    description: "Transcribes every call with high accuracy, making it easy to review client interactions.",
  },
  {
    icon: Users,
    title: "Security & Compliance",
    description: "Protects data with enterprise-grade encryption and access control.",
  },
  {
    icon: Globe,
    title: "Continuous Learning Engine",
    description: "Gets smarter with every call for sharper insights and evaluations.",
  },
  {
    icon: Headphones,
    title: "Enquiry Call Tracking",
    description: "Monitors and categorizes enquiry calls to prevent missed leads and boost conversions.",
  },
  {
    icon: BarChart3,
    title: "Communication Gap Detection",
    description: "Identifies unclear or ineffective communication and flags them for improvement.",
  },
  {
    icon: Clock,
    title: "Integration & Scalability",
    description: "Seamlessly integrates with communication tools, and marketing platforms.",
  },
];

export const PowerFeatures = () => {
  return (
    <section id="power-features" className="py-8 sm:py-12 relative overflow-hidden" style={{ backgroundColor: '#DBF9FF' }}>
      {/* Background image at bottom, outside the main section content */}
      <div className="absolute left-0 -bottom-10 w-1/2 hidden lg:block">
        <img 
          src="/dashboard/Untitled design (10) 2 (1).png" 
          alt="Decoration" 
          className="w-full h-auto object-contain opacity-80"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl animate-ping delay-2000 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Transform Your Voice Data with {" "}
            <span className="text-custom-blue">
              Voica’s Smart Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground">
            Turn conversations into insights with AI-driven tools that boost performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border-border bg-card hover:border-primary/30 relative overflow-hidden"
            >
              {/* Animated icon background */}
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/5 rounded-full blur-xl"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 relative">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" style={{ color: '#36c0ed' }} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};