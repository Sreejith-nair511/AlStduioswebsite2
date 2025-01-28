"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Github, Instagram, Linkedin, GamepadIcon } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Import the required components and styles
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// Import the team array directly
import { team } from "./TeamSection"

const MapWithNoSSR = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false,
})

const MembersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="members" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">User Feedback</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We value your input! Here's what our users are saying about ALStudios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What Our Users Say</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">
                "Amazing retro-inspired games! Brings back childhood memories." - John D.
              </li>
              <li className="text-gray-300">"The attention to detail in pixel art is outstanding!" - Sarah M.</li>
              <li className="text-gray-300">"Challenging gameplay with a nostalgic twist. Love it!" - Mike R.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Find Us in Bangalore</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <MapWithNoSSR center={[12.9716, 77.5946]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[12.9716, 77.5946]}>
                  <Popup>
                    ALStudios <br /> Bangalore, India
                  </Popup>
                </Marker>
              </MapWithNoSSR>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersSection

