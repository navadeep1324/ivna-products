
export const PowerFeatures = () => {
  const stats = [
    {
      image: "/sections/Operaiton.png",
      value: "40–50%",
      title: "Operational efficiency",
      description: "Automate workflows and reduce manual administrative work ",
    },
    {
      image: "/sections/decision.png",
      value: "2× Faster",
      title: "Decision-making",
      description: "Act quickly with real-time insights across care operations ",
    },
    {
      image: "/sections/care.png",
      value: "40–50%",
      title: "Improved care accuracy",
      description: "Standardized assessments for consistent care planning ",
    },
    {
      image: "/sections/bussiness.png",
      value: "90%",
      title: "Business visibility",
      description: "Stay in control with a unified view of all your care operations",
    },
  ];

  return (
    <section id="power-features" className="py-20 bg-[#042C70] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-8 py-4">
              {/* Vertical Divider for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20" />
              )}

              <div className="mb-6 h-[42px] flex items-end justify-center pb-2 relative">
                <img src={stat.image} alt={stat.title} className="w-10 h-10 object-contain" />
              </div>

              <div className="mb-4">
                <span className="text-4xl lg:text-5xl font-bold" style={{ color: '#FFCB05' }}>
                  {stat.value}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {stat.title}
              </h3>

              <p className="text-white/70 text-sm lg:text-base max-w-[280px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};