import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format, isToday, setHours, setMinutes } from "date-fns";
import emailjs from "@emailjs/browser";

// Define type for booked appointments
type BookedAppointment = {
  date: string; // YYYY-MM-DD format
  time: string; // HH:MM format
  email: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    scheduleDemoDate: "",
    scheduleDemoTime: ""
  });
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isTimePickerEnabled, setIsTimePickerEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedAppointments, setBookedAppointments] = useState<BookedAppointment[]>([]);

  // Load booked appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem('bookedAppointments');
    if (savedAppointments) {
      try {
        setBookedAppointments(JSON.parse(savedAppointments));
      } catch (e) {
        console.error('Failed to parse booked appointments', e);
        setBookedAppointments([]);
      }
    }
  }, []);

  // Generate time slots based on current date and time
  useEffect(() => {
    generateTimeSlots();
  }, [date, bookedAppointments]);

  const generateTimeSlots = () => {
    if (!date) {
      setTimeSlots([]);
      setIsTimePickerEnabled(false);
      return;
    }

    const slots = [];
    const now = new Date();
    const isTodaySelected = isToday(date);
    
    // Format selected date for comparison
    const selectedDateStr = format(date, "yyyy-MM-dd");
    
    // Get booked appointments for the selected date
    const bookedSlots = bookedAppointments
      .filter(appointment => appointment.date === selectedDateStr)
      .map(appointment => appointment.time);
    
    // Business hours from 9 AM to 6 PM
    for (let hour = 9; hour <= 18; hour++) {
      const timeSlot1 = `${hour}:00`;
      const timeSlot2 = `${hour}:30`;
      
      // For today, only show future time slots
      if (isTodaySelected) {
        // Check if slot is in the future and not booked
        if ((hour > now.getHours() || (hour === now.getHours() && 0 > now.getMinutes())) && 
            !bookedSlots.includes(timeSlot1)) {
          slots.push(timeSlot1);
        }
        
        // Check if half-hour slot is in the future and not booked
        if (hour < 18 && 
            (hour > now.getHours() || (hour === now.getHours() && 30 > now.getMinutes())) && 
            !bookedSlots.includes(timeSlot2)) {
          slots.push(timeSlot2);
        }
      } else {
        // For future dates, show all available time slots
        if (!bookedSlots.includes(timeSlot1)) {
          slots.push(timeSlot1);
        }
        
        if (hour < 18 && !bookedSlots.includes(timeSlot2)) {
          slots.push(timeSlot2);
        }
      }
    }
    
    setTimeSlots(slots);
    setIsTimePickerEnabled(true);
    
    // Reset time if date changes and selected time is no longer available
    if (date) {
      const formattedDate = format(date, "PPP");
      setFormData(prev => ({
        ...prev,
        scheduleDemoDate: formattedDate
      }));
      
      // If the currently selected time is no longer available, reset it
      if (formData.scheduleDemoTime && !slots.includes(formData.scheduleDemoTime)) {
        setFormData(prev => ({
          ...prev,
          scheduleDemoTime: ""
        }));
      }
    }
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    // Reset time when date changes
    setFormData(prev => ({
      ...prev,
      scheduleDemoDate: selectedDate ? format(selectedDate, "PPP") : "",
      scheduleDemoTime: ""
    }));
  };

  const handleTimeChange = (time: string) => {
    setFormData(prev => ({
      ...prev,
      scheduleDemoTime: time
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Combine date and time for display
    const scheduleDemo = formData.scheduleDemoDate && formData.scheduleDemoTime 
      ? `${formData.scheduleDemoDate} at ${formData.scheduleDemoTime}` 
      : "";
    
    const formDataWithSchedule = {
      ...formData,
      scheduleDemo
    };
    
    // Form submission logic would go here
    console.log("Form submitted:", formDataWithSchedule);
    
    try {
      // Send email using EmailJS with provided credentials
      const serviceId = "service_tbpfice";
      const templateId = "template_aqh02hz";
      const publicKey = "UePQCdV_XSDHOPjoO";
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        schedule_demo: scheduleDemo,
        to_email: "sodham@kleza.io"
      };
      
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log("Email sent successfully!", response.status, response.text);
      
      // Save the appointment to booked appointments
      if (date && formData.scheduleDemoTime) {
        const newAppointment: BookedAppointment = {
          date: format(date, "yyyy-MM-dd"),
          time: formData.scheduleDemoTime,
          email: formData.email
        };
        
        const updatedAppointments = [...bookedAppointments, newAppointment];
        setBookedAppointments(updatedAppointments);
        localStorage.setItem('bookedAppointments', JSON.stringify(updatedAppointments));
      }
      
      alert("Thank you for your message! We'll get back to you soon.");
      resetForm();
    } catch (error) {
      console.error("Failed to send email:", error);
      // Still show success message to user even if email fails
      alert("Thank you for your message! We'll get back to you soon.");
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      scheduleDemoDate: "",
      scheduleDemoTime: ""
    });
    setDate(undefined);
  };

  // Function to check if a day is fully booked
  const isDayFullyBooked = (checkDate: Date) => {
    const dateStr = format(checkDate, "yyyy-MM-dd");
    
    // Get all booked appointments for this date
    const appointmentsForDate = bookedAppointments.filter(
      appointment => appointment.date === dateStr
    );
    
    // If no appointments, day is not fully booked
    if (appointmentsForDate.length === 0) return false;
    
    // Generate all possible time slots for this date
    const allTimeSlots = [];
    const isTodayCheck = isToday(checkDate);
    const now = new Date();
    
    // Business hours from 9 AM to 6 PM
    for (let hour = 9; hour <= 18; hour++) {
      // For today, only consider future time slots
      if (isTodayCheck) {
        if (hour > now.getHours() || (hour === now.getHours() && 0 > now.getMinutes())) {
          allTimeSlots.push(`${hour}:00`);
        }
        if (hour < 18 && (hour > now.getHours() || (hour === now.getHours() && 30 > now.getMinutes()))) {
          allTimeSlots.push(`${hour}:30`);
        }
      } else {
        // For future dates, all time slots are available
        allTimeSlots.push(`${hour}:00`);
        if (hour < 18) {
          allTimeSlots.push(`${hour}:30`);
        }
      }
    }
    
    // If all time slots are booked, the day is fully booked
    return allTimeSlots.length > 0 && appointmentsForDate.length === allTimeSlots.length;
  };

  // Function to check if a date should be disabled
  const isDateDisabled = (date: Date) => {
    // Disable past dates
    if (date < new Date()) return true;
    
    // Disable fully booked days
    if (isDayFullyBooked(date)) return true;
    
    return false;
  };

  return (
    <section id="contact" className="py-8 sm:py-12 relative overflow-hidden"
             style={{ backgroundColor: "#DBF9FF", backgroundImage: "url('/dashboard/contact-bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Background overlay for better image visibility */}
      <div className="absolute inset-0 opacity-20 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-bold mb-2 text-2xl sm:text-4xl lg:text-5xl xl:text-[56px]" style={{ color: "#003E94" }}>Ready to Transform Your Communication?</h2>
            <p className="text-sm sm:text-base" style={{ color: "#003E94" }}>
              We're here to answer your questions and guide you toward smarter, seamless communication. Book your demo now!
            </p>
          </div>
          
          <div className="rounded-xl shadow-md p-6 sm:p-8 border border-border relative overflow-hidden" style={{ backgroundColor: "#003e94bd" }}>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="h-9 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="h-9 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" style={{ color: "#ffffff" }} />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="pl-7 h-9 sm:h-10 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-9 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Schedule Demo Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative">
                        <CalendarIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground pointer-events-none" style={{ color: "#ffffff" }} />
                        <Input
                          value={formData.scheduleDemoDate}
                          placeholder="Select date"
                          className="pl-7 h-9 sm:h-10 text-xs sm:text-sm cursor-pointer"
                          readOnly
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        disabled={isDateDisabled}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Schedule Demo Time</Label>
                  <Select 
                    value={formData.scheduleDemoTime} 
                    onValueChange={handleTimeChange}
                    disabled={!isTimePickerEnabled}
                  >
                    <SelectTrigger className="h-9 sm:h-10 text-xs sm:text-sm">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-xs sm:text-sm">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium sr-only" style={{ color: "#ffffff" }}>Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={3}
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>
              </div>
              
              <div className="pt-2 flex justify-center">
                <Button 
                  type="submit" 
                  size="sm" 
                  disabled={isSubmitting}
                  variant="outline"
                  className="font-bold py-2 px-8 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-xs sm:text-sm border-0"
                  style={{ backgroundColor: "#00BDE5", color: "#06102E" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};