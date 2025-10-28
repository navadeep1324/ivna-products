import { Card } from "@/components/ui/card";

export const ClientLogos = () => {
  // In a real application, these would be imported images
  const clients = [
    { id: 1, name: "TechCorp" },
    { id: 2, name: "InnovateCo" },
    { id: 3, name: "Global Solutions" },
    { id: 4, name: "Future Enterprises" },
    { id: 5, name: "Digital Dynamics" },
    { id: 6, name: "Nexus Group" },
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">Trusted by innovative teams at</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <Card key={client.id} className="p-6 flex items-center justify-center border-border bg-card hover:shadow-md transition-shadow">
              <div className="text-xl font-bold text-foreground/80">{client.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};