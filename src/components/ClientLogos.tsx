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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ 
          backgroundImage: `url('/dashboard/our-client-bg.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '80%',
          marginTop: '10rem',
          zIndex: 1
        }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl animate-ping delay-700 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Desktop version - hidden on mobile */}
        <div className="hidden sm:block">
          <div className="text-center mb-8 sm:mb-12" style={{ textAlign: "left", marginLeft: "0.3rem" }}>
            <h2 className="font-bold mb-3" style={{ fontSize: "2.5rem", color: "#003E94", textAlign: "left", marginLeft: "11.3rem" }}>
              Our{" "}
              <span style={{ color: "#003E94" }}>
                Clients
              </span>
            </h2>
            <p className="text-foreground text-sm sm:text-base whitespace-nowrap" style={{ textAlign: "left", marginLeft: "11.3rem" }}>
              From startups to enterprises — VoicaAI keeps teams connected and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3" style={{ paddingBottom: "6rem", backgroundColor: "rgb(246, 246, 246)", padding: "6rem", paddingTop: "6rem", paddingLeft: "5rem", paddingRight: "7.5rem", marginRight: "-12rem", marginLeft: "11rem" }}>
            {clients.map((client, index) => (
              <div 
                key={index}
                className="p-4 sm:p-6 flex items-center justify-center bg-card"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={index >= 2 ? "h-16 sm:h-16 object-contain" : "h-12 sm:h-14 object-contain"}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile version - shown only on mobile */}
        <div className="sm:hidden">
          <div className="text-center mb-8" style={{ textAlign: "left", marginLeft: "0.3rem" }}>
            <h2 className="font-bold mb-3" style={{ fontSize: "2rem", color: "#003E94", textAlign: "left" }}>
              Our{" "}
              <span style={{ color: "#003E94" }}>
                Clients
              </span>
            </h2>
            <p className="text-foreground text-sm" style={{ textAlign: "left" }}>
              From startups to enterprises — VoicaAI keeps teams connected and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4" style={{ paddingBottom: "3rem", backgroundColor: "rgb(246, 246, 246)", padding: "3rem 1rem", paddingTop: "3rem" }}>
            {clients.map((client, index) => (
              <div 
                key={index}
                className="p-4 flex items-center justify-center bg-card"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={index >= 2 ? "h-16 object-contain" : "h-12 object-contain"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};