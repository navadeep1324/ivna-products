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

  return (
    <section className="relative min-h-[300px] lg:min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #003E94 0%, #007088 100%)'
        }}
      />
      
      {/* Background image in the left corner */}
      <div className="absolute left-0 top-0 w-1/2 h-full z-0 hidden lg:block">
        <img 
          src="/dashboard/wave.webp" 
          alt="Banner background decoration" 
          className="w-full h-full object-cover"
          style={{ opacity: 1.0, transform: 'scale(1.5) translateX(20px)' }}
        />
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ lineHeight: '1.3' }}>
            AI-Powered Voice Call Analyzer, for Smarter Business Communication
          </h1>
            
          {/* Description text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
            Gain real-time insights, identify communication gaps, and empower your team to perform better — all with VoicaAI
          </p>
          
          {/* CTA Button - centered */}
          <div className="flex justify-center">
            <button 
              className="px-6 py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 cursor-pointer rounded-md"
              onClick={handleBookDemoClick}
              style={{ 
                backgroundColor: '#fff',
                color: 'rgb(6 115 224)',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, rgb(155, 234, 166), rgb(54, 192, 237))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;