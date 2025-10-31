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
    <div className="min-h-screen w-full bg-black relative overflow-hidden text-white">
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
      <div className="w-full h-[7%] absolute top-0 left-0 bg-black border-b border-[#808080]/50 flex items-center justify-between pl-6 z-20">
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

      {/* Main Section */}
      <main
        className={`relative z-10 flex flex-col md:flex-row justify-center min-h-screen pt-24 px-10 gap-10 ${geistMono.className}`}
      >
        {/* Left: Hero Text */}
        <div className="flex w-full md:w-1/2 justify-center mt-50 h-full items-center">
          <div className="max-w-xl  space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
              <span className="block text-gray-100">Compress Smarter.</span>
              <span className="block text-gray-400">Not Theoretically.</span>
            </h1>

            <p className="text-gray-400 leading-relaxed">
              Built on the practical limits of hash collision finding — Byte
              Squeeze_ achieves compression rates that defy theory but thrive in
              reality.
            </p>
          </div>
        </div>

        {/* Right: Upload + Compression Output */}
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <div className="bg-zinc-900/50 border border-zinc-700 p-8 shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Upload & Compress
            </h2>
            <input
              type="file"
              className="w-full bg-zinc-800 border border-zinc-600 text-gray-300  px-4 py-2 cursor-pointer focus:outline-none"
            />
            <button className="mt-4 w-full cursor-pointer bg-white/10 hover:bg-white/20 transition-all py-2  text-gray-200">
              Compress File
            </button>

            <div className="mt-6 text-sm text-gray-400 border-t border-zinc-700 pt-4">
              <p>
                Compression Ratio: <span className="text-gray-200">85%</span>
              </p>
              <p>
                Original Size: <span className="text-gray-200">2.4 MB</span>
              </p>
              <p>
                Compressed Size: <span className="text-gray-200">0.36 MB</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
