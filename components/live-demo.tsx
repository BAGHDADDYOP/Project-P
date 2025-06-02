"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock, Activity, Search, Filter, Download, RefreshCw } from "lucide-react"

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState("intelligence")
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [threatCount, setThreatCount] = useState(42)
  const [alertsCount, setAlertsCount] = useState(7)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate data refresh
  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      // Randomly update threat count
      setThreatCount(Math.floor(Math.random() * 10) + 38)
      setAlertsCount(Math.floor(Math.random() * 5) + 5)
    }, 1500)
  }

  // Network activity visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Generate random data points
    const dataPoints = 100
    const data: number[] = Array(dataPoints)
      .fill(0)
      .map(() => Math.random() * 50 + 10)

    // Animation variables
    let animationFrame: number
    let currentPoint = 0

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1

      // Vertical grid lines
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      // Horizontal grid lines
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Draw activity line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()

      const pointWidth = canvas.width / (dataPoints - 1)

      for (let i = 0; i < dataPoints; i++) {
        const x = i * pointWidth
        const y = canvas.height - (data[i] / 60) * canvas.height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw activity points
      for (let i = 0; i < dataPoints; i++) {
        const x = i * pointWidth
        const y = canvas.height - (data[i] / 60) * canvas.height

        // Highlight current point
        if (i === currentPoint) {
          ctx.fillStyle = "rgba(255, 255, 255, 1)"
          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()

          // Draw vertical line
          ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()

          // Draw value
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.font = "10px sans-serif"
          ctx.textAlign = "center"
          ctx.fillText(data[i].toFixed(1), x, y - 10)
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Move current point
      currentPoint = (currentPoint + 1) % dataPoints

      // Update data with slight variations
      data.push(Math.max(10, Math.min(60, data[data.length - 1] + (Math.random() - 0.5) * 5)))
      data.shift()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-black">
      <div className="flex items-center justify-between border-b border-gray-800 p-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
          <span className="text-sm font-medium">Live Intelligence Feed</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="h-3 w-3" />
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-gray-800 bg-black text-white hover:bg-white/5"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`h-3 w-3 mr-1 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 border-b border-gray-800">
        <div className="p-4 border-r border-gray-800 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">{threatCount}</div>
          <div className="text-xs text-gray-400">Active Threats</div>
        </div>
        <div className="p-4 border-r border-gray-800 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">{alertsCount}</div>
          <div className="text-xs text-gray-400">Critical Alerts</div>
        </div>
        <div className="p-4 border-r border-gray-800 flex flex-col items-center justify-center md:col-span-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-white/5 text-white">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              System Operational
            </Badge>
            <Badge variant="outline" className="bg-white/5 text-white">
              <Activity className="h-3 w-3 mr-1" />
              High Activity
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-1 border-r border-gray-800">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Threat Categories</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Filter className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="p-2">
            {[
              { name: "Foreign Intelligence", count: 15, critical: true },
              { name: "Cyber Attacks", count: 12, critical: true },
              { name: "Insider Threats", count: 8, critical: false },
              { name: "Data Exfiltration", count: 7, critical: true },
              { name: "Policy Violation", count: 15, critical: false },
            ].map((category, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 cursor-pointer">
                <div className="flex items-center gap-2">
                  {category.critical && <AlertTriangle className="h-3 w-3 text-red-500" />}
                  <span className="text-xs">{category.name}</span>
                </div>
                <Badge variant="outline" className="text-xs bg-white/5">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <Tabs defaultValue="intelligence" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <TabsList className="bg-black border border-gray-800">
                <TabsTrigger
                  value="intelligence"
                  className="data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Intelligence
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-white data-[state=active]:text-black">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-black">
                  Analytics
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-8 w-40 rounded-md border border-gray-800 bg-black pl-7 pr-2 text-xs focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-gray-800 bg-black text-white hover:bg-white/5"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Export
                </Button>
              </div>
            </div>

            <TabsContent value="intelligence" className="m-0">
              <div className="p-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="bg-black border-gray-800">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Intelligence Alert</span>
                          </div>
                          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                            High
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-400 mb-2">
                          {i === 1
                            ? "Unusual data access pattern detected from user ID 45892"
                            : i === 2
                              ? "Potential data exfiltration attempt blocked"
                              : i === 3
                                ? "Suspicious network traffic from foreign IP range"
                                : "Multiple failed authentication attempts detected"}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString()}
                          </span>
                          <Button variant="ghost" size="sm" className="h-6 text-xs hover:bg-white/5">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="m-0">
              <div className="p-4">
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-800">
                    <h3 className="text-sm font-medium">Network Activity</h3>
                  </div>
                  <div className="p-4 h-64">
                    <canvas ref={canvasRef} className="w-full h-full"></canvas>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="m-0">
              <div className="p-4">
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-800">
                    <h3 className="text-sm font-medium">Intelligence Analytics</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { label: "Threats Mitigated", value: "1,458", change: "+12%" },
                        { label: "Avg. Response Time", value: "1.2s", change: "-8%" },
                        { label: "Security Score", value: "94/100", change: "+2%" },
                      ].map((stat, i) => (
                        <div key={i} className="border border-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                          <div className="text-2xl font-bold mb-1">{stat.value}</div>
                          <div className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                            {stat.change} from last week
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
