import { Card } from "@/components/ui/card";
import { Play, Phone, Wifi, Users, Settings, Monitor, Pause, SkipBack, SkipForward } from "lucide-react";
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
    { src: "/dashboard/Dashboard Screen 2 version 0.0.1.png", alt: "CallMonAI Dashboard Overview" },
    { src: "/dashboard/Call History.png", alt: "Call History Interface" },
    { src: "/dashboard/Call Details_3_Modified.png", alt: "Call Analytics Dashboard" },
    { src: "/dashboard/eCommerce Dashboard (1).png", alt: "Reporting and Analytics" },
    // { src: heroDashboard, alt: "CallMonAI Main Dashboard" }
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
    <section id="suite" className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-ping"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            CallMonAI {" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Overview 
            </span>
          </h2>
          <p className="text-lg text-foreground">
            The next-generation platform for enterprises to simplify collaboration and strengthen client engagement. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Video Demo Section with Dashboard Images Only */}
          <div className="space-y-6 relative">
            {/* Animated background elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-300"></div>
            
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 relative z-10">
              <Play className="h-6 w-6 text-primary" />
              Platform Demo
            </h3>
            
            {/* Slideshow Carousel with Controls - Dashboard Images Only */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Animated elements */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full blur-sm animate-ping delay-500"></div>
              
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
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={goToPreviousSlide}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                      aria-label="Previous slide"
                    >
                      <SkipBack className="h-6 w-6 text-white" />
                    </button>
                    
                    <button 
                      onClick={togglePlayPause}
                      className="bg-gradient-to-br from-primary/80 to-accent/80 backdrop-blur-sm rounded-full p-5 cursor-pointer hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8 text-white" />
                      ) : (
                        <Play className="h-8 w-8 text-white ml-1" />
                      )}
                    </button>
                    
                    <button 
                      onClick={goToNextSlide}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                      aria-label="Next slide"
                    >
                      <SkipForward className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                  Platform Demo
                </div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {dashboardScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Screenshots Gallery */}
          <div className="space-y-6 relative">
            {/* Animated background elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-ping delay-700"></div>
            
            <h3 className="text-2xl font-bold text-foreground relative z-10">Platform Screenshots</h3>
            <p className="text-foreground relative z-10">
              Explore our intuitive dashboard and feature-rich interface designed for seamless communication management.
            </p>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div 
                className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openModal("/dashboard/Dashboard Screen 2 version 0.0.1.png", "CallMonAI Dashboard Overview")}
              >
                <img 
                  src="/dashboard/Dashboard Screen 2 version 0.0.1.png" 
                  alt="CallMonAI Dashboard Overview" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div 
                className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openModal("/dashboard/Call History.png", "Call History Interface")}
              >
                <img 
                  src="/dashboard/Call History.png" 
                  alt="Call History Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div 
                className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openModal("/dashboard/Call Details_3_Modified.png", "Call Analytics Dashboard")}
              >
                <img 
                  src="/dashboard/Call Details_3_Modified.png" 
                  alt="Call Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div 
                className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openModal("/dashboard/eCommerce Dashboard (1).png", "Reporting and Analytics")}
              >
                <img 
                  src="/dashboard/eCommerce Dashboard (1).png" 
                  alt="Reporting and Analytics" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
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
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 mx-auto max-w-md rounded-lg">
              {selectedAlt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};