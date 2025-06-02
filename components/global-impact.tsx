"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Building, MapPin, TrendingUp, Shield } from "lucide-react"

export default function GlobalImpact() {
  const globalStats = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Presence",
      value: "40+",
      subtitle: "Countries served",
      description: "Supporting critical missions worldwide",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Intelligence Operations",
      value: "10K+",
      subtitle: "Daily operations",
      description: "Powering critical decision-making",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Organizations",
      value: "200+",
      subtitle: "Government & enterprise clients",
      description: "From intelligence agencies to Fortune 500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Analysts Supported",
      value: "50K+",
      subtitle: "Intelligence professionals",
      description: "Making better decisions faster",
    },
  ]

  const regionalData = [
    {
      region: "North America",
      customers: 85,
      growth: "+18%",
      sectors: ["Defense", "Intelligence", "Law Enforcement", "Finance"],
    },
    {
      region: "Europe",
      customers: 62,
      growth: "+25%",
      sectors: ["Intelligence", "Defense", "Finance", "Healthcare"],
    },
    {
      region: "Asia Pacific",
      customers: 38,
      growth: "+42%",
      sectors: ["Defense", "Finance", "Government", "Energy"],
    },
    {
      region: "Middle East",
      customers: 25,
      growth: "+37%",
      sectors: ["Defense", "Intelligence", "Energy", "Finance"],
    },
    {
      region: "Latin America",
      customers: 15,
      growth: "+49%",
      sectors: ["Government", "Law Enforcement", "Finance", "Energy"],
    },
  ]

  const impactMetrics = [
    {
      metric: "Intelligence Reports Generated",
      value: "1.2M+",
      change: "+45% YoY",
    },
    {
      metric: "Threats Identified",
      value: "500K+",
      change: "+67% YoY",
    },
    {
      metric: "Analysis Time Reduction",
      value: "85%",
      change: "vs legacy systems",
    },
    {
      metric: "Decision Support",
      value: "24/7",
      change: "real-time intelligence",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {globalStats.map((stat, i) => (
          <Card key={i} className="bg-black border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">{stat.icon}</div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium">{stat.subtitle}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Regional Distribution
            </CardTitle>
            <CardDescription>Client growth across global regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region, i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{region.region}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        {region.growth}
                      </Badge>
                      <span className="text-sm text-gray-400">{region.customers} clients</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {region.sectors.map((sector, j) => (
                      <Badge key={j} variant="outline" className="text-xs bg-white/5 text-white">
                        {sector}
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
              <TrendingUp className="h-5 w-5" />
              Impact Metrics
            </CardTitle>
            <CardDescription>Measurable impact across our client base</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {impactMetrics.map((metric, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{metric.metric}</div>
                    <div className="text-sm text-gray-400">{metric.change}</div>
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 border border-gray-800 rounded-lg bg-white/5">
              <h4 className="font-medium mb-2">Client Success Story</h4>
              <p className="text-sm text-gray-300 mb-2">
                "Symbiote Gotham helped us reduce our intelligence analysis time from days to minutes, enabling us to
                respond to threats in near real-time."
              </p>
              <div className="text-xs text-gray-400">— Intelligence Director, Federal Agency</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
