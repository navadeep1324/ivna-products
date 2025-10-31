import { useState, useEffect } from "react";
import { Phone, Wifi, Volume2, Mic, Star, User, CheckCircle, Headphones, FileText, Target, TrendingUp, Play, Pause, Hash, Calendar } from "lucide-react";

export const HorizontalCallAnalytics = () => {
  const [waveData, setWaveData] = useState<number[]>(Array(30).fill(0));
  const [qualityRating, setQualityRating] = useState(0);
  const [callStatus, setCallStatus] = useState("connecting");
  const [agentStatus, setAgentStatus] = useState({
    name: "Alex Johnson",
    status: "on-call",
    callDuration: "02:45"
  });
  const [isPlaying, setIsPlaying] = useState(true);

  // Generate wave animation data
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setWaveData(prev => {
        const newData = [...prev];
        // Shift data to the left
        for (let i = 0; i < newData.length - 1; i++) {
          newData[i] = newData[i + 1];
        }
        // Add new random value at the end with variation based on call status
        const variation = callStatus === "connecting" ? 30 : 
                         callStatus === "ringing" ? 60 : 80;
        newData[newData.length - 1] = Math.random() * variation;
        return newData;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying, callStatus]);

  // Simulate quality rating improvement
  useEffect(() => {
    const timer = setTimeout(() => {
      if (qualityRating < 95) {
        setQualityRating(prev => prev + 1);
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [qualityRating]);

  // Simulate call status changes
  useEffect(() => {
    const statuses = ["connecting", "ringing", "on-call", "on-call", "on-call"];
    let index = 0;
    
    const timer = setInterval(() => {
      index = (index + 1) % statuses.length;
      setCallStatus(statuses[index]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Toggle play/pause for waveform
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-lg w-full">
      <div className="flex flex-col gap-4">
        {/* Header with CallMonAI Dashboard title */}
        <div className="flex justify-between items-center">
          <div className="flex-1"></div> {/* Empty flex space */}
          <h3 className="text-xl font-bold text-foreground mx-4">
            <span className="text-custom-blue">
              CallMonAI Dashboard
            </span>
          </h3>
          <div className="flex items-center gap-2 flex-1 justify-end">
            <div className={`w-3 h-3 rounded-full ${
              callStatus === "connecting" ? "bg-yellow-500 animate-pulse" :
              callStatus === "ringing" ? "bg-blue-500 animate-pulse" :
              "bg-green-500"
            }`}></div>
            <span className="text-sm font-medium capitalize text-muted-foreground">{callStatus.replace("-", " ")}</span>
          </div>
        </div>

        {/* Call - Agent - Status line with animations */}
        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3 animate-pulse">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-medium">Call in progress</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-accent" />
            <span className="font-medium">{agentStatus.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="font-medium">Status updated</span>
          </div>
        </div>

        {/* Additional Elements: Call Recording, Transcript, Lead Info */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/10 flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground">Recording</div>
              <div className="text-sm font-medium">Active</div>
            </div>
          </div>
          <div className="bg-accent/5 rounded-lg p-3 border border-accent/10 flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground">Transcript</div>
              <div className="text-sm font-medium">Generating</div>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-100 flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600 flex-shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground">Lead Status</div>
              <div className="text-sm font-medium">Qualified</div>
            </div>
          </div>
        </div>

        {/* Enhanced Wave Visualization with More Animations */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-foreground flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-primary" />
              Audio Waveform
            </h4>
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlayPause}
                className="text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-full px-2 py-1 transition-colors"
                aria-label={isPlaying ? "Pause waveform" : "Play waveform"}
              >
                {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </button>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                {isPlaying ? 'Live' : 'Paused'}
              </div>
            </div>
          </div>
          <div className="h-20 bg-muted rounded-lg p-3 relative overflow-hidden border border-border">
            {/* Background grid pattern for dashboard feel */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-full w-px bg-primary"
                  style={{ left: `${(i * 100) / 20}%` }}
                ></div>
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-full h-px bg-primary"
                  style={{ top: `${(i * 100) / 10}%` }}
                ></div>
              ))}
            </div>
            
            {/* Animated waveform */}
            <svg viewBox={`0 0 ${waveData.length * 15} 100`} className="w-full h-full">
              {/* Primary waveform */}
              <path
                d={`M 0,50 ${waveData.map((value, index) => `L ${index * 15},${50 - value / 3}`).join(' ')}`}
                stroke="hsl(210, 95%, 45%)"
                strokeWidth="2"
                fill="none"
                className="drop-shadow-sm"
              />
              {/* Secondary waveform with offset */}
              <path
                d={`M 0,50 ${waveData.map((value, index) => `L ${index * 15},${50 + value / 3}`).join(' ')}`}
                stroke="hsl(210, 80%, 50%)"
                strokeWidth="2"
                fill="none"
                className="drop-shadow-sm"
              />
              {/* Center line */}
              <line 
                x1="0" 
                y1="50" 
                x2={waveData.length * 15} 
                y2="50" 
                stroke="hsl(210, 95%, 45%)" 
                strokeWidth="0.5" 
                strokeDasharray="4,4"
                className="opacity-30"
              />
            </svg>
            
            {/* Animated particles for enhanced effect */}
            {isPlaying && (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-ping"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "1.5s"
                    }}
                  ></div>
                ))}
              </>
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
            
            {/* Call status indicator on waveform */}
            <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
              callStatus === "connecting" ? "bg-yellow-100 text-yellow-800" :
              callStatus === "ringing" ? "bg-blue-100 text-blue-800" :
              "bg-green-100 text-green-800"
            }`}>
              {callStatus.replace("-", " ")}
            </div>
          </div>
          
          {/* Audio metrics inspired by dashboard */}
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mic className="h-3 w-3" />
              <span>Input: 85%</span>
            </div>
            <div className="flex items-center gap-1">
              <Volume2 className="h-3 w-3" />
              <span>Output: 78%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              <span>Stability: Good</span>
            </div>
          </div>
        </div>

        {/* Quality Rating */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-foreground flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              Call Quality
            </h4>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm">{qualityRating}%</span>
            </div>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${qualityRating}%` }}
            ></div>
          </div>
        </div>

        {/* Reordered Elements: Sentiment, Next Action, Keywords */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 text-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Sentiment</div>
            <div className="text-sm font-medium">Positive</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 text-center">
            <Calendar className="h-5 w-5 text-amber-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Next Action</div>
            <div className="text-sm font-medium">Follow-up</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100 text-center">
            <Hash className="h-5 w-5 text-purple-600 mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Keywords</div>
            <div className="text-sm font-medium">5 detected</div>
          </div>
        </div>
      </div>
    </div>
  );
};