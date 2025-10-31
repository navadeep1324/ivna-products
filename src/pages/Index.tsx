import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PowerFeatures } from "@/components/PowerFeatures";
import { Stats } from "@/components/Stats";
import { ProductShowcase } from "@/components/ProductShowcase";
// import { LeadManagement } from "@/components/LeadManagement";
import { CallAnalytics } from "@/components/CallAnalytics";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ClientLogos } from "@/components/ClientLogos";
import { GameChangerSection } from "@/components/GameChangerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Introduction Section */}
        <div className="bg-background">
          <Hero />
        </div>
        
        {/* What Makes CallMonAI a Game Changer Section */}
        <GameChangerSection />
        
        {/* Power Features Section */}
        <div className="bg-background">
          <PowerFeatures />
        </div>
        
        {/* Additional Features Section */}
        <div className="bg-muted/30">
          <Features />
        </div>
        
        {/* Lead Management Section */}
        {/* <div className="bg-background">
          <LeadManagement />
        </div> */}
        
        {/* Benefits Section - now moved to Hero section */}
        {/* <Stats /> - Removed as it's now in Hero section */}

        {/* Call Analytics Section - Hidden as per requirements */}
        {/* <CallAnalytics /> - Hidden */}
        
        {/* Product Videos / Screenshots Section */}
        <div className="bg-muted/30">
          <ProductShowcase />
        </div>
        
        {/* Testimonials Section - Hidden as per requirements */}
        {/* <Testimonials /> - Hidden */}
        
        {/* Client Logos Section - Added above contact form */}
        <div className="bg-background">
          <ClientLogos />
        </div>
        
        {/* Contact Form Section */}
        <div className="bg-muted/30">
          <ContactForm />
        </div>
        
        {/* Call to Action Section - Restored as per requirements */}
        {/* <div className="bg-background">
          <CTA />
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;