import { Card } from "@/components/ui/card";
import { Phone, Shield, Zap, Users, Headphones, Settings } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "Crystal Clear Calls",
      description: "HD voice quality with advanced noise cancellation technology."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your system up and running in minutes, not weeks."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing collaboration tools."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support for all your business needs."
    },
    {
      icon: Settings,
      title: "Customizable Features",
      description: "Tailor the system to match your unique business requirements."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional VOIP
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform provides all the tools your business needs to communicate effectively and securely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-border bg-card hover:shadow-lg transition-all hover:border-primary/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};