"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap, Brain, Globe, Shield } from "lucide-react"

export default function RoadmapTimeline() {
  const roadmapItems = [
    {
      quarter: "Q3 2024",
      status: "completed",
      title: "Advanced AI Integration",
      description: "Natural language querying and automated intelligence analysis",
      features: ["GPT-4 integration", "Automated report generation", "Pattern recognition enhancements"],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      quarter: "Q4 2024",
      status: "in-progress",
      title: "Symbiote Gotham 5.0",
      description: "Next-generation intelligence platform for government agencies",
      features: ["Enhanced threat detection", "Real-time collaboration", "Advanced visualization"],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      quarter: "Q1 2025",
      status: "planned",
      title: "Symbiote Foundry Expansion",
      description: "New industry-specific solutions for enterprise clients",
      features: ["Healthcare analytics", "Financial fraud detection", "Supply chain optimization"],
      icon: <Zap className="h-5 w-5" />,
    },
    {
      quarter: "Q2 2025",
      status: "planned",
      title: "Global Deployment Options",
      description: "Expanded deployment options for international clients",
      features: ["EU data sovereignty", "APAC expansion", "Local compliance frameworks"],
      icon: <Globe className="h-5 w-5" />,
    },
  ]

  const investmentAreas = [
    {
      area: "R&D Investment",
      allocation: "40%",
      focus: "AI/ML capabilities and pattern recognition",
    },
    {
      area: "Government Solutions",
      allocation: "30%",
      focus: "Intelligence and defense applications",
    },
    {
      area: "Enterprise Expansion",
      allocation: "20%",
      focus: "Commercial market growth and industry solutions",
    },
    {
      area: "Security Enhancement",
      allocation: "10%",
      focus: "Zero-trust architecture and compliance",
    },
  ]

  const milestones = [
    {
      milestone: "Series C Funding",
      target: "Q4 2024",
      amount: "$200M",
      status: "in-progress",
    },
    {
      milestone: "300+ Enterprise Customers",
      target: "Q2 2025",
      amount: "300+",
      status: "planned",
    },
    {
      milestone: "IPO Readiness",
      target: "Q4 2025",
      amount: "$500M+ ARR",
      status: "planned",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "in-progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "planned":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "planned":
        return <Clock className="h-4 w-4 text-gray-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle>Product Roadmap</CardTitle>
              <CardDescription>Strategic development timeline for the next 18 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roadmapItems.map((item, i) => (
                  <div key={i} className="relative">
                    {i !== roadmapItems.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-800"></div>
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{item.title}</h3>
                          <Badge variant="outline" className={getStatusColor(item.status)}>
                            {getStatusIcon(item.status)}
                            <span className="ml-1 capitalize">{item.status.replace("-", " ")}</span>
                          </Badge>
                          <span className="text-sm text-gray-400">{item.quarter}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {item.features.map((feature, j) => (
                            <Badge key={j} variant="outline" className="text-xs bg-white/5 text-white">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle>Investment Allocation</CardTitle>
              <CardDescription>Strategic resource allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investmentAreas.map((area, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{area.area}</span>
                      <span className="text-sm text-gray-400">{area.allocation}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-1000"
                        style={{ width: area.allocation }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400">{area.focus}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle>Key Milestones</CardTitle>
              <CardDescription>Strategic business milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, i) => (
                  <div key={i} className="border border-gray-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{milestone.milestone}</span>
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{milestone.target}</span>
                      <span className="text-sm font-medium">{milestone.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
