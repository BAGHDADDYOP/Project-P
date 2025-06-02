"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Shield, Cloud, Cpu, Network, Lock, Zap, Globe, Server, HardDrive, Wifi } from "lucide-react"

export default function TechnicalArchitecture() {
  const architectureLayers = [
    {
      name: "Presentation Layer",
      description: "React-based dashboards with real-time updates",
      technologies: ["React", "TypeScript", "WebSocket", "D3.js"],
      color: "bg-white/10",
    },
    {
      name: "API Gateway",
      description: "GraphQL and REST APIs with rate limiting",
      technologies: ["GraphQL", "REST", "OAuth 2.0", "Rate Limiting"],
      color: "bg-white/8",
    },
    {
      name: "Microservices",
      description: "Containerized services with auto-scaling",
      technologies: ["Kubernetes", "Docker", "gRPC", "Service Mesh"],
      color: "bg-white/6",
    },
    {
      name: "Data Processing",
      description: "Stream processing and batch analytics",
      technologies: ["Apache Kafka", "Apache Spark", "Apache Flink", "Redis"],
      color: "bg-white/4",
    },
    {
      name: "Storage Layer",
      description: "Multi-modal data storage and retrieval",
      technologies: ["PostgreSQL", "MongoDB", "ClickHouse", "S3"],
      color: "bg-white/2",
    },
  ]

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Zero Trust Architecture",
      description: "Every request is authenticated and authorized",
      details: ["mTLS encryption", "Identity verification", "Continuous monitoring"],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for data at rest and in transit",
      details: ["Hardware security modules", "Key rotation", "Perfect forward secrecy"],
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Isolation",
      description: "VPC with private subnets and security groups",
      details: ["Network segmentation", "Firewall rules", "DDoS protection"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Governance",
      description: "Comprehensive audit trails and compliance",
      details: ["GDPR compliance", "SOC 2 Type II", "HIPAA ready"],
    },
  ]

  const performanceMetrics = [
    { metric: "Query Response Time", value: "<100ms", description: "99th percentile" },
    { metric: "System Uptime", value: "99.99%", description: "SLA guarantee" },
    { metric: "Data Throughput", value: "1M events/sec", description: "Peak processing" },
    { metric: "Storage Capacity", value: "Petabyte scale", description: "Auto-scaling" },
  ]

  return (
    <Tabs defaultValue="architecture" className="w-full">
      <TabsList className="bg-black border border-gray-800 mb-6">
        <TabsTrigger value="architecture" className="data-[state=active]:bg-white data-[state=active]:text-black">
          System Architecture
        </TabsTrigger>
        <TabsTrigger value="security" className="data-[state=active]:bg-white data-[state=active]:text-black">
          Security Framework
        </TabsTrigger>
        <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-black">
          Performance
        </TabsTrigger>
      </TabsList>

      <TabsContent value="architecture" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                System Layers
              </CardTitle>
              <CardDescription>Modular architecture designed for scale and reliability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {architectureLayers.map((layer, i) => (
                  <div key={i} className={`p-4 rounded-lg border border-gray-800 ${layer.color}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{layer.name}</h3>
                      <Badge variant="outline" className="bg-white/5 text-white">
                        Layer {i + 1}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{layer.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {layer.technologies.map((tech, j) => (
                        <Badge key={j} variant="outline" className="text-xs bg-white/5 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                Infrastructure
              </CardTitle>
              <CardDescription>Cloud-native deployment with global reach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-white/60" />
                    <div className="text-sm font-medium">Global CDN</div>
                    <div className="text-xs text-gray-400">150+ edge locations</div>
                  </div>
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <Cpu className="h-8 w-8 mx-auto mb-2 text-white/60" />
                    <div className="text-sm font-medium">Auto-scaling</div>
                    <div className="text-xs text-gray-400">Dynamic resource allocation</div>
                  </div>
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <HardDrive className="h-8 w-8 mx-auto mb-2 text-white/60" />
                    <div className="text-sm font-medium">Multi-region</div>
                    <div className="text-xs text-gray-400">Active-active deployment</div>
                  </div>
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <Wifi className="h-8 w-8 mx-auto mb-2 text-white/60" />
                    <div className="text-sm font-medium">Real-time</div>
                    <div className="text-xs text-gray-400">Sub-second latency</div>
                  </div>
                </div>

                <div className="border border-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Technology Stack</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Container Orchestration:</span>
                      <span>Kubernetes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service Mesh:</span>
                      <span>Istio</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monitoring:</span>
                      <span>Prometheus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Logging:</span>
                      <span>ELK Stack</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">CI/CD:</span>
                      <span>GitLab</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">IaC:</span>
                      <span>Terraform</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="security" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {securityFeatures.map((feature, i) => (
            <Card key={i} className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="performance" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {performanceMetrics.map((metric, i) => (
            <Card key={i} className="bg-black border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <p className="text-xs text-gray-400">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Performance Benchmarks
            </CardTitle>
            <CardDescription>Industry-leading performance across key metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-gray-800 rounded-lg p-4">
                <h4 className="font-medium mb-2">Data Ingestion</h4>
                <div className="text-2xl font-bold mb-1">1M+</div>
                <div className="text-sm text-gray-400">Events per second</div>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <h4 className="font-medium mb-2">Query Performance</h4>
                <div className="text-2xl font-bold mb-1">{"<50ms"}</div>
                <div className="text-sm text-gray-400">Average response time</div>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <h4 className="font-medium mb-2">Scalability</h4>
                <div className="text-2xl font-bold mb-1">10x</div>
                <div className="text-sm text-gray-400">Auto-scale capacity</div>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
