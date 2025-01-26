"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    // Create diagonal lines that go from top-left to bottom-right
    const paths = Array.from({ length: 30 }, (_, i) => {
      const offset = i * 60 - 2000; // Increased spacing between lines
      return `M${offset} -2000 L${offset + 3000} 2000`;
    });

    return (
      <div
        className={cn(
          "fixed inset-0 z-0 w-full bg-black/90",
          "min-h-screen h-full",
          className
        )}
      >
        <svg
          className="absolute w-full h-full"
          viewBox="-2000 -2000 4000 4000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          style={{ minHeight: '100vh' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: index * 0.2,
              }}
            />
          ))}

          <defs>
            {paths.map((_, index) => (
              <linearGradient
                key={`gradient-${index}`}
                id={`linearGradient-${index}`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#18CCFC" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#18CCFC" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#18CCFC" stopOpacity="0.3" />
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Very subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.01] h-full"
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            minHeight: '100vh'
          }}
        />
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
