import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { TrendingDown, Clock, Award, HeartHandshake } from "lucide-react";
import { HorizontalCallAnalytics } from "@/components/HorizontalCallAnalytics";

const stats = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
  },
  {
    icon: Clock,
    value: "Up to 60%",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
  },
  {
    icon: Award,
    value: "6+ hours",
    label: "Saves Time ",
    description: " Weekly by eliminating manual note-taking and follow-ups. ",
  },
  {
    icon: HeartHandshake,
    value: "100% ",
    label: "Visibility ",
    description: "Visibility into every call, transcript, and action item.",
  },
];

export const Hero = () => {
  const handleBookDemoClick = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemoClick = () => {
    // Scroll to Product Showcase section (VOIPro Professional Suite)
    const productShowcase = document.getElementById("suite");
    if (productShowcase) {
      productShowcase.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-ping delay-1000"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Hidden Enterprise VOIP Solutions tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20 opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise VOIP Solutions
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-loose">
              AI That Simplifies, Analyzes, and Strengthens <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Communication
              </span>
            </h1>
            
            <p className="text-lg text-foreground mb-6 max-w-xl">
              Turn every interaction into measurable growth with AI-powered insights and smart automation — because at VOiPro, we don’t just make communication work, we make it work for you. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg group"
                onClick={handleBookDemoClick}
              >
                Book Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary bg-background hover:bg-primary/10 text-primary group border-2"
                onClick={handleWatchDemoClick}
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Hidden numbers - keeping the structure but hiding the content */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border opacity-0">
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-foreground">Businesses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-foreground">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Horizontal Call Analytics Visualization */}
          <div className="relative">
            <HorizontalCallAnalytics />
            
            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-48 h-48 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-3 -left-3 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
      
      {/* Moved Key Business Benefits section */}
      <div className="container mx-auto px-4 lg:px-8 mt-16 bg-muted/30 p-8 rounded-2xl">
        {/* Added missing heading for Key Business Benefits */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
           What Makes  {" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VOiPro a Game Changer
            </span>
          </h2>
          <p className="text-lg text-foreground">
           AI that helps your team communicate smarter and drive better ROI. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group bg-card p-5 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-base font-semibold mb-1 text-foreground">{stat.label}</div>
              <p className="text-sm md:text-base text-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};