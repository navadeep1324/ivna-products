import { useState, useEffect } from "react";
import { Phone, Wifi, Volume2, Mic, Star } from "lucide-react";

export const CallAnalyticsVisualization = () => {
  const [waveData, setWaveData] = useState<number[]>(Array(50).fill(0));
  const [qualityRating, setQualityRating] = useState(0);
  const [callStatus, setCallStatus] = useState("connecting");
  const [agentStatus, setAgentStatus] = useState({
    name: "Alex Johnson",
    status: "on-call",
    callDuration: "02:45"
  });

  // Generate wave animation data
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveData(prev => {
        const newData = [...prev];
        // Shift data to the left
        for (let i = 0; i < newData.length - 1; i++) {
          newData[i] = newData[i + 1];
        }
        // Add new random value at the end
        newData[newData.length - 1] = Math.random() * 100;
        return newData;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulate quality rating improvement
  useEffect(() => {
    const timer = setTimeout(() => {
      if (qualityRating < 92) {
        setQualityRating(prev => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [qualityRating]);

  // Simulate call status changes
  useEffect(() => {
    const statuses = ["connecting", "ringing", "on-call", "on-call", "on-call"];
    let index = 0;
    
    const timer = setInterval(() => {
      index = (index + 1) % statuses.length;
      setCallStatus(statuses[index]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Call Analytics</h3>
          <p className="text-muted-foreground text-sm">Real-time monitoring and quality metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            callStatus === "connecting" ? "bg-yellow-500 animate-pulse" :
            callStatus === "ringing" ? "bg-blue-500 animate-pulse" :
            "bg-green-500"
          }`}></div>
          <span className="text-sm font-medium capitalize">{callStatus.replace("-", " ")}</span>
        </div>
      </div>

      {/* Agent Status */}
      <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-lg">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="font-semibold text-primary">AJ</span>
        </div>
        <div>
          <div className="font-medium text-foreground">{agentStatus.name}</div>
          <div className="text-xs text-muted-foreground">Duration: {agentStatus.callDuration}</div>
        </div>
        <div className="ml-auto flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
          <Phone className="h-3 w-3" />
          On Call
        </div>
      </div>

      {/* Wave Visualization */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-foreground">Audio Waveform</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Volume2 className="h-4 w-4" />
            <span>Live Audio Stream</span>
          </div>
        </div>
        <div className="h-24 bg-muted rounded-lg p-2 relative overflow-hidden">
          <svg viewBox={`0 0 ${waveData.length * 10} 100`} className="w-full h-full">
            <path
              d={`M 0,50 ${waveData.map((value, index) => `L ${index * 10},${50 - value / 2}`).join(' ')}`}
              stroke="hsl(210, 95%, 45%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d={`M 0,50 ${waveData.map((value, index) => `L ${index * 10},${50 + value / 2}`).join(' ')}`}
              stroke="hsl(210, 80%, 50%)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Connection Quality Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <Wifi className="h-5 w-5 text-primary mx-auto mb-1" />
          <div className="text-sm text-muted-foreground">Network</div>
          <div className="font-semibold text-foreground">Excellent</div>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <Mic className="h-5 w-5 text-primary mx-auto mb-1" />
          <div className="text-sm text-muted-foreground">Audio</div>
          <div className="font-semibold text-foreground">Clear</div>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <Phone className="h-5 w-5 text-primary mx-auto mb-1" />
          <div className="text-sm text-muted-foreground">Latency</div>
          <div className="font-semibold text-foreground">24ms</div>
        </div>
      </div>

      {/* Quality Rating */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-foreground">Call Quality Rating</h4>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{qualityRating}%</span>
          </div>
        </div>
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${qualityRating}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Poor</span>
          <span>Good</span>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};