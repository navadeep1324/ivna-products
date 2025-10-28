import { Card } from "@/components/ui/card";

// Updated client logos using actual images from the public directory
// Show only first 4 logos as requested
const clients = [
  { name: "Client 1", logo: "/clinets/logo.png" },
  { name: "Client 2", logo: "/clinets/logo_02-1.svg" },
  { name: "Client 3", logo: "/clinets/images.png" },
  { name: "Client 4", logo: "/clinets/Inlogo.avif" },
  // { name: "Client 5", logo: "/clinets/logo.png" },
  // { name: "Client 6", logo: "/clinets/logo_02-1.svg" },
];

export const ClientLogos = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-ping delay-700"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses that trust VOIPro for their communication needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="p-6 flex items-center justify-center border-border bg-card hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Animated element */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 rounded-full blur-lg animate-pulse"></div>
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 object-contain group-hover:brightness-125 transition-all relative z-10"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
