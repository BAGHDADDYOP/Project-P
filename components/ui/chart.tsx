import * as React from "react"

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className="relative" ref={ref} {...props} />,
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className="absolute z-10 rounded-md border bg-popover p-4 text-popover-foreground shadow-sm outline-none"
      ref={ref}
      {...props}
    />
  ),
)
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p className="text-sm" ref={ref} {...props} />,
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className="flex items-center justify-center" ref={ref} {...props} />,
)
ChartLegend.displayName = "ChartLegend"

const ChartLegendContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className="flex items-center gap-2 text-sm" ref={ref} {...props} />,
)
ChartLegendContent.displayName = "ChartLegendContent"

const ChartStyle = React.forwardRef<HTMLStyleElement, React.HTMLAttributes<HTMLStyleElement>>(
  ({ className, ...props }, ref) => <style ref={ref} {...props} />,
)
ChartStyle.displayName = "ChartStyle"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} />
))
Chart.displayName = "Chart"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle }
