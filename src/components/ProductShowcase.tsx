import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const ProductShowcase = () => {
  // Dashboard screenshots
  const dashboardScreenshots = [
    {
      id: 1,
      title: "Call Analytics Dashboard",
      image: "/dashboard/Call History.png"
    },
    {
      id: 2,
      title: "Performance Metrics",
      image: "/dashboard/Dashboard Screen 2 version 0.0.1.png"
    },
    {
      id: 3,
      title: "User Management",
      image: "/dashboard/Call Details_3_Modified.png"
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      image: "/dashboard/eCommerce Dashboard (1).png"
    }
  ];

  return (
    <section id="suite" className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            VOIPro{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Suite
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete solution for enterprise communications and collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Video Demo Section */}
          <div className="space-y-6 relative">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 relative z-10">
              <Play className="h-6 w-6 text-primary" />
              Platform Overview
            </h3>
            <p className="text-muted-foreground relative z-10">
              See how VOIPro transforms business communications with our professional platform. 
              Watch our dashboard in action with real-time analytics and system management.
            </p>
            
            {/* Video Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="aspect-video flex items-center justify-center relative">
                <img 
                  src={heroDashboard} 
                  alt="VOIPro Dashboard Interface" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-full p-5 cursor-pointer hover:from-primary/30 hover:to-accent/30 transition-all duration-300 group">
                    <Play className="h-12 w-12 text-white fill-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                  Platform Demo
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm">HD Audio</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm">Video Conferencing</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm">Analytics</span>
            </div>
          </div>
          
          {/* Dashboard Screenshots Section - Only on right side */}
          <div className="space-y-6 relative">
            <h3 className="text-2xl font-bold text-foreground relative z-10">Dashboard Screenshots</h3>
            <p className="text-muted-foreground relative z-10">
              Get a glimpse of our intuitive dashboard interface designed for seamless management.
            </p>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {dashboardScreenshots.map((screenshot) => (
                <Card key={screenshot.id} className="p-3 border-border bg-card hover:shadow-md transition-all hover:border-primary/30 overflow-hidden">
                  <h4 className="font-semibold text-foreground text-sm mb-1">{screenshot.title}</h4>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};