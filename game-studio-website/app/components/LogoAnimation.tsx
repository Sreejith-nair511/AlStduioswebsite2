"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

const LogoAnimation = () => {
  const logoRef = useRef<SVGSVGElement>(null)
  const particlesRef = useRef<SVGGElement>(null)

  useEffect(() => {
    if (logoRef.current && particlesRef.current) {
      const particles = particlesRef.current.children
      gsap.set(particles, { scale: 0, opacity: 0 })

      gsap.to(particles, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
        onComplete: () => {
          gsap.to(particles, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            stagger: 0.01,
          })
        },
      })

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)" },
      )
    }
  }, [])

  return (
    <motion.div
      className="w-24 h-24 relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <svg ref={logoRef} viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="#3b82f6" />
        <path d="M30 35 L50 65 L70 35 Z" fill="white" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
        <g ref={particlesRef}>
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 2 + 1}
              fill="#3b82f6"
            />
          ))}
        </g>
      </svg>
    </motion.div>
  )
}

export default LogoAnimation

