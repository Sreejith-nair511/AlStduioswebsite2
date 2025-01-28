"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import LoadingAnimation from "./LoadingAnimation"

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}</AnimatePresence>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arcade Background */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg3-1xv8MysZyPf4Qcfmvxy9axraLDxLkd.webp"
            alt="Retro Arcade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-block relative"
          >
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-pink-500 to-blue-500 opacity-50" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-27_135026-removebg-preview-Zxr0wpaCOrzt8Tqd33V0aSWWZCru2B.png"
              alt="AL Studios Controller"
              width={200}
              height={200}
              className="relative z-10"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-4"
          >
            Alstudios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Empowering Game Worlds with Cutting-Edge Technology
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-pink-500/25"
          >
            Explore Our Games
          </motion.button>
        </div>
      </section>
    </>
  )
}

export default HeroSection

