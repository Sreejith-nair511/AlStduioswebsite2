import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, GitlabIcon as GitHub } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alstudios</h3>
            <p className="mb-4">Empowering Game Worlds with Cutting-Edge Technology</p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" icon={Facebook} label="Facebook" />
              <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
              <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
              <SocialIcon href="https://github.com" icon={GitHub} label="GitHub" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="hover:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-gray-300 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#platforms" className="hover:text-gray-300 transition-colors">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-gray-300 transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Visit Our Store</h4>
            <motion.a
              href="/store"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Store
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2023 Alstudios. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon size={24} />
  </motion.a>
)

export default Footer

