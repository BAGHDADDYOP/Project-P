import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-black/50 p-8 transition-all duration-500 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-white/20 to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-sm"></div>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
          <div className="text-white group-hover:text-gray-100 transition-colors duration-500">{icon}</div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-all duration-500">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
