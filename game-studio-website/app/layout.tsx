import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ChatBot from "./components/ChatBot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alstudios - Innovative Game Development",
  description: "Empowering Game Worlds with Cutting-Edge Technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}

