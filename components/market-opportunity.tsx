"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/ui/chart"
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

export default function MarketOpportunity() {
  const marketSizeData = [
    { year: 2022, value: 15 },
    { year: 2023, value: 20 },
    { year: 2024, value: 27 },
    { year: 2025, value: 35 },
    { year: 2026, value: 42 },
    { year: 2027, value: 47 },
    { year: 2028, value: 50 },
  ]

  const marketSegmentData = [
    { name: "Government", value: 45 },
    { name: "Financial Services", value: 20 },
    { name: "Healthcare", value: 15 },
    { name: "Energy", value: 12 },
    { name: "Other", value: 8 },
  ]

  const growthRateData = [
    { segment: "Intelligence", growth: 32 },
    { segment: "Data Integration", growth: 28 },
    { segment: "Analytics", growth: 35 },
    { segment: "Security", growth: 42 },
    { segment: "Industry Average", growth: 18 },
  ]

  const COLORS = ["#ffffff", "#cccccc", "#999999", "#666666", "#333333"]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full md:col-span-2 bg-black border-gray-800">
        <CardHeader>
          <CardTitle>Market Size Projection</CardTitle>
          <CardDescription>Global Intelligence Platform Market (in $B)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketSizeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="year" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
                    labelStyle={{ color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                    formatter={(value) => [`$${value}B`, "Market Size"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2, fill: "#000" }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Chart>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-gray-800">
        <CardHeader>
          <CardTitle>Market Segments</CardTitle>
          <CardDescription>By Industry Vertical</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketSegmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {marketSegmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
                    formatter={(value) => [`${value}%`, "Market Share"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-1 lg:col-span-2 bg-black border-gray-800">
        <CardHeader>
          <CardTitle>Growth Rate by Segment</CardTitle>
          <CardDescription>Annual Growth Rate (%)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthRateData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                  <XAxis type="number" stroke="#666" />
                  <YAxis dataKey="segment" type="category" stroke="#666" width={100} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
                    formatter={(value) => [`${value}%`, "Growth Rate"]}
                  />
                  <Bar dataKey="growth" fill="#fff">
                    {growthRateData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.segment === "Industry Average" ? "#666" : "#fff"}
                        fillOpacity={entry.segment === "Industry Average" ? 0.5 : 0.8}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
