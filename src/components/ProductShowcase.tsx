import { Card } from "@/components/ui/card";
import { Play, Phone, Wifi, Users, Settings, Monitor, Pause, SkipBack, SkipForward, Video, Image, Volume2, VolumeX, Square } from "lucide-react";
// import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useState, useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dashboard screenshots for slideshow
  const dashboardScreenshots = [
    { src: "/dashboard/Dashboard2.png", alt: "VoicaAI Dashboard Overview" },
    { src: "/dashboard/Voica_Call details_01.png", alt: "Call History Interface" },
    { src: "/dashboard/Voica_Call records 1.png", alt: "Call Analytics Dashboard" },
    { src: "/dashboard/Voica_Call details_02.png", alt: "Reporting and Analytics" },
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

  // Update time display
  useEffect(() => {
    const updateTimes = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        setDuration(videoRef.current.duration || 0);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateTimes);
      video.addEventListener('loadedmetadata', updateTimes);
      
      return () => {
        video.removeEventListener('timeupdate', updateTimes);
        video.removeEventListener('loadedmetadata', updateTimes);
      };
    }
  }, []);

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

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
        setIsMuted(false); // Enable sound when user clicks play
        if (videoRef.current) {
          videoRef.current.muted = false;
        }
      }
    }
  };

  const handleVideoStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
      setCurrentTime(0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="suite" className="py-8 sm:py-12 lg:py-16 bg-muted/30 relative overflow-hidden" 
             style={{ backgroundImage: "url('/dashboard/Rectangle 34.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <span style={{ color: '#012353', fontWeight: 'bold' }}>
              VoicaAI Overview
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
              
              {/* Video Player - Replacing the slideshow carousel */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10">
                {/* Animated elements - hidden on mobile */}
                <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full blur-sm animate-pulse hidden sm:block"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full blur-sm animate-ping delay-500 hidden sm:block"></div>
                
                <div className="aspect-video flex items-center justify-center relative">
                  {/* Video player with poster image */}
                  <video 
                    ref={videoRef}
                    src="/dashboard/VoicaAI-Demo_1920x1080.mp4" 
                    poster="/dashboard/VoicaAI-Demo_1920x1080.jpg"
                    controls={false}
                    autoPlay={false}
                    loop
                    muted={isMuted}
                    className="w-full h-auto object-cover"
                    onEnded={() => setIsVideoPlaying(false)}
                  />
                  
                  {/* Play/Pause button overlay - only shown before playing */}
                  {!isVideoPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={handleVideoPlay}
                    >
                      <div className="bg-black/30 rounded-full p-4 sm:p-6 backdrop-blur-sm">
                        <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Sound control button */}
                  <button 
                    onClick={toggleMute}
                    className="absolute top-3 right-3 bg-black/50 rounded-full p-2 backdrop-blur-sm cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    ) : (
                      <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    )}
                  </button>
                </div>
                
                {/* Video Controls - shown at the bottom */}
                <div className="bg-black/70 py-2 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleVideoPlay}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5 ml-0.5" />
                      )}
                    </button>
                    
                    <button 
                      onClick={handleVideoStop}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Square className="h-5 w-5" />
                    </button>
                    
                    <button 
                      onClick={() => videoRef.current && (videoRef.current.currentTime -= 10)}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <SkipBack className="h-5 w-5" />
                    </button>
                    
                    <button 
                      onClick={() => videoRef.current && (videoRef.current.currentTime += 10)}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <SkipForward className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Time display */}
                  <div className="text-white text-xs flex items-center gap-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
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