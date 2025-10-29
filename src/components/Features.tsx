import { Card } from "@/components/ui/card";
import { Phone, Wifi, Shield, Zap, Users, Globe } from "lucide-react";

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
    <section id="features" className="py-8 lg:py-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-ping delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Power Features That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Drive CallMonAI 
            </span>
          </h2>
          <p className="text-lg text-foreground">
            Discover intelligent features designed to enhance every call, every connection. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border-border bg-card hover:border-primary/30 relative overflow-hidden"
            >
              {/* Animated icon background */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 relative">
                <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground text-sm md:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* New Section 1: Text on left, Image on right */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center bg-muted/30 p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-500"></div>
          
          <div className="order-2 lg:order-1 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
           Know <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What’s Happening</span> in Every Conversation 
            </h3>
            <p className="text-foreground mb-4">
              Stay in control with a unified view of all your business communications — track, analyze, and improve every conversation effortlessly. 
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Caller details and communication history. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Call quality indicators and performance scores. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Follow-up status and assigned team member. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Real-time AI insights and feedback. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Quick filters to sort by date, client, or call type.   </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">One-click access to transcripts and summaries. </span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative z-10">
            <img 
              src="/dashboard/Call History.png" 
              alt="CallMonAI Call Management Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
        </div>

        {/* New Section 2: Image on left, Content on right */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center bg-muted/30 p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-ping delay-700"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <img 
              src="/dashboard/Dashboard Screen 2 version 0.0.1.png" 
              alt="CallMonAI Analytics Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Track  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Communication</span> With our AI Dashboard
            </h3>
            <p className="text-foreground mb-4">
              Gain a 360° view of your calls, enquiries, and team performance — all powered by real-time AI analytics that help you make faster, smarter business decisions. 
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Call Summary Snapshot. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Call Type Analysis. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Recordings & Transcriptions. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">RLead Enquiry Tracking. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Quality Call Insights. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Team Performance Dashboard. </span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Strategic Analytics & Trends. </span>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  );
};