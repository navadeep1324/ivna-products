import { Button } from "@/components/ui/button";
import { Package, Zap, Mail, Shield, FileText } from "lucide-react";

export const Footer = () => {
  const handleBookDemoClick = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Left side image removed as per user request */}
      
      {/* Right side image removed as per user request */}
      
      <div className="container mx-auto px-4 lg:px-8 py-6 sm:py-8 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand - Removed social media links */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img 
                src="/logo/Ivna.png" 
                alt="VoicaAI Logo" 
                className="h-24 sm:h-26 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 max-w-xs">
              Transforming business communications with professional VoicaAI solutions.
            </p>
          </div>
          
          {/* Quick Links with Main Menu Items */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-lg sm:text-xl border-b border-primary/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#product" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center gap-2 text-sm sm:text-base" onClick={(e) => handleNavClick(e, "product")}>
                <Package className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Product Showcase
              </a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center gap-2 text-sm sm:text-base" onClick={(e) => handleNavClick(e, "features")}>
                <Zap className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Features
              </a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center gap-2 text-sm sm:text-base" onClick={(e) => handleNavClick(e, "contact")}>
                <Mail className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Contact
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center gap-2 text-sm sm:text-base">
                <Shield className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Privacy Policy
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center gap-2 text-sm sm:text-base">
                <FileText className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Terms and Conditions
              </a></li>
            </ul>
          </div>
          
          {/* Demo Buttons */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-lg sm:text-xl border-b border-primary/20 pb-2">Product Demos</h3>
            <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-[200px]">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg text-sm sm:text-base py-2 sm:py-3 w-full"
                onClick={handleBookDemoClick}
              >
                Book a Demo
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-primary bg-background hover:bg-primary/10 text-primary group border-2 text-sm sm:text-base py-2 sm:py-3 w-full"
                onClick={handleWatchDemoClick}
              >
                Watch Demo
              </Button> */}
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm sm:text-base">© 2026 Ivna. All rights reserved.</span>
          </div>
          
          {/* Hidden the copyright links on the right side as per user request */}
          <div className="hidden">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-1">
              <Zap className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-1">
              <Shield className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-1">
              <FileText className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-1">
              <FileText className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};