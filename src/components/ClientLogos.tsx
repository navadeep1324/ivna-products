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
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* New background image in the middle with increased size */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 hidden lg:block"
        style={{ 
          backgroundImage: `url('/dashboard/our-client-bg.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '80%',
          marginTop: '7rem',
          zIndex: 1
        }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl animate-ping delay-700 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:text-left lg:ml-44">
          <h2 className="font-bold mb-3 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#003E94" }}>
            Our{" "}
            <span style={{ color: "#003E94" }}>
              Clients
            </span>
          </h2>
          <p className="text-foreground text-sm sm:text-base lg:text-left lg:ml-44">
            From startups to enterprises — VoicaAI keeps teams connected and efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg lg:mx-44">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 flex items-center justify-center bg-card"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className={index >= 2 ? "h-12 sm:h-16 object-contain" : "h-10 sm:h-14 object-contain"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};