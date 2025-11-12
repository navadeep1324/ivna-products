import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const handleBookDemoClick = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemoClick = () => {
    // Scroll to Product Showcase section (VoicaAI Professional Suite)
    const productShowcase = document.getElementById("suite");
    if (productShowcase) {
      productShowcase.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a5c] via-[#2563eb] to-[#14b8a6]">
      {/* Subtle abstract pattern overlay */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]"></div>
      </div>
      
      {/* Green wavy pattern on the right side - light green, subtle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[700px] opacity-40 -z-10 hidden lg:block pointer-events-none">
        <img 
          src="/dashboard/wave-green.png" 
          alt="Decoration" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered Voice Call Analyzer, for Smarter Business Communication
          </h1>
            
          {/* Description text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
            Gain real-time insights, identify communication gaps, and empower your team to perform better — all with Voica's intelligent Voice Call Analyzer.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#36C0ED] hover:bg-[#2dd4bf] text-white px-8 py-6 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0"
              onClick={handleBookDemoClick}
            >
              Book Demo
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white border-2 border-white hover:bg-white/90 text-gray-900 hover:text-gray-900 px-8 py-6 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 group"
              onClick={handleWatchDemoClick}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;