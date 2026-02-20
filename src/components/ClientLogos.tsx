const clients = [
  { name: "Right at Home", logo: "/clinets/logo.png" },
  { name: "Assured Home Nursing", logo: "/clinets/logo_02-1.svg" },
  { name: "Home Instead", logo: "/clinets/images.png" },
  { name: "Interim", logo: "/clinets/Inlogo.avif" },
];

export const ClientLogos = () => {
  return (
    <section className="py-20 bg-[#EFF4FB] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#003E94]">
          Organizations That Trust IVNA 
          </h2>
          <p className="text-gray-600 text-lg">
             Supporting care teams with intelligent, scalable care management solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 h-32"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};