import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PowerFeatures } from "@/components/PowerFeatures";
import { ProductShowcase } from "@/components/ProductShowcase";
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



        {/* Product Videos / Screenshots Section */}
        <div className="bg-muted/30">
          <ProductShowcase />
        </div>



        {/* Client Logos Section - Added above contact form */}
        <div className="bg-background">
          <ClientLogos />
        </div>

        {/* Call to Action Section - Restored as per requirements */}
        <div className="bg-background">
          <CTA />
        </div>

        {/* Contact Form Section */}
        <div className="bg-muted/30">
          <ContactForm />
        </div>


      </main>
      <Footer />
    </div>
  );
};

export default Index;