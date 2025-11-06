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
    <div className="min-h-screen w-full bg-black text-white relative overflow-x-hidden">
      {/* Navbar (unchanged) */}
      <div className="w-full h-[7%] fixed top-0 left-0 bg-black border-b border-[#808080]/50 flex items-center justify-between pl-6 z-20">
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

      {/* Scrollable content area */}
      <div className="relative z-10">
        {/* Main Hero Section */}
        <main
          className={`flex flex-col items-center justify-center min-h-screen text-center px-6 ${geistMono.className}`}
        >
          {/* Illustration (optional) */}
          <div className="flex justify-center">
            <img
              src="/compression.png"
              alt="Illustration"
              className="w-100 h-auto opacity-90"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Compress Smarter. <br />
            <span className="text-gray-400">Zero Theory, All Practice.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-10">
            Byte Squeeze_ redefines compression by leveraging practical
            collision limits — achieving real-world results where theory stops
            short.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-2 cursor-pointer bg-white text-black font-semibold hover:bg-gray-200 transition-all">
              Try It Now
            </button>
            <button className="px-8 py-2 cursor-pointer border border-white/40 text-gray-300 hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>

          {/* Upload Section */}
          <div className="bg-[#111111] border border-white/10 shadow-lg w-full max-w-xl">
            {/* Mac-style header */}
            <div className="flex items-center space-x-2 px-4 py-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* File input area */}
            <div className="flex flex-col items-center justify-center py-10 px-6 text-gray-400">
              <p className="mb-4">Drop your file here or click to upload</p>
              <label className="cursor-pointer px-6 py-3 border border-dashed border-gray-600 hover:bg-white/5 transition">
                <input type="file" className="hidden" />
                <span>Choose File</span>
              </label>
            </div>
          </div>
        </main>

        {/* Second Section (Scrollable Area) */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          {/* Add whatever you want here */}
          <h2 className="text-4xl font-semibold mb-4">Second Section</h2>
          <p className="text-gray-400 max-w-xl">
            This section makes the website scrollable. You can add more content,
            images, or components here. The background stays fixed while the
            content scrolls.
          </p>
        </section>
      </div>
    </div>
  );
}
