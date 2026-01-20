import { Briefcase, UserCheck, TrendingUp } from "lucide-react";

export const PowerFeatures = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "90%",
      title: "Business growth",
      description: "Stay in control with a unified view of all your business",
    },
    {
      icon: UserCheck,
      value: "99%",
      title: "Efficiency work",
      description: "Stay in control with a unified view of all your business",
    },
    {
      icon: TrendingUp,
      value: "90%",
      title: "Data Analysis",
      description: "Stay in control with a unified view of all your business",
    },
  ];

  return (
    <section id="power-features" className="py-20 bg-[#042C70] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-8 py-4">
              {/* Vertical Divider for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20" />
              )}
              
              <div className="mb-6">
                <stat.icon className="h-8 w-8 text-[#31E6C8]" />
              </div>
              
              <div className="mb-4">
                <span className="text-5xl lg:text-7xl font-bold bg-gradient-to-b from-[#31E6C8] to-[#00BDE5] bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {stat.title}
              </h3>
              
              <p className="text-white/70 text-sm lg:text-base max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};