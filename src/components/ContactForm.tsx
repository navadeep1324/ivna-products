import { useState } from "react";
import { Phone } from "lucide-react";


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
      className="py-8 md:py-12 relative overflow-hidden"
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
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003D82]">
              Get in Touch
            </h2>
            <p className="text-base text-gray-800 text-xl">
              Talk to us to see how real-time visibility can transform your business.  Schedule a demo now!
            </p>
            {/* <p className="text-base text-gray-800 text-xl">
             
            </p> */}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                  >
                    Name
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
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                  >
                    Email
                  </label>
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent pr-10"
                  />
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#10B2E6]" />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                  >
                    Phone Number
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
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent"
                  />
                  <label
                    htmlFor="company"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                  >
                    Company
                  </label>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder=" "
                    value={formData.date}
                    onChange={handleChange}
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent min-h-[56px]"
                  />
                  <label
                    htmlFor="date"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                  >
                    Schedule Demo Date
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer min-h-[56px]"
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
                    className={`absolute text-sm text-gray-500 duration-300 transform z-10 origin-[0] left-4 ${formData.time ? '-translate-y-4 scale-75 top-4' : 'translate-y-0 scale-100 top-3.5'} peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]`}
                  >
                    Schedule Demo Time
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
                  className="block px-4 pt-5 pb-2 w-full text-base text-gray-900 bg-[#F2F2F7] rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50 peer placeholder-transparent resize-none min-h-[80px]"
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:text-[#10B2E6]"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#10B2E6] hover:bg-[#0EA1D5] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl button-item button-cf text-lg"
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


