import { Card } from "@/components/ui/card";
import { Phone, Wifi, Shield, Zap, Users, Globe, User, Headphones, BarChart3, Clock, CheckCircle, TrendingUp } from "lucide-react";

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
];

export const Features = () => {
  return (
    <section id="features" className="py-8 sm:py-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl animate-ping delay-2000 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Power Features That{" "}
            <span className="text-custom-blue">
              Drive CallMonAI 
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground">
            Discover intelligent features designed to enhance every call, every connection. 
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

        {/* New Section 1: Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-20 items-center bg-muted/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-pulse hidden sm:block"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-500 hidden sm:block"></div>
          
          <div className="order-2 lg:order-1 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
           Know <span className="text-custom-blue">What's Happening</span> in Every Conversation 
            </h3>
            <p className="text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Stay in control with a unified view of all your business communications — track, analyze, and improve every conversation effortlessly. 
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <User className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Caller details and communication history. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Call quality indicators and performance scores. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Follow-up status and assigned team member. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Real-time AI insights and feedback. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Quick filters to sort by date, client, or call type.   </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Headphones className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">One-click access to transcripts and summaries. </span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative z-10">
            <img 
              src="/dashboard/Dashboard1.png" 
              alt="CallMonAI Call Management Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
        </div>

        {/* New Section 2: Image on left, Content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-20 items-center bg-muted/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-2xl animate-ping delay-700 hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-xl animate-pulse delay-1000 hidden sm:block"></div>
          
          <div className="relative z-10">
            <img 
              src="/dashboard/Dashboard2.png" 
              alt="CallMonAI Analytics Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Track  <span className="text-custom-blue">Your Communication</span> With our AI Dashboard
            </h3>
            <p className="text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Gain a 360° view of your calls, enquiries, and team performance — all powered by real-time AI analytics that help you make faster, smarter business decisions. 
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Call Summary Snapshot. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Call Type Analysis. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Headphones className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Recordings & Transcriptions. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <User className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Lead Enquiry Tracking. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Quality Call Insights. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Team Performance Dashboard. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-sm sm:text-base">Strategic Analytics & Trends. </span>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  );
};