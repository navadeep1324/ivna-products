export const CTA = () => {
  const handleBookDemoClick = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/dashboard/CTA.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-relaxed" style={{lineHeight: '1.2em'}}>
            Looking To Stay Ahead With Real-Time <br className="hidden md:block" />Operational Intelligence? 


          </h2>
          <p className="text-black/90 text-xl lg:text-xl mb-12">
             Connect with us to see how IVNA gives your business a smarter advantage.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleBookDemoClick}
              className="px-8 py-3 rounded-md text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: '#006EF5',
                border: '3px solid transparent',
              }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};