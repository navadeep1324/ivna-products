import { User, Headphones, BarChart3, Clock, CheckCircle, TrendingUp, Phone } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-8 sm:py-12 bg-background relative overflow-hidden">
      {/* Animated background elements - hidden on mobile */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl animate-ping delay-2000 hidden sm:block"></div>
      
      {/* Left side background image from GameChangerSection - moved to section level - hidden on mobile */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 hidden lg:block">
        <img 
          src="/dashboard/Untitled design (10) 1.png" 
          alt="Decoration" 
          className="w-full h-auto object-contain opacity-80"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* New Section 1: Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-20 items-center bg-muted/30 p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements - hidden on mobile */}
          <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-pulse hidden sm:block"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-xl animate-ping delay-500 hidden sm:block"></div>
          
          <div className="order-2 lg:order-1 relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 text-foreground">
           Know <span className="text-custom-blue">What's Happening</span> in Every Conversation 
            </h3>
            <p className="text-foreground mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
              Stay in control with a unified view of all your business communications — track, analyze, and improve every conversation effortlessly. 
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 lg:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <User className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Caller details and communication history. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Call quality indicators and performance scores. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Follow-up status and assigned team member. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Real-time AI insights and feedback. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Quick filters to sort by date, client, or call type.   </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Headphones className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">One-click access to transcripts and summaries. </span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative z-10">
            <img 
              src="/dashboard/Dashboard2.png" 
              alt="CallMonAI Analytics Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
        </div>

        {/* New Section 2: Image on left, Content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-20 items-center bg-muted/30 p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden">
          {/* Animated background elements - hidden on mobile */}
          <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-2xl animate-ping delay-700 hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-xl animate-pulse delay-1000 hidden sm:block"></div>
          
          <div className="relative z-10">
            <img 
              src="/dashboard/Dashboard1.png" 
              alt="CallMonAI Call Management Dashboard" 
              className="rounded-xl shadow-2xl border border-border w-full"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 text-foreground">
              Track  <span className="text-custom-blue">Your Communication</span> With our AI Dashboard
            </h3>
            <p className="text-foreground mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
              Gain a 360° view of your calls, enquiries, and team performance — all powered by real-time AI analytics that help you make faster, smarter business decisions. 
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 lg:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Call Summary Snapshot. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Call Type Analysis. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Headphones className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Recordings & Transcriptions. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <User className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Lead Enquiry Tracking. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Quality Call Insights. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Team Performance Dashboard. </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5" style={{ color: '#36c0ed' }} />
                <span className="text-foreground text-xs sm:text-sm">Strategic Analytics & Trends. </span>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  );
};