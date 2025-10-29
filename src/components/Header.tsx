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
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */
          }
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CallMonAI
            </a>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <a 
              href="#features" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "features")}
            >
              <Zap className="h-4 w-4" />
              Features
            </a>
            <a 
              href="#suite" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "suite")}
            >
              <Package className="h-4 w-4" />
              Product
            </a>
            <a 
              href="#contact" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-base"
              onClick={handleBookDemoClick}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-xl mt-2 border border-border/50 shadow-lg">
            <div className="flex flex-col gap-3">
              <a 
                href="#features" 
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "features");
                  setIsMenuOpen(false);
                }}
              >
                <Zap className="h-4 w-4" />
                Features
              </a>
              <a 
                href="#suite" 
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "suite");
                  setIsMenuOpen(false);
                }}
              >
                <Package className="h-4 w-4" />
                Product
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-secondary flex items-center gap-2"
                onClick={(e) => {
                  handleNavClick(e, "contact");
                  setIsMenuOpen(false);
                }}
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border px-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg text-base"
                  onClick={() => {
                    handleBookDemoClick();
                    setIsMenuOpen(false);
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};