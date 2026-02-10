import { useState } from "react";



export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      id="contact"
      style={{
        backgroundColor: '#F2F2F7',
        backgroundImage: `url('/dashboard/contact-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black whitespace-nowrap" style={{ letterSpacing: '-0.5px', lineHeight:'1.3em' }}>
Looking to optimize your operations<br></br> and decision-making? 
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
             Book a demo to see how IVNA supports smarter, scalable growth 
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                  >
                    Your name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                  >
                    your.email@example.com
                  </label>
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                  >
                    Your phone number
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder=" "
                    value={formData.company}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent"
                  />
                  <label
                    htmlFor="company"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                  >
                    Your company name
                  </label>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder=" "
                    value={formData.date}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent min-h-[46px] no-calendar-icon"
                  />
                  <label
                    htmlFor="date"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                  >
Schedule Demo
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer min-h-[46px]"
                  >
                    <option value=""></option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                  <label
                    htmlFor="time"
                    className={`absolute text-sm text-gray-400 duration-300 transform z-10 origin-[0] bg-white px-2 left-3 ${formData.time ? '-translate-y-4 scale-75 top-1' : 'translate-y-0 scale-100 top-3'} peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500`}
                  >
                    Select time
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className="block px-4 py-2.5 w-full text-base text-gray-700 bg-white rounded-md border border-[#31E6C8] appearance-none focus:outline-none focus:ring-1 focus:ring-[#31E6C8] focus:border-[#31E6C8] peer placeholder-transparent resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-1 peer-focus:text-gray-500"
                >
                  How can we help you?
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#31E6C8] hover:bg-[#25cbb0] text-black font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg min-w-[200px]"
                  style={{
                    background: 'linear-gradient(90deg, #31E6C8 0%, #00BDE5 100%)'
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


