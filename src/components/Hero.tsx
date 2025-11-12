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
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/dashboard/Overlay.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Wave pattern overlay on the right side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5 h-4/5 opacity-100 -z-10 hidden lg:block">
        <img 
          src="/dashboard/banner-wave-img.png" 
          alt="Wave pattern overlay" 
          className="w-full h-full object-contain"
          onError={(e) => {
            console.error('Error loading wave image');
            const imgElement = e.target as EventTarget & HTMLImageElement;
            imgElement.style.display = 'none';
          }}
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