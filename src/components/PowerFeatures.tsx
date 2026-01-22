import { Briefcase, UserCheck, TrendingUp } from "lucide-react";

export const PowerFeatures = () => {
  const stats = [
    {
      image: "/dashboard/material-symbols_business-center-outline.png",
      value: "90%",
      title: "Business growth",
      description: "Stay in control with a unified view of all your business",
    },
    {
      image: "/dashboard/mdi_account-check-outline.png",
      value: "99%",
      title: "Efficiency work",
      description: "Stay in control with a unified view of all your business",
    },
    {
      image: "/dashboard/game-icons_progression.png",
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

              <div className="mb-6 h-[42px] flex items-end justify-center pb-2 relative">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-10 h-10 object-contain text-[#31E6C8]"
                  style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(21%) saturate(996%) hue-rotate(109deg) brightness(97%) contrast(93%)' }}
                />
              </div>

              <div className="mb-4">
                <span className="text-5xl lg:text-7xl font-bold" style={{ color: '#FFCB05' }}>
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