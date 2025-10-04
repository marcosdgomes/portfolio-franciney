"use client"

import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'
import { memo } from 'react'

export const GlobalBackground = memo(function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background with theme colors */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#000000]"></div>
      
      {/* Interactive GridPattern Background */}
      <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-30 dark:opacity-60",
            "animate-pulse"
          )}
          squares={[40, 25]}
          width={60}
          height={60}
        />
      </div>
    </div>
  )
})
