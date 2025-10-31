import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.04) 20%,
                rgba(0, 0, 0, 0.0) 60%
              )
            `,
          }}
        />

        {/* Navbar */}
        <div className="w-full h-[7%] absolute top-0 left-0 bg-black border-b border-[#808080]/50 flex items-center justify-between pl-6">
          {/* Left side */}
          <div
            className={`flex ${geistSans.className} font-mono h-full pr-20 items-center gap-3 text-white`}
          >
            <h1 className="text-xl font-mono">Byte Squeeze_</h1>
          </div>

          {/* Right side */}
          <div className="flex items-center font-mono text-gray-400 h-full">
            <div className="px-4 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              helo_
            </div>
            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              docs
            </div>
            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              changelogs
            </div>
            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              blogs
            </div>
            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              community
            </div>
            <div className="px-5 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="px-5 border-x border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
