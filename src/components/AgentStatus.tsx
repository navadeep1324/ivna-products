import { useState, useEffect } from "react";
import { Phone, User, Star, CheckCircle } from "lucide-react";

export const AgentStatus = () => {
  const [agentStatus, setAgentStatus] = useState({
    name: "Alex Johnson",
    status: "Available",
    rating: 4.9,
    callsHandled: 1247,
    currentCall: null as { client: string; duration: string } | null,
  });

  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState("00:00");

  // Simulate call activity
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly simulate incoming calls
      if (!isCalling && Math.random() > 0.7) {
        setIsCalling(true);
        setAgentStatus(prev => ({
          ...prev,
          currentCall: {
            client: ["TechCorp Inc.", "Global Solutions", "Innovate Ltd.", "Prime Enterprises"][Math.floor(Math.random() * 4)],
            duration: "00:00"
          },
          status: "On Call"
        }));
      }

      // Update call duration if in call
      if (isCalling) {
        setCallDuration(prev => {
          const [minutes, seconds] = prev.split(":").map(Number);
          let newSeconds = seconds + 1;
          let newMinutes = minutes;
          
          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }
          
          return `${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
        });
        
        // Randomly end call
        if (Math.random() > 0.95) {
          setIsCalling(false);
          setAgentStatus(prev => ({
            ...prev,
            currentCall: null,
            status: "Available",
            callsHandled: prev.callsHandled + 1
          }));
          setCallDuration("00:00");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCalling]);

  // Update current call duration
  useEffect(() => {
    if (agentStatus.currentCall) {
      setAgentStatus(prev => ({
        ...prev,
        currentCall: {
          ...prev.currentCall!,
          duration: callDuration
        }
      }));
    }
  }, [callDuration]);

  return (
    <div className="absolute top-6 right-6 w-80 bg-card border border-border rounded-xl shadow-lg p-4 z-20 animate-fade-in">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${agentStatus.status === "Available" ? "bg-green-500" : "bg-blue-500"} animate-pulse`} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{agentStatus.name}</h3>
          <div className="flex items-center gap-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${agentStatus.status === "Available" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
              {agentStatus.status}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{agentStatus.rating}</span>
          <span className="text-muted-foreground">rating</span>
        </div>
        <div>
          <span className="font-medium">{agentStatus.callsHandled}</span>
          <span className="text-muted-foreground"> calls</span>
        </div>
      </div>

      {agentStatus.currentCall && (
        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Active Call</span>
          </div>
          <div className="text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">With:</span>
              <span className="font-medium">{agentStatus.currentCall.client}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{agentStatus.currentCall.duration}</span>
            </div>
          </div>
        </div>
      )}

      {!agentStatus.currentCall && (
        <div className="text-center py-3 text-muted-foreground text-sm">
          <CheckCircle className="h-5 w-5 mx-auto mb-1 text-green-500" />
          <p>Ready to take your call</p>
        </div>
      )}
    </div>
  );
};