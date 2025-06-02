"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Shield, DollarSign, Clock, CheckCircle, X, TrendingUp, Award } from "lucide-react"

export default function CompetitiveAdvantage() {
  const competitorComparison = [
    {
      feature: "Government-Grade Security",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: false,
      databricks: false,
    },
    {
      feature: "Ontology-Based Data Model",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: false,
      databricks: false,
    },
    {
      feature: "Air-Gap Deployment",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: false,
      databricks: false,
    },
    {
      feature: "Intelligence Analytics",
      symbiote: true,
      palantir: true,
      tableau: true,
      snowflake: false,
      databricks: true,
    },
    {
      feature: "Pattern Recognition",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: false,
      databricks: true,
    },
    {
      feature: "Secure Collaboration",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: false,
      databricks: false,
    },
    {
      feature: "Deployment Flexibility",
      symbiote: true,
      palantir: true,
      tableau: false,
      snowflake: true,
      databricks: true,
    },
  ]

  const advantages = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Government-Grade Security",
      description: "Secure enough for the most sensitive intelligence operations with air-gap deployment options",
      metric: "Top Secret",
      comparison: "security clearance ready",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ontology-Based Data Model",
      description: "Connect and analyze disparate data sources with our proprietary data model",
      metric: "100+ sources",
      comparison: "seamlessly integrated",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Lower Total Cost",
      description: "Significant cost savings through efficient architecture and deployment options",
      metric: "40% savings",
      comparison: "vs legacy solutions",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapid Deployment",
      description: "Deploy in weeks, not months, with our containerized architecture",
      metric: "< 4 weeks",
      comparison: "vs 6+ months typical",
    },
  ]

  const marketPosition = [
    {
      category: "Government Intelligence",
      score: 95,
      leader: "Symbiote",
      description: "Leading platform for intelligence agencies",
    },
    {
      category: "Security",
      score: 98,
      leader: "Symbiote",
      description: "Most comprehensive security implementation",
    },
    {
      category: "Data Integration",
      score: 92,
      leader: "Symbiote",
      description: "Superior ontology-based data model",
    },
    {
      category: "Deployment Options",
      score: 89,
      leader: "Symbiote",
      description: "Flexible deployment for all environments",
    },
    {
      category: "Analytics",
      score: 87,
      leader: "Symbiote",
      description: "Advanced pattern recognition and analysis",
    },
  ]

  return (
    <Tabs defaultValue="advantages" className="w-full">
      <TabsList className="bg-black border border-gray-800 mb-6">
        <TabsTrigger value="advantages" className="data-[state=active]:bg-white data-[state=active]:text-black">
          Key Advantages
        </TabsTrigger>
        <TabsTrigger value="comparison" className="data-[state=active]:bg-white data-[state=active]:text-black">
          Competitor Analysis
        </TabsTrigger>
        <TabsTrigger value="position" className="data-[state=active]:bg-white data-[state=active]:text-black">
          Market Position
        </TabsTrigger>
      </TabsList>

      <TabsContent value="advantages" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map((advantage, i) => (
            <Card key={i} className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                    {advantage.icon}
                  </div>
                  {advantage.title}
                </CardTitle>
                <CardDescription>{advantage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{advantage.metric}</div>
                    <div className="text-sm text-gray-400">{advantage.comparison}</div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Leader
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="comparison" className="mt-0">
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle>Feature Comparison</CardTitle>
            <CardDescription>How Symbiote compares to major competitors across key features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-3 font-medium">Feature</th>
                    <th className="text-center p-3 font-medium">Symbiote</th>
                    <th className="text-center p-3 font-medium">Palantir</th>
                    <th className="text-center p-3 font-medium">Tableau</th>
                    <th className="text-center p-3 font-medium">Snowflake</th>
                    <th className="text-center p-3 font-medium">Databricks</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-800/50">
                      <td className="p-3 font-medium">{row.feature}</td>
                      <td className="text-center p-3">
                        {row.symbiote ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-3">
                        {row.palantir ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-3">
                        {row.tableau ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-3">
                        {row.snowflake ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-3">
                        {row.databricks ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="position" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Market Leadership
              </CardTitle>
              <CardDescription>Symbiote leads across all key categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketPosition.map((category, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.category}</span>
                      <span className="text-sm text-gray-400">{category.score}/100</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-1000"
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle>Industry Recognition</CardTitle>
              <CardDescription>Analyst recognition and awards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">Gartner Magic Quadrant</span>
                  </div>
                  <p className="text-sm text-gray-400">Leader in Data & Analytics Platforms</p>
                  <Badge variant="outline" className="mt-2 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    2024 Leader
                  </Badge>
                </div>

                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">Forrester Wave</span>
                  </div>
                  <p className="text-sm text-gray-400">Leader in Intelligence Analytics</p>
                  <Badge variant="outline" className="mt-2 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Strong Performer
                  </Badge>
                </div>

                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">IDC MarketScape</span>
                  </div>
                  <p className="text-sm text-gray-400">Major Player in Intelligence Platforms</p>
                  <Badge variant="outline" className="mt-2 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Major Player
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
