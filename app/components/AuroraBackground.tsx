"use client"
import type React from "react"
import { cn } from "./lib/utils"

export const AuroraBackground = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg pointer-events-none absolute inset-0 opacity-60"></div>
      </div>
      {children}
    </div>
  )
}

