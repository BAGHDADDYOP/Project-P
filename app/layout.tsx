import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Symbiote Intelligence Platform",
  description: "Advanced intelligence platform for the world's most critical systems",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <body className="min-h-screen bg-black font-['Helvetica_Neue',Helvetica,Arial,sans-serif] antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
