
export const PowerFeatures = () => {
  const stats = [
    {
      image: "/sections/Operaiton.png",
      value: "40–50%",
      title: "Operational Efficiency",
      description: "Automate workflows and reduce manual administrative work ",
    },
    {
      image: "/sections/decision.png",
      value: "2× Faster",
      title: "Decision-Making",
      description: "Act quickly with real-time insights across care operations ",
    },
    {
      image: "/sections/care.png",
      value: "40–50%",
      title: "Improved Care Accuracy",
      description: "Standardized assessments for consistent care planning ",
    },
    {
      image: "/sections/bussiness.png",
      value: "90%",
      title: "Business Visibility",
      description: "Stay in control with a unified view of all your care operations",
    },
  ];

  return (
    <section id="power-features" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/dashboard/powerfeatures bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-8 py-4">
              {/* Vertical Divider for desktop */}
              {index < stats.length - 1 && (
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20 ${index === 1 ? "hidden lg:block" : "hidden md:block"}`} />
              )}

              <div className="mb-6 h-[42px] flex items-end justify-center pb-2 relative">
                <img src={stat.image} alt={stat.title} className="w-10 h-10 object-contain" />
              </div>

              <div className="mb-4">
                <span className="text-4xl lg:text-5xl font-bold" style={{ color: '#000000' }}>
                  {stat.value}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                {stat.title}
              </h3>

              <p className="text-sm lg:text-base max-w-[280px]" style={{ color: '#666' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};