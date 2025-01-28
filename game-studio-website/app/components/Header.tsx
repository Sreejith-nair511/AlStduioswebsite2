"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"])

  useEffect(() => {
    const handleResize = () => setIsOpen(false)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const routes = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/partners", label: "Partners" },
    { href: "/platforms", label: "Platforms" },
    { href: "/news", label: "News" },
    { href: "/team", label: "Team" },
  ]

  return (
    <motion.header className="fixed w-full z-50 backdrop-blur-md" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%201%20.jpg-OOhEFUQikDza0zzG947sPH2EVxGRm5.jpeg"
            alt="AL Studios Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white">Alstudios</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <NavLink key={route.href} href={route.href} isActive={pathname === route.href}>
              {route.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-90 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <NavLink
                key={route.href}
                href={route.href}
                isActive={pathname === route.href}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

const NavLink = ({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}) => (
  <Link
    href={href}
    className={`text-white transition-colors ${isActive ? "text-blue-400" : "hover:text-gray-300"}`}
    onClick={onClick}
  >
    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.span>
  </Link>
)

export default Header

