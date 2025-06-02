"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Shield, BarChart3, Globe, Users } from "lucide-react"

export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState("data")

  const tabs = [
    {
      id: "data",
      label: "Data Integration",
      icon: <Database className="h-4 w-4" />,
      content: {
        title: "Ontology-Based Data Model",
        description:
          "Our proprietary data model connects and transforms data from any source, creating a unified knowledge graph for analysis.",
        features: [
          "Connect structured and unstructured data sources",
          "Automatic entity resolution and linking",
          "Dynamic ontology mapping",
          "Semantic data integration",
        ],
      },
    },
    {
      id: "security",
      label: "Security",
      icon: <Shield className="h-4 w-4" />,
      content: {
        title: "Government-Grade Security",
        description:
          "Enterprise-grade security with end-to-end encryption, fine-grained access controls, and comprehensive audit logging.",
        features: [
          "End-to-end encryption for all data",
          "Role-based access control (RBAC)",
          "Detailed audit logs for compliance",
          "Air-gap deployment options",
        ],
      },
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <BarChart3 className="h-4 w-4" />,
      content: {
        title: "Advanced Analytics Engine",
        description:
          "Transform raw data into actionable intelligence with our powerful analytics and visualization capabilities.",
        features: [
          "Pattern recognition and anomaly detection",
          "Predictive analytics with ML models",
          "Natural language processing",
          "Interactive visualization components",
        ],
      },
    },
    {
      id: "deployment",
      label: "Deployment",
      icon: <Globe className="h-4 w-4" />,
      content: {
        title: "Flexible Deployment",
        description:
          "Deploy in secure government clouds, on-premises, or in hybrid environments with our containerized architecture.",
        features: [
          "Air-gapped deployment support",
          "FedRAMP compliant cloud options",
          "On-premises installation",
          "Hybrid deployment models",
        ],
      },
    },
    {
      id: "collaboration",
      label: "Collaboration",
      icon: <Users className="h-4 w-4" />,
      content: {
        title: "Secure Collaboration",
        description:
          "Enable secure collaboration across teams with shared workspaces, notifications, and integrated workflows.",
        features: [
          "Secure shared workspaces",
          "Role-based information sharing",
          "Workflow automation tools",
          "Audit trails for all actions",
        ],
      },
    },
  ]

  return (
    <Tabs defaultValue="data" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-black border border-gray-800">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                <span className="hidden md:inline">{tab.label}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-0">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">{tab.content.title}</h3>
                <p className="max-w-[600px] text-gray-400 md:text-lg">{tab.content.description}</p>
              </div>
              <ul className="grid gap-3">
                {tab.content.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black p-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  {tab.icon && <div className="h-16 w-16 text-white/20">{tab.icon}</div>}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-80"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-lg border border-gray-800 bg-black"></div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
