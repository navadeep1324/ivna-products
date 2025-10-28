import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Customer Success",
    company: "TechCorp Global",
    content: "CloudFlow transformed how we interact with customers. Response times dropped by 60% and satisfaction scores are at an all-time high.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    company: "StreamLine Inc",
    content: "The analytics capabilities are incredible. We now have visibility into every aspect of our customer service operation.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Customer Service Director",
    company: "Global Solutions",
    content: "Implementing CloudFlow was seamless, and the ROI was evident within the first quarter. Best decision we've made.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="customers" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Trusted by innovative teams at</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["TechCorp", "InnovateCo", "Global Solutions", "Future Enterprises", "Digital Dynamics", "Nexus Group"].map((client, index) => (
              <Card key={index} className="p-6 flex items-center justify-center border-border bg-card hover:shadow-md transition-shadow h-24">
                <div className="text-xl font-bold text-foreground/80">{client}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};