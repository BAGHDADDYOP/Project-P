"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, FileCheck, CheckCircle } from "lucide-react"

export default function SecurityShowcase() {
  const securityLayers = [
    {
      level: "Application Security",
      features: ["Code signing", "Dependency scanning", "SAST/DAST", "Runtime protection"],
      status: "Active",
      coverage: 100,
    },
    {
      level: "Data Security",
      features: ["AES-256 encryption", "Field-level encryption", "Key management", "Data masking"],
      status: "Active",
      coverage: 100,
    },
    {
      level: "Network Security",
      features: ["Air-gap isolation", "WAF protection", "DDoS mitigation", "Traffic analysis"],
      status: "Active",
      coverage: 100,
    },
    {
      level: "Identity & Access",
      features: ["Multi-factor auth", "RBAC", "SSO integration", "Privileged access"],
      status: "Active",
      coverage: 100,
    },
    {
      level: "Infrastructure Security",
      features: ["Container scanning", "Host hardening", "Patch management", "Compliance"],
      status: "Active",
      coverage: 100,
    },
  ]

  const complianceStandards = [
    { name: "FedRAMP High", status: "Certified", icon: <FileCheck className="h-4 w-4" /> },
    { name: "FISMA", status: "Certified", icon: <FileCheck className="h-4 w-4" /> },
    { name: "NIST 800-53", status: "Compliant", icon: <CheckCircle className="h-4 w-4" /> },
    { name: "HIPAA", status: "Ready", icon: <Shield className="h-4 w-4" /> },
    { name: "SOC 2 Type II", status: "Certified", icon: <FileCheck className="h-4 w-4" /> },
    { name: "ISO 27001", status: "Compliant", icon: <CheckCircle className="h-4 w-4" /> },
  ]

  const threatDetection = [
    { threat: "Advanced Persistent Threats", detected: 247, blocked: 247, rate: 100 },
    { threat: "Data Exfiltration", detected: 156, blocked: 156, rate: 100 },
    { threat: "Insider Threats", detected: 23, blocked: 21, rate: 91.3 },
    { threat: "Zero-day Exploits", detected: 7, blocked: 7, rate: 100 },
    { threat: "Malware", detected: 892, blocked: 889, rate: 99.7 },
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Layers
          </CardTitle>
          <CardDescription>Multi-layered defense architecture for intelligence operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityLayers.map((layer, i) => (
              <div key={i} className="border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{layer.level}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      {layer.status}
                    </Badge>
                    <span className="text-sm text-gray-400">{layer.coverage}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {layer.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-1000"
                    style={{ width: `${layer.coverage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Government Compliance
            </CardTitle>
            <CardDescription>Government-grade certifications and compliance standards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {complianceStandards.map((standard, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    {standard.icon}
                    <span className="text-sm font-medium">{standard.name}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      standard.status === "Certified" || standard.status === "Compliant"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : standard.status === "Ready"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                          : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                    }`}
                  >
                    {standard.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Threat Detection (Last 30 Days)
            </CardTitle>
            <CardDescription>Real-time threat detection and response for intelligence operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {threatDetection.map((threat, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{threat.threat}</div>
                    <div className="text-xs text-gray-400">
                      {threat.blocked}/{threat.detected} blocked
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{threat.rate}%</div>
                    <div className="text-xs text-gray-400">Success rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
