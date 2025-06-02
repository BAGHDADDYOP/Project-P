"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Database,
  BarChart3,
  Lock,
  Code,
  Zap,
  AlertTriangle,
  Network,
  Truck,
  Building,
  Activity,
} from "lucide-react"

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("gotham")

  return (
    <Tabs defaultValue="gotham" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-black border border-gray-800">
          <TabsTrigger value="gotham" className="data-[state=active]:bg-white data-[state=active]:text-black">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Symbiote Gotham</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="foundry" className="data-[state=active]:bg-white data-[state=active]:text-black">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Symbiote Foundry</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="apollo" className="data-[state=active]:bg-white data-[state=active]:text-black">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Symbiote Apollo</span>
            </div>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="gotham" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Symbiote Gotham</h3>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  Government & Defense
                </Badge>
              </div>
              <p className="max-w-[600px] text-gray-400 md:text-lg">
                Originally designed for government and defense applications, Symbiote Gotham helps analyze large
                datasets for intelligence, counterterrorism, and law enforcement purposes.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Connect disparate data sources for comprehensive analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Identify patterns and threats with advanced AI algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Secure, air-gapped deployment for classified environments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Real-time intelligence analysis and visualization</span>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-80"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span className="font-medium">Threat Detection</span>
                  </div>
                  <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
                    Critical Alert
                  </Badge>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="border border-gray-800 rounded-md p-2 bg-black/50">
                    <div className="text-xs text-gray-400 mb-1">Network Activity</div>
                    <div className="h-20 flex items-end gap-1">
                      {[30, 45, 25, 60, 40, 80, 35, 90, 50, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/20" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gray-800 rounded-md p-2 bg-black/50">
                    <div className="text-xs text-gray-400 mb-1">Threat Map</div>
                    <div className="h-20 relative">
                      <div className="absolute inset-0 opacity-30">
                        <Network className="h-full w-full text-white/20" />
                      </div>
                      <div
                        className="absolute h-2 w-2 bg-red-500 rounded-full animate-ping"
                        style={{ top: "30%", left: "60%" }}
                      ></div>
                      <div
                        className="absolute h-2 w-2 bg-yellow-500 rounded-full"
                        style={{ top: "50%", left: "30%" }}
                      ></div>
                      <div
                        className="absolute h-2 w-2 bg-yellow-500 rounded-full"
                        style={{ top: "70%", left: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-800 pt-3">
                  <div className="text-xs text-gray-400">
                    Used by CIA, FBI, and military organizations for critical intelligence operations
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security Clearance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Top Secret</div>
                  <p className="text-xs text-gray-400">Designed for classified environments</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Data Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">100+</div>
                  <p className="text-xs text-gray-400">Integrated intelligence sources</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="foundry" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Symbiote Foundry</h3>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                  Enterprise
                </Badge>
              </div>
              <p className="max-w-[600px] text-gray-400 md:text-lg">
                Focused on commercial enterprises, Symbiote Foundry helps large organizations integrate and analyze
                their data across different systems for business intelligence.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Supply chain optimization and visibility</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Advanced fraud detection and prevention</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Manufacturing efficiency and quality control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Financial risk management and compliance</span>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-80"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Supply Chain Analytics</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                    Optimized
                  </Badge>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="border border-gray-800 rounded-md p-2 bg-black/50">
                    <div className="text-xs text-gray-400 mb-1">Inventory Levels</div>
                    <div className="h-20 flex items-end gap-1">
                      {[60, 55, 70, 65, 80, 75, 85, 80, 90, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-green-500/30" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gray-800 rounded-md p-2 bg-black/50">
                    <div className="text-xs text-gray-400 mb-1">Delivery Performance</div>
                    <div className="h-20 relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-0.5 bg-gray-800"></div>
                      </div>
                      <div className="absolute inset-0">
                        <svg className="w-full h-full">
                          <path
                            d="M0,50 Q30,20 60,40 T120,30"
                            fill="none"
                            stroke="rgba(74, 222, 128, 0.5)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-800 pt-3">
                  <div className="text-xs text-gray-400">
                    Used by Fortune 500 companies for supply chain optimization and business intelligence
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Efficiency Gain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">35%</div>
                  <p className="text-xs text-gray-400">Average operational improvement</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Fraud Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-gray-400">Improved detection rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="apollo" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Symbiote Apollo</h3>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                  DevOps
                </Badge>
              </div>
              <p className="max-w-[600px] text-gray-400 md:text-lg">
                A software delivery and deployment system that manages and updates Symbiote's platforms across different
                environments with security and reliability.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Continuous deployment for secure environments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Version control and rollback capabilities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Configuration management across deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm text-gray-300">Automated testing and security validation</span>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-80"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-500" />
                    <span className="font-medium">Deployment Pipeline</span>
                  </div>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                    Active
                  </Badge>
                </div>

                <div className="flex-1 border border-gray-800 rounded-md p-2 bg-black/50 font-mono text-xs overflow-hidden">
                  <div className="text-green-400">$ apollo deploy --env=production --secure</div>
                  <div className="text-gray-400 mt-1">Initializing secure deployment pipeline...</div>
                  <div className="text-gray-400">Validating security signatures...</div>
                  <div className="text-gray-400">Running pre-deployment tests...</div>
                  <div className="text-white mt-1">✓ Security validation passed</div>
                  <div className="text-white">✓ Integration tests passed</div>
                  <div className="text-white">✓ Performance benchmarks passed</div>
                  <div className="text-purple-400 mt-1">Deploying to production environment...</div>
                  <div className="text-purple-400">Progress: ████████████████████ 100%</div>
                  <div className="text-green-400 mt-1">Deployment successful! Version 4.2.7 is now live.</div>
                </div>

                <div className="mt-4 border-t border-gray-800 pt-3">
                  <div className="text-xs text-gray-400">
                    Ensures secure, reliable updates across all Symbiote deployments
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Deployment Speed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">90%</div>
                  <p className="text-xs text-gray-400">Faster than manual processes</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Security Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">100%</div>
                  <p className="text-xs text-gray-400">Automated security checks</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
