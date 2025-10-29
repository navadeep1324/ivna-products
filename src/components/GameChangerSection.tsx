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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Enhanced Key Business Benefits section with white background */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
          {/* Added missing heading for Key Business Benefits */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              What Makes {" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CallMonAI a Game Changer
              </span>
            </h2>
            <p className="text-lg text-foreground/80">
              AI that helps your team communicate smarter and drive better ROI. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group bg-card/90 p-5 rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all backdrop-blur-sm hover:-translate-y-2 duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-base font-semibold mb-1 text-foreground">{stat.label}</div>
                <p className="text-sm md:text-base text-foreground/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};