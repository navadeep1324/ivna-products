import { TrendingUp, Clock, Award, HeartHandshake, Users, DollarSign, Building, Target } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500K+",
    label: "Businesses",
    description: "Trusted by companies worldwide",
  },
  {
    icon: Target,
    value: "300%",
    label: "Average ROI",
    description: "Clients see triple their investment within 12 months",
  },
  {
    icon: Clock,
    value: "60%",
    label: "Faster Response",
    description: "Reduce customer wait times significantly",
  },
  {
    icon: DollarSign,
    value: "$2.5M",
    label: "Saved Annually",
    description: "Average cost savings for our clients",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Proven Results,{" "}
            <span className="text-custom-blue">
              Real Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of companies transforming their customer experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8" style={{ color: '#36c0ed' }} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1 text-foreground">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};