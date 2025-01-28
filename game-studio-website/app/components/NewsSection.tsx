"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const news = [
  {
    id: 1,
    title: "New Game Announcement",
    date: "2023-06-15",
    content:
      'Exciting news! We\'re thrilled to announce our latest game, "Stellar Conquest", coming soon to all major platforms.',
  },
  {
    id: 2,
    title: "Game Studio Expansion",
    date: "2023-05-20",
    content: "We're expanding our team! Join us in creating the next generation of immersive gaming experiences.",
  },
  {
    id: 3,
    title: "Award-Winning Performance",
    date: "2023-04-10",
    content:
      'Our recent release, "Mythic Realms", has won the Game of the Year award at the Annual Gaming Excellence ceremony.',
  },
  {
    id: 4,
    title: "Community Event",
    date: "2023-03-05",
    content:
      "Join us for our first-ever virtual fan convention, featuring exclusive previews, developer Q&As, and more!",
  },
]

const NewsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="news" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Latest News</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.date}</p>
                <p className="text-gray-300 flex-grow">{item.content}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Read More
                </motion.button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default NewsSection

