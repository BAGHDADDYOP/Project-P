"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Activity,
  AlertTriangle,
  Shield,
  Database,
  Network,
  Eye,
  Filter,
  RefreshCw,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react"

export default function AdvancedDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [systemStatus, setSystemStatus] = useState("OPERATIONAL")
  const [threatLevel, setThreatLevel] = useState("ELEVATED")
  const [activeConnections, setActiveConnections] = useState(1247)
  const [dataProcessed, setDataProcessed] = useState(2.4)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setActiveConnections((prev) => prev + Math.floor(Math.random() * 10) - 5)
      setDataProcessed((prev) => Math.max(0, prev + (Math.random() - 0.5) * 0.1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Network visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const nodes: { x: number; y: number; vx: number; vy: number; size: number; type: string }[] = []
    const nodeCount = 30
    const width = canvas.width / (window.devicePixelRatio || 1)
    const height = canvas.height / (window.devicePixelRatio || 1)

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        type: Math.random() > 0.7 ? "threat" : "normal",
      })
    }

    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x
          const dy = nodes[j].y - nodes[i].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / 100)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)

        if (node.type === "threat") {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(time * 5) * 0.2})`
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
        }

        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const systemMetrics = [
    { label: "CPU Usage", value: "23%", status: "normal" },
    { label: "Memory", value: "67%", status: "normal" },
    { label: "Network I/O", value: "1.2 GB/s", status: "high" },
    { label: "Storage", value: "45%", status: "normal" },
  ]

  const threatAlerts = [
    {
      id: 1,
      type: "CRITICAL",
      message: "Unauthorized access attempt detected",
      time: "2 min ago",
      source: "192.168.1.45",
    },
    {
      id: 2,
      type: "HIGH",
      message: "Suspicious data exfiltration pattern",
      time: "5 min ago",
      source: "Internal Network",
    },
    { id: 3, type: "MEDIUM", message: "Failed authentication attempts", time: "12 min ago", source: "External IP" },
    { id: 4, type: "LOW", message: "Unusual network traffic spike", time: "18 min ago", source: "DMZ" },
  ]

  const activeOperations = [
    { id: "OP-001", name: "NIGHTFALL", status: "ACTIVE", progress: 78, agents: 12 },
    { id: "OP-002", name: "BLACKOUT", status: "PENDING", progress: 45, agents: 8 },
    { id: "OP-003", name: "PHANTOM", status: "COMPLETE", progress: 100, agents: 15 },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">SYMBIOTE COMMAND CENTER</h1>
          <p className="text-gray-400 text-sm md:text-base">Real-time intelligence monitoring and analysis</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="text-right">
            <div className="text-lg font-mono">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toLocaleDateString()}</div>
          </div>
          <Badge variant="outline" className="bg-white/5 text-white border-white/20">
            <Activity className="h-3 w-3 mr-1" />
            {systemStatus}
          </Badge>
        </div>
      </div>

      {/* Status Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-black border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Threat Level</p>
                <p className="text-lg font-bold">{threatLevel}</p>
              </div>
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Active Connections</p>
                <p className="text-lg font-bold">{activeConnections.toLocaleString()}</p>
              </div>
              <Network className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Data Processed</p>
                <p className="text-lg font-bold">{dataProcessed.toFixed(1)} TB</p>
              </div>
              <Database className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Security Score</p>
                <p className="text-lg font-bold">94/100</p>
              </div>
              <Shield className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-black border border-white/20 mb-6 flex-wrap h-auto">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Overview
          </TabsTrigger>
          <TabsTrigger value="threats" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Threats
          </TabsTrigger>
          <TabsTrigger value="network" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Network
          </TabsTrigger>
          <TabsTrigger value="operations" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Operations
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* System Metrics */}
            <Card className="bg-black border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  System Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemMetrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono">{metric.value}</span>
                        <div
                          className={`h-2 w-2 rounded-full ${
                            metric.status === "high" ? "bg-white animate-pulse" : "bg-gray-600"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Network Visualization */}
            <Card className="bg-black border-white/20 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Network Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <canvas ref={canvasRef} className="w-full h-full"></canvas>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="threats" className="mt-0">
          <Card className="bg-black border-white/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Threat Alerts
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 bg-black text-white hover:bg-white/10">
                    <Filter className="h-3 w-3 mr-1" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 bg-black text-white hover:bg-white/10">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Refresh
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threatAlerts.map((alert) => (
                  <div key={alert.id} className="border border-white/20 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={`
                          ${
                            alert.type === "CRITICAL"
                              ? "bg-white/20 text-white border-white/40"
                              : alert.type === "HIGH"
                                ? "bg-gray-800/50 text-gray-300 border-gray-600"
                                : alert.type === "MEDIUM"
                                  ? "bg-gray-700/50 text-gray-400 border-gray-500"
                                  : "bg-gray-600/50 text-gray-500 border-gray-400"
                          }
                        `}
                        >
                          {alert.type}
                        </Badge>
                        <span className="text-sm">{alert.message}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        <div>{alert.time}</div>
                        <div>{alert.source}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5" />
                  Network Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bandwidth Usage</span>
                    <span className="text-sm font-mono">1.2 GB/s</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: "67%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Packet Loss</span>
                    <span className="text-sm font-mono">0.02%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-600 rounded-full" style={{ width: "2%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Latency</span>
                    <span className="text-sm font-mono">12ms</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Storage Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Primary Storage", "Backup Storage", "Archive Storage"].map((storage, i) => (
                    <div key={i} className="border border-white/10 rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">{storage}</span>
                        <span className="text-xs text-gray-400">{85 - i * 20}% used</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full" style={{ width: `${85 - i * 20}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="mt-0">
          <Card className="bg-black border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Active Operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeOperations.map((op) => (
                  <div key={op.id} className="border border-white/20 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm text-gray-400">{op.id}</span>
                          <span className="font-bold">{op.name}</span>
                          <Badge
                            variant="outline"
                            className={`
                            ${
                              op.status === "ACTIVE"
                                ? "bg-white/20 text-white border-white/40"
                                : op.status === "PENDING"
                                  ? "bg-gray-700/50 text-gray-400 border-gray-500"
                                  : "bg-gray-600/50 text-gray-500 border-gray-400"
                            }
                          `}
                          >
                            {op.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-400">{op.agents} agents deployed</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{op.progress}%</div>
                        <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white rounded-full transition-all duration-500"
                            style={{ width: `${op.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data Ingestion Rate", value: "2.4 TB/hr", change: "+12%" },
              { title: "Pattern Matches", value: "1,247", change: "+8%" },
              { title: "Anomalies Detected", value: "23", change: "-15%" },
              { title: "Processing Efficiency", value: "94.7%", change: "+2%" },
              { title: "Query Response Time", value: "0.23s", change: "-5%" },
              { title: "System Uptime", value: "99.98%", change: "0%" },
            ].map((metric, i) => (
              <Card key={i} className="bg-black border-white/20">
                <CardContent className="p-4">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{metric.title}</div>
                  <div className="text-xl font-bold mb-1">{metric.value}</div>
                  <div
                    className={`text-xs ${
                      metric.change.startsWith("+")
                        ? "text-white"
                        : metric.change.startsWith("-")
                          ? "text-gray-400"
                          : "text-gray-500"
                    }`}
                  >
                    {metric.change} from last hour
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
