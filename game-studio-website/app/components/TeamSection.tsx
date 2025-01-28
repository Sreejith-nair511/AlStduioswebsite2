"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Instagram, Linkedin, ComputerIcon as Steam } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  about?: string
  social: {
    instagram?: string
    linkedin?: string
    github?: string
    itchio?: string
    steam?: string
  }
}

export const team: TeamMember[] = [
  {
    name: "Sreejith S",
    role: "Lead & Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sreejith.jpg-TiFMDRhkUbkVu0JmLA5Ok6EItiihJX.jpeg",
    about:
      "Hello fellas! Sreejith here with a big smile. As a fellow avkgeek, petrolhead and a game developer, my passion lies in creating experiences that I am proud of. With the appropriate skills and experience, my greatest strength still remains sheer human grit :)",
    social: {
      instagram: "https://www.instagram.com/_sreejith_0511nair",
      linkedin: "https://www.linkedin.com/in/sreejith-s-b232092a9",
      github: "https://github.com/Sreejith-nair511",
      itchio: "https://zreegames.itch.io/",
      steam: "https://steamcommunity.com/profiles/76561199502312683/",
    },
  },
  {
    name: "Navyatha",
    role: "Creative Lead",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navyatha%20.jpg-miXrPzPuzClT5qekbaWTmKYBr7qqqd.jpeg",
    about:
      "Hello! I'm K.Lakshmi Navyatha an aspiring data scientist with a keen interest in art. I'm the designer and creative lead for AL Studios. My passion lies in translating dreams into art, creating world's that are as captivating as the stories they hold. Whether it's crafting intricate characters or designing awe-inspiring environments, I aim to make every scene memorable. Ready to explore the universe we've built? Dive in!",
    social: {
      instagram: "https://www.instagram.com/kancharla.navyatha",
      linkedin: "https://www.linkedin.com/in/k-lakshmi-navyatha-453151293",
      github: "https://github.com/kancharlanavyatha",
    },
  },
  {
    name: "Shibasish Banerjee",
    role: "Media Head & Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shibasish%20-B9eVLOWy65wjE16VhdoQXCFnjbVpSd.png",
    about:
      "I'm Shibasish Banerjee, a Bachelor of Technology student specializing in Information Science and Engineering (ISE). I thrive at the intersection of technology and creativity, driven by a passion for content creation and programming. I believe in 'Shaping the Media, Coding the Future'—a vision where technology meets creativity to deliver transformative experiences.",
    social: {
      instagram: "https://www.instagram.com/shibufrr",
      linkedin: "https://www.linkedin.com/in/shibasishbanerjee",
      github: "shibasish2005@gmail.com",
    },
  },
  {
    name: "Sanjana TG",
    role: "Art Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjana%20.jpg-bDXrnNu2FeGUNLQFtlcJKAkB0vC96t.jpeg",
    about:
      "Hello everyone, Sanjana here!! As an aspiring Art Director, I'm thrilled to embark on my first game project, driven by a passion for creating visually captivating and inspiring game experiences. I'm eager to explore and develop unique art styles, collaborating with talented individuals to bring fresh ideas to life. For me, game art isn't just about aesthetics—it's about building immersive worlds and memorable experiences for players.",
    social: {
      instagram: "https://www.instagram.com/sanjana_xx6",
      linkedin: "https://www.linkedin.com/in/sanjana-t-g",
      github: "https://github.com/sanjanatg",
    },
  },
  {
    name: "Tarani Lakshmi",
    role: "Beta Tester & Character Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarani%20.jpg-GNVz4JL4Cbej04XD2cDRiL5BojJhIe.jpeg",
    about:
      "Hello! I'm Tarani Lakshmi, a creative mind who draws inspiration from the fusion of art and technology. When I'm not designing, you'll find me diving into novels to spark fresh ideas. Would love to build gaming experiences that are not just unforgettable, but also a whole lot of fun (and maybe a little bit of chaos)!",
    social: {
      instagram: "https://www.instagram.com/tara.xviii",
      linkedin: "https://www.linkedin.com/in/tarani-lakshmi-2658732bb",
      github: "https://github.com/Tannie02",
    },
  },
  {
    name: "Nithin M",
    role: "Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nithin%20m%20-AfVzAGTEs0mTc8qZ3MUceVxE9wjqZM.png",
    about: "Anime, life and fun",
    social: {
      instagram: "https://www.instagram.com/nikelf_",
    },
  },
  {
    name: "Nikhil Kumar",
    role: "Game Developer & Multiplayer Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikhil.jpg-EiJ0ZgUF5PByeNnovg1hYoHrnoahmj.jpeg",
    about: "Game Developer focusing on multiplayer experiences and innovative gameplay mechanics.",
    social: {
      instagram: "https://www.instagram.com/nikhil_k.u.m.a.r_",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-58083229a",
      github: "https://github.com/Nikhilkumar231",
    },
  },
  {
    name: "Limnisha",
    role: "UI/UX Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limnisha%20.jpg-7UZ76yFU6xXGd4FNiK2g39zFHvGkMY.jpeg",
    about: "Creating intuitive and engaging user experiences for our games.",
    social: {
      instagram: "https://www.instagram.com/limnisha._",
      linkedin: "https://www.linkedin.com/in/limnisha-changkakati-6a6453326",
    },
  },
  {
    name: "Rohith",
    role: "Project Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rohith.jpg-fEe6Oc17CgFhvOvERNBprYE2xQuurX.jpeg",
    about: "Ensuring smooth project execution and team coordination.",
    social: {
      instagram: "https://www.instagram.com/rohith.ggg",
      linkedin: "https://www.linkedin.com/in/rohith-g-0461a82b2",
      github: "https://github.com/Rohith-max",
    },
  },
]

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="team" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-800">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    {member.social.instagram && (
                      <Link href={member.social.instagram} target="_blank" className="text-white hover:text-pink-500">
                        <Instagram size={20} />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link href={member.social.linkedin} target="_blank" className="text-white hover:text-blue-500">
                        <Linkedin size={20} />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link href={member.social.github} target="_blank" className="text-white hover:text-gray-400">
                        <Github size={20} />
                      </Link>
                    )}
                    {member.social.steam && (
                      <Link href={member.social.steam} target="_blank" className="text-white hover:text-blue-300">
                        <Steam size={20} />
                      </Link>
                    )}
                    {member.social.itchio && (
                      <Link href={member.social.itchio} target="_blank" className="text-white hover:text-purple-500">
                        Itchio
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
                <p className="text-blue-400 mb-4">{selectedMember.role}</p>
                <p className="text-gray-300 mb-6">{selectedMember.about}</p>
                <div className="flex space-x-4">
                  {Object.entries(selectedMember.social).map(
                    ([platform, url]) =>
                      url && (
                        <Link
                          key={platform}
                          href={url}
                          target="_blank"
                          className="text-white hover:text-blue-500 capitalize"
                        >
                          {platform}
                        </Link>
                      ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default TeamSection

