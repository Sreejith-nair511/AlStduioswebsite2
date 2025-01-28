"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const games = [
  {
    title: "Abyss",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abyss-z7sgLXIdqw76oHZN0NgcMXZVjDWWla.png",
    description: "Explore a futuristic cityscape in this atmospheric adventure game.",
    price: "$19.99",
    status: "Coming Soon",
  },
  {
    title: "Comet Knockout",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comet%20knockout%20-3NSgxxW2Pl9AHb8PencgUdXlhfaMUP.jpeg",
    description: "Fast-paced arcade action with stunning visuals and competitive gameplay.",
    price: "$14.99",
    status: "Pre-order",
  },
  {
    title: "Moonlight Vendetta",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moonlight%20vendetta-WGpqNQ2mTbntvjJIQZlSPsbcexTjHm.jpeg",
    description: "A pixel art revenge tale set in a mystical world.",
    price: "$16.99",
    status: "Coming Soon",
  },
  {
    title: "Nixie Run",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nixie%20run%20.jpg-CFSIP6syAr2jEqQ8bShTTlPeqDsUqb.jpeg",
    description: "Join Nixie in this charming platformer adventure.",
    price: "$9.99",
    status: "Available Now",
  },
]

const StoreSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="store" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Game Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative aspect-square">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{game.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-bold">{game.price}</span>
                  <span className="text-pink-500 text-sm">{game.status}</span>
                </div>
                <Link
                  href={`/store/${game.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
                >
                  {game.status === "Available Now" ? "Buy Now" : "Learn More"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoreSection

