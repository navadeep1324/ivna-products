import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Phone, Headphones, Zap, Shield, Star, CheckCircle, TrendingUp, Users, Clock, Award, BarChart3, Headset, Mic, Volume2, Brain, Bot } from "lucide-react";
import { TrendingDown, Clock as ClockIcon, Award as AwardIcon, HeartHandshake } from "lucide-react";
import { HorizontalCallAnalytics } from "@/components/HorizontalCallAnalytics";

const stats = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
  },
  {
    icon: ClockIcon,
    value: "Up to 60%",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
  },
  {
    icon: AwardIcon,
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
    // Scroll to Product Showcase section (CallMonAI Professional Suite)
    const productShowcase = document.getElementById("suite");
    if (productShowcase) {
      productShowcase.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Enhanced section with stronger background color and added background image
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Stronger background elements for better highlighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-accent/15 -z-10" />
      
      {/* More prominent decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-ping delay-1000"></div>
      
      {/* Additional decorative elements for enhanced highlighting */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/15 to-accent/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl -z-10"></div>
      
      {/* AI-themed floating elements */}
      <div className="absolute top-20 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md animate-bounce"></div>
      <div className="absolute top-40 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 left-1/2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-md animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-sm animate-bounce delay-1500"></div>
      
      {/* Floating animated icons */}
      <Phone className="absolute top-20 right-20 h-6 w-6 text-primary/20 animate-bounce delay-1000" />
      <Headphones className="absolute top-40 left-20 h-6 w-6 text-accent/20 animate-bounce delay-1500" />
      <Zap className="absolute bottom-40 right-32 h-6 w-6 text-primary/20 animate-bounce delay-2000" />
      <Shield className="absolute bottom-20 left-32 h-6 w-6 text-accent/20 animate-bounce delay-2500" />
      
      {/* New floating elements */}
      <TrendingUp className="absolute top-1/3 right-10 h-5 w-5 text-primary/30 animate-pulse delay-700" />
      <Users className="absolute top-1/2 left-10 h-5 w-5 text-accent/30 animate-pulse delay-1200" />
      <Clock className="absolute bottom-1/3 right-1/4 h-5 w-5 text-primary/30 animate-pulse delay-1700" />
      
      {/* Additional decorative floating elements */}
      <Award className="absolute top-1/4 left-1/3 h-4 w-4 text-accent/25 animate-ping delay-3000" />
      <BarChart3 className="absolute bottom-1/4 left-1/4 h-4 w-4 text-primary/25 animate-ping delay-3500" />
      <Headset className="absolute top-3/4 right-1/3 h-4 w-4 text-accent/25 animate-ping delay-4000" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Hidden Enterprise CallMonAI Solutions tag */}
            <div className="hidden">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-sm font-medium mb-4 border border-primary/30 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enterprise CallMonAI Solutions
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-loose">
              AI That Simplifies, Analyzes, and Strengthens <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Communication
              </span>
            </h1>
            
            <p className="text-lg text-foreground mb-6 max-w-xl">
              Turn every interaction into measurable growth with AI-powered insights and smart automation — because at CallMonAI, we don't just make communication work, we make it work for you. 
            </p>
            
            {/* AI-Powered badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium mb-6 border border-cyan-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              AI-Powered Intelligence
            </div>
            
            {/* New key features list */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">Call Recording</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">AI Transcription</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">Sentiment Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">Real-time Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-foreground">Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-foreground">AI Assistant</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg group transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={handleBookDemoClick}
              >
                Book Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary bg-background hover:bg-primary/10 text-primary group border-2 transition-all duration-300 hover:shadow-md hover:scale-105"
                onClick={handleWatchDemoClick}
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Hidden numbers */}
            <div className="hidden">
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-foreground/80">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500K+</div>
                  <div className="text-sm text-foreground/80">Businesses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-foreground/80">Countries</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Horizontal Call Analytics Visualization */}
          <div className="relative">
            <HorizontalCallAnalytics />
            
            {/* Enhanced decorative Elements for better highlighting */}
            <div className="absolute -top-8 -right-8 w-56 h-56 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full blur-2xl -z-10 animate-pulse" />
            
            {/* Additional highlighting element */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 -z-10 transform rotate-3 scale-105 blur-xl"></div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-primary/20 shadow-lg">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground">AI-Powered</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-accent/20 shadow-lg">
              <div className="flex items-center gap-1">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold text-foreground">Secure</span>
              </div>
            </div>
            
            {/* New feature badge */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm rounded-full p-3 border border-accent/30 shadow-xl">
              <div className="flex flex-col items-center">
                <TrendingUp className="h-5 w-5 text-accent mb-1" />
                <span className="text-[10px] font-bold text-foreground whitespace-nowrap">LIVE DATA</span>
              </div>
            </div>
            
            {/* New floating elements around visualization */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-primary/20 shadow-md">
              <div className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">Analytics</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-accent/20 shadow-md">
              <div className="flex items-center gap-1">
                <Headset className="h-4 w-4 text-accent" />
                <span className="text-xs font-semibold text-foreground">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Key Business Benefits section removed and moved to separate component */}
    </section>
  );
};