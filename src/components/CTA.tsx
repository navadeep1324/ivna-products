import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CreditCard, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10" 
             style={{ backgroundImage: "url('/dashboard/Rectangle 19.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_50%)]"></div>
      
      {/* Stronger background elements for better highlighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-accent/15 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-xl">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto drop-shadow-md text-white font-medium">
            Join 500,000+ businesses already using VoicaAI for professional communications. 
            Start your free trial today—no credit card required.
          </p>
          
          {/* Removed buttons as per requirements */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Buttons removed - no buttons required here */}
          </div>
          
          {/* Feature highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white/95 text-sm">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <Clock className="h-4 w-4 text-white" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <CreditCard className="h-4 w-4 text-white" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <Calendar className="h-4 w-4 text-white" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};