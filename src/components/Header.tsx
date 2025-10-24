import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CloudFlow
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#customers" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Customers
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
                Features
              </a>
              <a href="#solutions" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
                Solutions
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <a href="#customers" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2">
                Customers
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
