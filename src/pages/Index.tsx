import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { ProductShowcase } from "@/components/ProductShowcase";
import { LeadManagement } from "@/components/LeadManagement";
import { CallAnalytics } from "@/components/CallAnalytics";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Introduction Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Lead Management Section */}
        <LeadManagement />
        
        {/* Benefits Section */}
        <Stats />
        
        {/* Call Analytics Section */}
        <CallAnalytics />
        
        {/* Product Videos / Screenshots Section */}
        <ProductShowcase />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Form Section */}
        <ContactForm />
        
        {/* Call to Action Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;