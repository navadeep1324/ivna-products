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
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/dashboard/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Subtle overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="h1-heading font-bold text-white mb-6" style={{ lineHeight: '1.3' }}>
Home care software for private duty and independent agencies          </h1>
            
          {/* Description text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
          Designed by home care industry experts and private duty home care agencies, IVNA is transforming the home care software industry.
          </p>
          
          {/* CTA Button - centered */}
          <div className="flex justify-center">
            <button 
              className="px-6 py-2 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 cursor-pointer rounded-md"
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
              Schedule A Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;