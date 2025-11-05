import { Card } from "@/components/ui/card";
import { Users, Phone, TrendingUp, Target, CheckCircle, Clock, BarChart3, Signal } from "lucide-react";

export const LeadManagement = () => {
  const leadMetrics = [
    {
      icon: Users,
      title: "Businesses Served",
      value: "1,248",
      change: "+12% from last month"
    },
    {
      icon: Phone,
      title: "Call Success Rate",
      value: "98%",
      change: "+2% from last month"
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      value: "40%",
      change: "+5% from last month"
    },
    {
      icon: Target,
      title: "Customer Satisfaction",
      value: "95%",
      change: "+3% from last month"
    }
  ];

  return (
    // Hidden as per requirements - Intelligent Business Solutions section
    <div className="hidden">
    <section id="lead-management" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Intelligent{" "}
            <span className="text-custom-blue">
              Business Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Capture, analyze, and optimize your business communications with our advanced tracking system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Business Metrics */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {leadMetrics.map((metric, index) => (
                <Card key={index} className="p-5 border-border bg-card hover:shadow-md transition-all hover:border-primary/30">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3">
                    <metric.icon className="h-5 w-5" style={{ color: '#36c0ed' }} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <h3 className="font-semibold text-foreground mb-1">{metric.title}</h3>
                  <p className="text-xs text-muted-foreground">{metric.change}</p>
                </Card>
              ))}
            </div>
            
            <Card className="p-5 border-border bg-card hover:shadow-md transition-all">
              <h3 className="font-semibold text-foreground mb-3">Communication Quality Assessment</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Signal className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">High Quality Calls</span>
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Signal className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Medium Quality</span>
                  </div>
                  <span className="text-sm font-medium">6%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full" style={{ width: '6%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Signal className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-muted-foreground">Low Quality</span>
                  </div>
                  <span className="text-sm font-medium">2%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Business Dashboard Visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                <div className="bg-background rounded-xl shadow-lg border border-border">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">VoicaAI Business Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Call Status */}
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <Phone className="h-4 w-4" style={{ color: '#36c0ed' }} />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Active Call</div>
                          <div className="text-xs text-muted-foreground">Duration: 03:45</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs rounded-full">Excellent Quality</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    
                    {/* System Status */}
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <Users className="h-4 w-4" style={{ color: '#36c0ed' }} />
                        </div>
                        <div>
                          <div className="font-medium text-sm">System Status</div>
                          <div className="text-xs text-muted-foreground">All services operational</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs rounded-full">Operational</span>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    
                    {/* Performance Metric */}
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <TrendingUp className="h-4 w-4" style={{ color: '#36c0ed' }} />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Monthly Savings</div>
                          <div className="text-xs text-muted-foreground">Compared to traditional systems</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">38%</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="pt-2 border-t border-border">
                      <h4 className="font-medium text-foreground text-sm mb-2">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="text-xs">
                            <span className="text-foreground">New client</span> 
                            <span className="text-muted-foreground"> connected from New York</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="text-xs">
                            <span className="text-foreground">System update</span> 
                            <span className="text-muted-foreground"> completed successfully</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};