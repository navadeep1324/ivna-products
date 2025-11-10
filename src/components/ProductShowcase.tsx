import { Card } from "@/components/ui/card";
import { Play, Phone, Wifi, Users, Settings, Monitor, Pause, SkipBack, SkipForward, Video, Image } from "lucide-react";
// import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useState, useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dashboard screenshots for slideshow
  const dashboardScreenshots = [
    { src: "/dashboard/Dashboard1.png", alt: "VoicaAI Dashboard Overview" },
    { src: "/dashboard/Dashboard2.png", alt: "Call History Interface" },
    { src: "/dashboard/Dashboard3.png", alt: "Call Analytics Dashboard" },
    { src: "/dashboard/Dashboard4.png", alt: "Reporting and Analytics" },
    // { src: heroDashboard, alt: "VoicaAI Main Dashboard" }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % dashboardScreenshots.length);
      }, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, dashboardScreenshots.length]);

  const openModal = (imageSrc: string, altText: string) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    setSelectedAlt("");
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(prev => (prev - 1 + dashboardScreenshots.length) % dashboardScreenshots.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % dashboardScreenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="suite" className="py-8 sm:py-12 lg:py-16 bg-muted/30 relative overflow-hidden">
      {/* Right side image - keeping this one - hidden on mobile */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 hidden lg:block">
        <img 
          src="/dashboard/Untitled design (10) 2.png" 
          alt="Decoration" 
          className="w-full h-auto object-contain opacity-80"
        />
      </div>
      
      {/* Animated background elements - hidden on mobile */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block"></div>
      <div className="absolute top-1/4 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-2xl animate-ping hidden sm:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
            VoicaAI {" "}
            <span className="text-custom-blue">
              Overview 
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground">
            The next-generation platform for enterprises to simplify collaboration and strengthen client engagement. 
          </p>
        </div>

        {/* Center the Platform Demo section - removed grid layout */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Video Demo Section with Dashboard Images Only */}
            <div className="space-y-4 sm:space-y-5 relative">
              {/* Animated background elements - hidden on mobile */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-300 hidden sm:block"></div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
                <Video className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#36c0ed' }} />
                Platform Demo
              </h3>
              
              {/* Slideshow Carousel with Controls - Dashboard Images Only */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10">
                {/* Animated elements - hidden on mobile */}
                <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full blur-sm animate-pulse hidden sm:block"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full blur-sm animate-ping delay-500 hidden sm:block"></div>
                
                <div className="aspect-video flex items-center justify-center relative">
                  {dashboardScreenshots.map((screenshot, index) => (
                    <img 
                      key={index}
                      src={screenshot.src} 
                      alt={screenshot.alt} 
                      className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  
                  {/* Overlay with Controls */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button 
                        onClick={goToPreviousSlide}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-colors"
                        aria-label="Previous slide"
                      >
                        <SkipBack className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </button>
                      
                      <button 
                        onClick={togglePlayPause}
                        className="bg-gradient-to-br from-primary/80 to-accent/80 backdrop-blur-sm rounded-full p-2 sm:p-3 cursor-pointer hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        ) : (
                          <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-0.5" />
                        )}
                      </button>
                      
                      <button 
                        onClick={goToNextSlide}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-colors"
                        aria-label="Next slide"
                      >
                        <SkipForward className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/70 text-white px-1.5 py-1 sm:px-2 sm:py-1 rounded-full text-xs">
                    Platform Demo
                  </div>
                  
                  {/* Slide indicators */}
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex gap-1">
                    {dashboardScreenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt={selectedAlt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/75 transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-0 right-0 text-center text-white bg-black/50 py-1 mx-auto max-w-md rounded-lg text-xs sm:text-sm">
              {selectedAlt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};