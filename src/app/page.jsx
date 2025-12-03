"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import LightRays from "@/components/LightRays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Import the localFont function
import localFont from "next/font/local";

// 2. Configure the font loading
// The 'src' path is relative to the project root (not the component file)

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["helo_", "docs", "changelogs", "blogs", "community"];

  const teamRoles = [
    { role: "Chief Executive Officer (CEO)", members: ["Rishi"] },
    { role: "Chief Financial Officer (CFO)", members: ["Panya"] },
    {
      role: "Research & Strategy Team",
      members: ["Rishi", "Rohith", "Sasank"],
    },
    { role: "Technical Development Team", members: ["Praveen", "Thanveer"] },
    { role: "Marketing & Outreach Team", members: ["Sarwan", "Swaroop"] },
    { role: "Human Resources (HR)", members: ["Baswanth"] },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-x-hidden">
      {/* ---- 🔥 LIGHT RAYS BACKGROUND ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* ---------------------------------- */}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#000100] border-b border-[#808080]/50 z-50">
        <div className="flex items-center justify-between px-4 sm:px-6 h-14">
          {/* Logo */}
          <div
            className={`flex ${geistSans.className} font-mono items-center gap-2 sm:gap-3`}
          >
            <img
              src="/fire.png"
              alt="Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-md"
            />
            <h1 className="text-lg sm:text-xl font-mono">Data Slice_</h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center font-mono text-gray-400 h-full">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                {item}
              </div>
            ))}
            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:bg-white/10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="px-4 border-x border-[#808080]/50 h-full flex items-center hover:bg-white/10">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-[#808080]/50 flex flex-col text-gray-300 font-mono">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-[#808080]/40 hover:bg-white/10 hover:text-white"
              >
                {item}
              </div>
            ))}
            <div className="flex items-center justify-center gap-6 py-3">
              <FaGithub size={20} />
              <FaXTwitter size={20} />
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative z-10 pt-[5vh]">
        <main
          className={`flex flex-col items-center justify-center min-h-screen text-center px-4 ${geistMono.className}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Compress Smarter. <br />
            <span className="text-gray-400">Safer, and Faster</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mb-8 text-sm sm:text-base">
            Data Slice_ redefines compression by leveraging practical collision
            limits — achieving real-world results where theory stops short.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
              }
              className="px-8 py-2 bg-white text-black font-semibold hover:bg-gray-200"
            >
              Try It Now
            </button>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
              }
              className="px-8 py-2 border border-white/40 text-gray-300 hover:bg-white/10"
            >
              Learn More
            </button>
          </div>

          {/* Upload Box */}
          <div className="bg-[#111111] border border-white/10 shadow-lg w-full max-w-md sm:max-w-xl rounded-lg">
            <div className="flex items-center px-4 py-2 border-b border-white/10 space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-gray-400">
              <p className="mb-4 text-center">
                Drop your file here or click to upload
              </p>
              <label className="cursor-pointer px-6 py-3 border border-dashed border-gray-600 hover:bg-white/5 rounded-md">
                <input type="file" className="hidden" />
                <span>Choose File</span>
              </label>
            </div>
          </div>
        </main>

        {/* TEAM SECTION */}
        <section
          className={`flex flex-col items-center min-h-screen text-center px-4 py-20 ${geistMono.className}`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">The Team</h2>
          <p className="text-gray-400 max-w-xl mb-12">
            The individuals driving Data Slice_ forward with expertise and
            dedication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
            {teamRoles.map((team, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10  p-6 hover:border-white/40"
              >
                <div className="text-lg sm:text-xl font-bold mb-2 border-b border-gray-700 pb-2">
                  {team.role}
                </div>
                <p className="text-gray-400 mt-2">
                  {team.members.map((name, i) => (
                    <span key={i} className="text-white font-semibold">
                      {name}
                      {i < team.members.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
