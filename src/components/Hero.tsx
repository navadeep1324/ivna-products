import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now available worldwide
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Customer Experience
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Empower your team with an all-in-one platform designed for modern customer service. 
              Boost efficiency, delight customers, and scale your business effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50M+</div>
                <div className="text-sm text-muted-foreground">Interactions Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Image */}
          <div className="relative animate-fade-in lg:animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={heroDashboard} 
                alt="CloudFlow Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
