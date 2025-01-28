"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Monitor, Smartphone, Gamepad } from "lucide-react"

const platforms = [
  { id: 1, name: "PC", icon: Monitor, description: "High-performance gaming experiences" },
  { id: 2, name: "Mobile", icon: Smartphone, description: "On-the-go gaming adventures" },
  { id: 3, name: "Console", icon: Gamepad, description: "Immersive living room experiences" },
]

const PlatformsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="platforms" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Supported Platforms</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: platform.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center max-w-xs text-center"
            >
              <platform.icon size={64} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
              <p className="text-gray-300">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformsSection

