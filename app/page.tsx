import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Globe,
  Shield,
  Database,
  BarChart3,
  Code,
  Zap,
  LineChart,
  Network,
  Lock,
  Users,
} from "lucide-react"
import VideoBackground from "@/components/video-background"
import SoundManager from "@/components/sound-manager"
import MobileOptimizedHero from "@/components/mobile-optimized-hero"
import FeatureCard from "@/components/feature-card"
import PlatformOverview from "@/components/platform-overview"
import Testimonial from "@/components/testimonial"
import ContactForm from "@/components/contact-form"
import MarketOpportunity from "@/components/market-opportunity"
import LiveDemo from "@/components/live-demo"
import InvestorMetrics from "@/components/investor-metrics"
import TechnicalArchitecture from "@/components/technical-architecture"
import SecurityShowcase from "@/components/security-showcase"
import GlobalImpact from "@/components/global-impact"
import CompetitiveAdvantage from "@/components/competitive-advantage"
import RoadmapTimeline from "@/components/roadmap-timeline"
import ProductShowcase from "@/components/product-showcase"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <VideoBackground />
      <SoundManager />

      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="absolute inset-1 rounded-full bg-white"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">SYMBIOTE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#products"
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
            >
              Products
            </Link>
            <Link
              href="#platform"
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
            >
              Platform
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
            >
              Security
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
            >
              Impact
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-white/20 bg-black/50 px-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Contact
            </Link>
            <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300">Request Demo</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Enhanced Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-3 animate-pulse"></span>
                  <span className="text-white">Advanced Data Analytics & Intelligence</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-white">
                    Transforming Data Into
                    <br />
                    <span className="text-gray-300">Actionable Intelligence</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl leading-relaxed">
                    Powerful platforms that help government agencies and enterprises make sense of complex data for
                    <span className="text-white"> critical decision-making</span>.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 group">
                    Explore Solutions
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link
                    href="#products"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-black/50 px-8 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-black bg-white/10 backdrop-blur-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-white">200+</span>
                    <span className="text-gray-400 ml-1">government and enterprise clients</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <MobileOptimizedHero />
              </div>
            </div>
          </div>

          {/* Enhanced background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </section>

        {/* Enhanced Trusted By Section */}
        <section className="border-t border-white/10 py-16 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-xl font-medium tracking-tight text-gray-300">
                  Trusted by leading organizations worldwide
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {["DEFENSE", "INTELLIGENCE", "LAW ENFORCEMENT", "FINANCE", "HEALTHCARE"].map((logo, i) => (
                  <div key={i} className="flex items-center justify-center group">
                    <div className="h-10 w-40 bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs font-bold tracking-wider text-gray-400 group-hover:text-gray-300 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                      {logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Database className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Product Suite</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Comprehensive Intelligence Solutions
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Our integrated suite of products delivers powerful data analytics for government and enterprise needs
                </p>
              </div>
            </div>
            <ProductShowcase />
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Live Intelligence Demo</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  See Symbiote in Action
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Experience our platform's real-time threat detection and data analysis capabilities
                </p>
              </div>
            </div>
            <LiveDemo />
          </div>
        </section>

        {/* Platform Overview */}
        <section id="platform" className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Database className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Platform Architecture</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Unified Intelligence Platform
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Our core technology integrates disparate data sources to provide actionable insights for critical
                  decision-making
                </p>
              </div>
            </div>
            <div className="mt-16">
              <PlatformOverview />
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-black via-gray-950/50 to-black relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Network className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">System Architecture</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Enterprise-Grade Technical Architecture
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Built for security, scalability, and performance across the most demanding environments
                </p>
              </div>
            </div>
            <TechnicalArchitecture />
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-white/10 py-16 md:py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Shield className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Core Capabilities</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Core Capabilities
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Powerful features designed for the most demanding intelligence and data analysis needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16">
              <FeatureCard
                icon={<Database className="h-12 w-12" />}
                title="Data Integration"
                description="Connect and analyze data from disparate sources, regardless of format or structure, with our advanced ontology-based data model."
              />
              <FeatureCard
                icon={<Shield className="h-12 w-12" />}
                title="Security & Compliance"
                description="Government-grade security with end-to-end encryption, fine-grained access controls, and comprehensive audit logging."
              />
              <FeatureCard
                icon={<BarChart3 className="h-12 w-12" />}
                title="Advanced Analytics"
                description="Powerful analytics engine with pattern recognition, anomaly detection, and predictive capabilities for intelligence applications."
              />
              <FeatureCard
                icon={<Globe className="h-12 w-12" />}
                title="Deployment Flexibility"
                description="Deploy in air-gapped environments, secure government clouds, or on-premises with our flexible deployment options."
              />
            </div>
          </div>
        </section>

        {/* Security Showcase */}
        <section
          id="security"
          className="py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-gray-950/30 via-black to-gray-950/30 relative"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Lock className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Security Framework</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Government-Grade Security
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Our security model protects the most sensitive data for intelligence and defense applications
                </p>
              </div>
            </div>
            <SecurityShowcase />
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <LineChart className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Market Analysis</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Growing Market Opportunity
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  The data intelligence market continues to expand across government and commercial sectors
                </p>
              </div>
            </div>
            <MarketOpportunity />
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-black via-gray-950/30 to-black relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Competitive Edge</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Our Competitive Advantage
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  How Symbiote outperforms legacy solutions and emerging competitors
                </p>
              </div>
            </div>
            <CompetitiveAdvantage />
          </div>
        </section>

        {/* Global Impact */}
        <section id="impact" className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Globe className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Global Impact</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Global Impact & Reach
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Supporting critical missions and operations across government agencies and enterprises worldwide
                </p>
              </div>
            </div>
            <GlobalImpact />
          </div>
        </section>

        {/* Investor Metrics */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-gray-950/30 via-black to-gray-950/30 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <BarChart3 className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Performance Metrics</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Key Business Metrics
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Strong growth, high margins, and exceptional customer retention
                </p>
              </div>
            </div>
            <InvestorMetrics />
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section id="about" className="py-16 md:py-24 border-t border-white/10 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Code className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Product Roadmap</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Strategic Roadmap
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
                  Our vision and execution plan for the next 24 months
                </p>
              </div>
            </div>
            <RoadmapTimeline />
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black via-gray-950/30 to-black relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Users className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">Client Testimonials</span>
              </div>
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  What Our Clients Say
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Testimonial
                quote="Symbiote Gotham has transformed how we process and analyze intelligence data. The platform's security and pattern recognition capabilities are unmatched."
                author="Intelligence Director"
                organization="Federal Agency"
              />
              <Testimonial
                quote="The real-time analytics capabilities have given us unprecedented visibility into our supply chain, helping us make faster and better decisions."
                author="CTO"
                organization="Fortune 500 Company"
              />
              <Testimonial
                quote="We've seen a 300% ROI within the first year of deployment. Symbiote Foundry has become mission-critical to our fraud detection operations."
                author="Chief Data Officer"
                organization="Global Financial Institution"
              />
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-gray-950/30 via-black to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium w-fit backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-3 animate-pulse"></span>
                  <span className="text-white">Request a Consultation</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    Ready to Transform Your Data Operations?
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl leading-relaxed">
                    Schedule a demo to see how Symbiote can help your organization harness the power of data for
                    critical decision-making.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
                    Request Demo
                  </Button>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-black/50 px-8 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 bg-black/90 backdrop-blur-xl py-8 md:py-12 relative">
        <div className="container flex flex-col gap-6 px-4 md:flex-row md:items-center md:gap-8 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-white/10"></div>
              <div className="absolute inset-1 rounded-full bg-white"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">SYMBIOTE</span>
          </div>
          <nav className="flex gap-6 md:gap-8 md:ml-auto">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-all duration-300">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-all duration-300">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-all duration-300">
              Cookies
            </Link>
          </nav>
          <div className="md:ml-auto md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Symbiote Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
