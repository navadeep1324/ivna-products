import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleBookDemoClick = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemoClick = () => {
    // Scroll to Product Showcase section (VOIPro Professional Suite)
    const productShowcase = document.getElementById("suite");
    if (productShowcase) {
      productShowcase.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand - Removed social media links */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VOIPro
              </span>
            </div>
            <p className="text-muted-foreground mb-4 text-base max-w-xs">
              Transforming business communications with professional VOIP solutions.
            </p>
          </div>
          
          {/* Quick Links with Main Menu Items */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg border-b border-primary/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#suite" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center text-base">Product Showcase</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center text-base">Features</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center text-base">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1 flex items-center text-base">Terms and Conditions</a></li>
            </ul>
          </div>
          
          {/* Demo Buttons */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg border-b border-primary/20 pb-2">Product Demos</h3>
            <div className="flex flex-col gap-3">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg text-base py-3"
                onClick={handleBookDemoClick}
              >
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary bg-background hover:bg-primary/10 text-primary group border-2 text-base py-3"
                onClick={handleWatchDemoClick}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-base">© 2025 VOIPro. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base">Status</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};