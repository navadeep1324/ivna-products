import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(122deg, #40a1f1 0%, #796cef 100%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-xl">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto drop-shadow-md text-white font-medium">
            Join 500,000+ businesses already using VOIPro for professional communications. 
            Start your free trial today—no credit card required.
          </p>
          
          {/* Removed buttons as per requirements */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Buttons removed - no buttons required here */}
          </div>
          
          {/* Hidden feature highlights as per requirements */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white/95 text-sm opacity-0">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};