"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: 2015,
      title: "Founded",
      description: "Alstudios was established with a vision to create innovative games.",
    },
    {
      year: 2017,
      title: "First Game Launch",
      description: 'Released our debut title "Cosmic Odyssey" to critical acclaim.',
    },
    { year: 2019, title: "Expansion", description: "Opened a new studio and doubled our team size." },
    { year: 2021, title: "Award-Winning", description: 'Won "Best Indie Studio" at the Global Game Awards.' },
    { year: 2023, title: "Next-Gen Development", description: "Began development on our most ambitious project yet." },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Alstudios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-64 md:h-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Logo />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <h4 className="text-xl font-semibold text-blue-400">{milestone.year}</h4>
                <h5 className="text-lg font-medium text-white">{milestone.title}</h5>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Logo = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  )
}

export default AboutSection

