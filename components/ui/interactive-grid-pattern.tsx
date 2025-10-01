"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"

import { cn } from "@/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [magneticSquares, setMagneticSquares] = useState<Map<number, { intensity: number; offsetX: number; offsetY: number }>>(new Map())
  const svgRef = useRef<SVGSVGElement>(null)
  const animationFrameRef = useRef<number>()
  const lastMousePos = useRef({ x: 0, y: 0 })

  // Ultra-optimized magnetic effect calculation
  const calculateMagneticSquares = useCallback((centerX: number, centerY: number) => {
    const magneticRadius = 3 // Reduced from 4 to 3 for better performance (7x7 area)
    const squares = new Map<number, { intensity: number; offsetX: number; offsetY: number }>()
    
    // Pre-calculate radius squared for faster comparison
    const radiusSquared = magneticRadius * magneticRadius
    
    for (let dy = -magneticRadius; dy <= magneticRadius; dy++) {
      for (let dx = -magneticRadius; dx <= magneticRadius; dx++) {
        const x = centerX + dx
        const y = centerY + dy
        
        // Fast bounds check
        if (x >= 0 && x < horizontal && y >= 0 && y < vertical) {
          const distanceSquared = dx * dx + dy * dy
          if (distanceSquared <= radiusSquared && distanceSquared > 0) {
            // Fast distance calculation (avoid sqrt when possible)
            const distance = Math.sqrt(distanceSquared)
            
            // Optimized magnetic force calculation
            const force = 1 / (distanceSquared + 1) // Avoid sqrt in force calculation
            const intensity = Math.min(1, force * 1.5) // Reduced scale for performance
            
            // Calculate magnetic offset (attraction towards center)
            const attractionStrength = intensity * 0.4 // Increased from 0.3 to 0.4 for more visible effect
            const offsetX = (-dx / distance) * attractionStrength
            const offsetY = (-dy / distance) * attractionStrength
            
            const index = y * horizontal + x
            squares.set(index, { intensity, offsetX, offsetY })
          }
        }
      }
    }
    
    return squares
  }, [horizontal, vertical])

  // Ultra-optimized mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!svgRef.current) return

    // Cancel previous frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!svgRef.current) return

      const rect = svgRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // More aggressive throttling for performance
      const deltaX = Math.abs(x - lastMousePos.current.x)
      const deltaY = Math.abs(y - lastMousePos.current.y)
      
      if (deltaX < 3 && deltaY < 3) return // Skip tiny movements

      lastMousePos.current = { x, y }

      // Fast integer division
      const squareX = (x / width) | 0
      const squareY = (y / height) | 0

      // Quick bounds check
      if (squareX >= 0 && squareX < horizontal && squareY >= 0 && squareY < vertical) {
        const magneticSquares = calculateMagneticSquares(squareX, squareY)
        setMagneticSquares(magneticSquares)
      } else {
        setMagneticSquares(new Map())
      }
    })
  }, [width, height, horizontal, vertical, calculateMagneticSquares])

  const handleMouseLeave = useCallback(() => {
    setMagneticSquares(new Map())
  }, [])

  useEffect(() => {
    // Add event listeners to the entire document
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <svg
      ref={svgRef}
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/20 dark:border-gray-500/40",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        const magneticData = magneticSquares.get(index)
        
        if (magneticData) {
          const { intensity, offsetX, offsetY } = magneticData
          
          // Calculate magnetic transformation
          const translateX = offsetX * width
          const translateY = offsetY * height
          const scale = 1 + (intensity * 0.1) // 0-10% scale increase
          const rotation = intensity * 2 // 0-2 degrees rotation
          
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-gray-400/20 dark:stroke-gray-400/30 transition-all duration-400 ease-out",
                intensity > 0 ? "fill-gray-300/40 dark:fill-gray-400/35" : "fill-transparent",
                squaresClassName
              )}
              style={{
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: 'center',
                fillOpacity: intensity * 0.8, // Increased from 0.6 to 0.8
                transitionDelay: intensity > 0 ? '0ms' : '150ms' // Faster exit
              }}
            />
          )
        }
        
        // Default square (no magnetic effect)
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/20 dark:stroke-gray-400/30 transition-all duration-400 ease-out",
              "fill-transparent",
              squaresClassName
            )}
            style={{
              transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
              transformOrigin: 'center',
              transitionDelay: '150ms' // Faster return to normal
            }}
          />
        )
      })}
    </svg>
  )
}
