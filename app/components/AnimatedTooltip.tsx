"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 150, damping: 15 }
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const moveX = useSpring(x, springConfig)
  const moveY = useSpring(y, springConfig)

  return (
    <div className="flex flex-row items-center justify-center gap-4 py-8">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative flex items-center justify-center"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const mouseX = e.clientX - rect.left
              const mouseY = e.clientY - rect.top
              x.set(mouseX - rect.width / 2)
              y.set(mouseY - rect.height / 2)
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <img
                src={item.image || "/placeholder.svg"}
                className="object-cover !m-0 !p-0 h-16 w-16 rounded-full border-2 border-gray-800 group-hover:border-blue-400 transition-colors"
                alt={item.name}
              />
            </motion.div>
          </motion.div>
          <AnimatePresence mode="wait">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: moveX,
                  translateY: moveY,
                }}
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black/80 backdrop-blur-sm px-4 py-2 z-50"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black/80" />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-sm font-bold text-gray-100">{item.name}</p>
                  <p className="text-xs text-blue-400">{item.designation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
