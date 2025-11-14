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
    <section className="py-8 sm:py-12 bg-background relative overflow-hidden">
      {/* New background image in the middle with increased size */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ 
          backgroundImage: `url('/dashboard/Group 25.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '80%', // Further increased size
          zIndex: 1
        }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl animate-ping delay-700 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="font-bold mb-3" style={{ fontSize: "2.5rem", color: "#003E94" }}>
            Our{" "}
            <span style={{ color: "#003E94" }}>
              Clients
            </span>
          </h2>
          <p className="text-foreground text-sm sm:text-base">
            From startups to enterprises — VoicaAI <br />
            keeps teams connected and efficient. 
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" style={{ backgroundColor: "#F6F6F6", padding: "2rem" }}>
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 flex items-center justify-center border-border bg-card hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Animated element */}
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/5 rounded-full blur-lg animate-pulse"></div>
              <img 
                src={client.logo} 
                alt={client.name} 
                className={index >= 2 ? "h-16 sm:h-16 object-contain group-hover:brightness-125 transition-all relative z-10" : "h-12 sm:h-14 object-contain group-hover:brightness-125 transition-all relative z-10"}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};