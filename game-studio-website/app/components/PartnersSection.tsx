"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const partners = [
  { id: 1, name: "TechGiant", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "GamePublisher", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Consolemaker", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "StreamPlatform", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "VRInnovator", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "AITech", logo: "/placeholder.svg?height=100&width=200" },
]

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="partners" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: partner.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={100}
                className="max-w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

