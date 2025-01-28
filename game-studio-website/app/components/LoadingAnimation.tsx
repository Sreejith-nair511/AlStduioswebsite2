"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import * as THREE from "three"
import Image from "next/image"

interface LoadingAnimationProps {
  onComplete: () => void
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !logoRef.current || !canvasRef.current) return

    // Set up Three.js scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5

    // Create particles
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      // Alternate between pink and blue colors
      const color =
        i % 2 === 0
          ? new THREE.Color(0xff69b4) // Pink
          : new THREE.Color(0x00bfff) // Blue

      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500)
      },
    })

    // Initial fade in
    tl.fromTo(
      ".controller-container",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
    )

      // Glow effect
      .fromTo(".controller-glow", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.inOut" })

      // Text animation
      .fromTo(
        ".studio-text span",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: "power2.out",
        },
      )

    // Particle animation
    const animateParticles = () => {
      if (!particles) return

      particles.rotation.y += 0.001
      particles.rotation.x += 0.001

      const positions = particles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002
      }
      particles.geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      requestAnimationFrame(animateParticles)
    }

    animateParticles()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
    }
  }, [onComplete])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10" ref={logoRef}>
        <div className="controller-container relative">
          <div className="controller-glow absolute inset-0 blur-xl bg-gradient-to-r from-pink-500 to-blue-500 opacity-50" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-27_135026-removebg-preview-Zxr0wpaCOrzt8Tqd33V0aSWWZCru2B.png"
            alt="Controller"
            width={300}
            height={300}
            className="relative z-10"
          />
        </div>

        <div className="studio-text mt-8 text-center">
          {"ALSTUDIOS".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingAnimation

