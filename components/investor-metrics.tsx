"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react"

export default function InvestorMetrics() {
  const revenueData = [
    { quarter: "Q1 2023", revenue: 12.4, growth: 32 },
    { quarter: "Q2 2023", revenue: 15.7, growth: 26 },
    { quarter: "Q3 2023", revenue: 18.2, growth: 16 },
    { quarter: "Q4 2023", revenue: 22.5, growth: 24 },
    { quarter: "Q1 2024", revenue: 28.3, growth: 26 },
    { quarter: "Q2 2024", revenue: 35.1, growth: 24 },
  ]

  const customerData = [
    { quarter: "Q1 2023", government: 42, enterprise: 78, total: 120 },
    { quarter: "Q2 2023", government: 48, enterprise: 96, total: 144 },
    { quarter: "Q3 2023", government: 53, enterprise: 115, total: 168 },
    { quarter: "Q4 2023", government: 61, enterprise: 142, total: 203 },
    { quarter: "Q1 2024", government: 68, enterprise: 163, total: 231 },
    { quarter: "Q2 2024", government: 75, enterprise: 189, total: 264 },
  ]

  const metrics = [
    {
      title: "ARR",
      value: "$140.4M",
      change: "+124% YoY",
      positive: true,
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Gross Margin",
      value: "82%",
      change: "+5% YoY",
      positive: true,
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "Customer Retention",
      value: "97%",
      change: "+2% YoY",
      positive: true,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Govt Contract Growth",
      value: "78%",
      change: "+23% YoY",
      positive: true,
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <Card key={i} className="bg-black border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">{metric.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.positive ? "text-green-500" : "text-red-500"}`}>{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="bg-black border border-gray-800 mb-6">
          <TabsTrigger value="revenue" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Revenue Growth
          </TabsTrigger>
          <TabsTrigger value="customers" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Customer Acquisition
          </TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="mt-0">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Growth</CardTitle>
                  <CardDescription>Quarterly revenue and growth rate</CardDescription>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  +128% YoY
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Chart>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="quarter" stroke="#666" />
                      <YAxis yAxisId="left" stroke="#666" />
                      <YAxis yAxisId="right" orientation="right" stroke="#666" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                      />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue ($M)"
                        stroke="#fff"
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2, fill: "#000" }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="growth"
                        name="Growth (%)"
                        stroke="#888"
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Chart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-0">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Customer Growth by Segment</CardTitle>
                  <CardDescription>Government vs Enterprise clients</CardDescription>
                </div>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  264 Total Clients
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Chart>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="quarter" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="government"
                        name="Government"
                        stroke="#fff"
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2, fill: "#000" }}
                      />
                      <Line type="monotone" dataKey="enterprise" name="Enterprise" stroke="#888" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="total"
                        name="Total"
                        stroke="#666"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Chart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
