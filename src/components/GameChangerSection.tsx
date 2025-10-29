import { TrendingDown, Clock as ClockIcon, Award as AwardIcon, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
  },
  {
    icon: ClockIcon,
    value: "Up to 60%",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
  },
  {
    icon: AwardIcon,
    value: "6+ hours",
    label: "Saves Time ",
    description: " Weekly by eliminating manual note-taking and follow-ups. ",
  },
  {
    icon: HeartHandshake,
    value: "100% ",
    label: "Visibility ",
    description: "Visibility into every call, transcript, and action item.",
  },
];

export const GameChangerSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Enhanced Key Business Benefits section with white background */}
        <div className="bg-[#fbfbfc] p-8 rounded-2xl shadow-xl">
          {/* Added missing heading for Key Business Benefits */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-relaxed">
              What Makes {" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VOiPro a Game Changer
              </span>
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              AI that helps your team communicate smarter and drive better ROI. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group bg-card/90 p-5 rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all backdrop-blur-sm hover:-translate-y-2 duration-300 leading-relaxed"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-primary/10 to-accent/10">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-xl lg:text-2xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold mb-1 text-foreground">{stat.label}</div>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};