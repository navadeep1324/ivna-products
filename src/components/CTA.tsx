export const CTA = () => {
  const handleBookDemoClick = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#01A0E4] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Curious how real-time insights can <br className="hidden md:block" /> boost your conversions?
          </h2>
          <p className="text-white/90 text-xl lg:text-2xl mb-12">
            Connect with us and learn how PulseBoard can give your business the edge.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleBookDemoClick}
              className="px-8 py-3 rounded-md text-[#01A0E4] font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #31E6C8 0%, #00BDE5 100%) border-box',
                border: '3px solid transparent',
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};