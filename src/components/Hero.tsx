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
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/dashboard/ivna hero bg new.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />



      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="h1-heading font-bold text-black mb-6" style={{ lineHeight: '1.3' }}>
            Powering the Future of Care with AI-Driven Applications </h1>

          {/* Description text */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
At IVNA, we manage a growing ecosystem of AI-Powered Care Solutions that help care organizations operate smarter, respond faster, and deliver more personalized, reliable care.           </p>

          {/* CTA Button - centered */}
          <div className="flex justify-center">
            <button
              className="px-10 py-3 text-base sm:text-lg font-weight-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 cursor-pointer rounded-lg"
              onClick={handleBookDemoClick}
              style={{
                background: '#006EF5'
              }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Multi-colored stripe at the bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 flex">
        <div className="flex-1 h-full" style={{ backgroundColor: '#01A0E4' }} />
        <div className="flex-1 h-full" style={{ backgroundColor: '#00A652' }} />
        <div className="flex-1 h-full" style={{ backgroundColor: '#ED1B24' }} />
        <div className="flex-1 h-full" style={{ backgroundColor: '#FFCB05' }} />
        <div className="flex-1 h-full" style={{ backgroundColor: '#DF068B' }} />
      </div> */}
    </section>
  );
};

export default Hero;