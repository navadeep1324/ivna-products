import { Card } from "@/components/ui/card";
import { Phone, Volume2, Mic, TrendingUp, BarChart3, PieChart, CheckCircle, DollarSign, Network, Clock } from "lucide-react";

export const CallAnalytics = () => {
  return (
    <section id="analytics" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Call{" "}
            <span className="text-custom-blue">
              Analytics & Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep insights from call data to optimize business communications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Call Quality Analysis */}
          <Card className="p-6 border-border bg-card hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Mic className="h-5 w-5" style={{ color: '#36c0ed' }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Call Quality Metrics</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Clear Audio</span>
                <span className="text-sm font-medium">96%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Connection Stability</span>
                <span className="text-sm font-medium">99%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                <span className="text-sm font-medium">94%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Automated quality scoring based on technical and user metrics
              </p>
            </div>
          </Card>
          
          {/* Business Insights */}
          <Card className="p-6 border-border bg-card hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5" style={{ color: '#36c0ed' }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Business Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Cost Optimization</h4>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-1">
                      <Network className="h-3 w-3 text-primary" />
                      International calls reduced by 65%
                    </li>
                    <li className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-primary" />
                      Infrastructure costs cut by 40%
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Maintenance expenses down 70%
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PieChart className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Communication Patterns</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-primary" />
                        <span className="text-xs text-muted-foreground">Peak Usage Hours</span>
                      </div>
                      <span className="text-xs font-medium">9AM-5PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-primary" />
                        <span className="text-xs text-muted-foreground">Average Call Duration</span>
                      </div>
                      <span className="text-xs font-medium">4.2 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-xs text-muted-foreground">Monthly Growth</span>
                      </div>
                      <span className="text-xs font-medium">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* System Performance */}
          <Card className="p-6 border-border bg-card hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Phone className="h-5 w-5" style={{ color: '#36c0ed' }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">System Performance</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-foreground">Active Lines</span>
                </div>
                <span className="text-sm font-medium">48</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-foreground">Available Lines</span>
                </div>
                <span className="text-sm font-medium">12</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-foreground">Maintenance</span>
                </div>
                <span className="text-sm font-medium">0</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  <span className="text-sm text-foreground">Downtime ({"<"}1%)</span>
                </div>
                <span className="text-sm font-medium">2h</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">System Efficiency</span>
                <span className="text-sm font-bold text-custom-blue">98%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};