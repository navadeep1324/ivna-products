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

  // Generate time slots based on current date and time
  useEffect(() => {
    generateTimeSlots();
  }, [date]);

  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const isTodaySelected = date && isToday(date);
    
    // Business hours from 9 AM to 6 PM
    for (let hour = 9; hour <= 18; hour++) {
      // For today, only show future time slots
      if (isTodaySelected) {
        if (hour > now.getHours() || (hour === now.getHours() && 0 > now.getMinutes())) {
          slots.push(`${hour}:00`);
          if (hour < 18) {
            slots.push(`${hour}:30`);
          }
        }
      } else {
        // For future dates, show all time slots
        slots.push(`${hour}:00`);
        if (hour < 18) {
          slots.push(`${hour}:30`);
        }
      }
    }
    
    setTimeSlots(slots);
    setIsTimePickerEnabled(!!date);
    
    // Reset time if date changes
    if (date) {
      setFormData(prev => ({
        ...prev,
        scheduleDemoDate: format(date, "PPP")
      }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    
    // Reset form after submission
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
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-8 lg:py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden"
             style={{ backgroundImage: "url('/dashboard/Rectangle 19.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Stronger background elements for better highlighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-accent/15 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">Ready to Transform Your Communication?</h2>
            <p className="text-base text-foreground/80">
              We're here to answer your questions and guide you toward smarter, seamless communication. Book your demo now!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-border relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="h-9 text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="h-9 text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-medium">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="pl-7 h-9 text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs font-medium">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-9 text-sm"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Schedule Demo Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative">
                        <CalendarIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                        <Input
                          value={formData.scheduleDemoDate}
                          placeholder="Select date"
                          className="pl-7 h-9 text-sm cursor-pointer"
                          readOnly
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Schedule Demo Time</Label>
                  <Select 
                    value={formData.scheduleDemoTime} 
                    onValueChange={handleTimeChange}
                    disabled={!isTimePickerEnabled}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-sm">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="message" className="text-xs font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={3}
                    required
                    className="text-sm"
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  size="sm" 
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-sm"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};