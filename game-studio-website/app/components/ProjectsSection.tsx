"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "Cosmic Odyssey", image: "/placeholder.svg?height=300&width=400", tags: ["Sci-Fi", "RPG"] },
  { id: 2, title: "Neon Nights", image: "/placeholder.svg?height=300&width=400", tags: ["Cyberpunk", "Action"] },
  { id: 3, title: "Mythic Realms", image: "/placeholder.svg?height=300&width=400", tags: ["Fantasy", "MMORPG"] },
  { id: 4, title: "Quantum Quest", image: "/placeholder.svg?height=300&width=400", tags: ["Puzzle", "Adventure"] },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

