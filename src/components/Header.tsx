import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Package, Mail } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookDemoClick = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/logo/Ivna.png" 
                alt="IVNA Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
            <a 
              href="#features" 
              className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "features")}
            >
              <Zap className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Features
            </a>
            <a 
              href="#product" 
              className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "product")}
            >
              <Package className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Product
            </a>
            <a 
              href="#contact" 
              className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              <Mail className="h-4 w-4" style={{ color: '#36c0ed' }} />
              Contact
            </a>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded-md"
              onClick={handleBookDemoClick}
            >
              Schedule A Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-xl mt-2 border border-border/50 shadow-lg">
            <div className="flex flex-col gap-2 sm:gap-3">
              <a 
                href="#features" 
                className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "features");
                  setIsMenuOpen(false);
                }}
              >
                <Zap className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Features
              </a>
              <a 
                href="#product" 
                className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "product");
                  setIsMenuOpen(false);
                }}
              >
                <Package className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Product
              </a>
              <a 
                href="#contact" 
                className="text-sm sm:text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "contact");
                  setIsMenuOpen(false);
                }}
              >
                <Mail className="h-4 w-4" style={{ color: '#36c0ed' }} />
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-3 sm:pt-4 border-t border-border px-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-sm sm:text-base py-2 rounded-md"
                  onClick={handleBookDemoClick}
                >
                  Schedule A Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};