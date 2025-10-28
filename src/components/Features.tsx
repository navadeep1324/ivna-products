import { Card } from "@/components/ui/card";
import { Phone, Wifi, Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Crystal Clear Audio",
    description: "HD voice quality with advanced noise cancellation for professional conversations.",
  },
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    description: "Reliable connections across all devices with automatic failover protection.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and compliance with global security standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get your system up and running in minutes with our intuitive interface.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Unified communications with video conferencing and instant messaging.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with clients worldwide with local presence in 100+ countries.",
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
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional VOIP
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for modern businesses who demand excellence in communication
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
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 relative">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* New Section 1: Text on left, Image on right */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center bg-muted/30 p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-500"></div>
          
          <div className="order-2 lg:order-1 relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Advanced <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Call</span> Management
            </h3>
            <p className="text-muted-foreground mb-4">
              Take control of your business communications with our sophisticated call management system. 
              Route calls intelligently, set up automated attendants, and ensure no call goes unanswered.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Interactive Voice Response (IVR) systems</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Call queuing and forwarding</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Voicemail to email transcription</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Call recording and analytics</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative z-10">
            <img 
              src="/dashboard/Call History.png" 
              alt="VOIPro Call Management Dashboard" 
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
              alt="VOIPro Analytics Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Real-Time <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Analytics</span> & Insights
            </h3>
            <p className="text-muted-foreground mb-4">
              Make data-driven decisions with our comprehensive analytics dashboard. 
              Monitor performance metrics, track call volumes, and optimize your communication strategy.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-border relative overflow-hidden">
                {/* Animated element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-full blur-lg animate-pulse"></div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-border relative overflow-hidden">
                {/* Animated element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-full blur-lg animate-pulse delay-300"></div>
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Avg. Cost Reduction</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-border relative overflow-hidden">
                {/* Animated element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-full blur-lg animate-pulse delay-500"></div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-border relative overflow-hidden">
                {/* Animated element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-full blur-lg animate-pulse delay-700"></div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Countries Supported</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our platform provides actionable insights to help you improve customer service, 
              reduce operational costs, and scale your business communications effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};