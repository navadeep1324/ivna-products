import { Card } from "@/components/ui/card";
import { Bot, BarChart3, Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Leverage intelligent automation to handle routine queries and free up your team for complex issues.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into customer behavior, team performance, and business metrics in real-time.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global security standards to protect your data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized infrastructure ensures instant responses and seamless performance at any scale.",
  },
  {
    icon: Users,
    title: "Omnichannel Support",
    description: "Manage conversations across phone, email, chat, and social media from one unified platform.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Support customers worldwide with multi-language capabilities and localized experiences.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for modern teams who demand excellence in every customer interaction
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
