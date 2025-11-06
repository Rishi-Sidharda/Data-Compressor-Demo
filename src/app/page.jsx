"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Router } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["helo_", "docs", "changelogs", "blogs", "community"];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black border-b border-[#808080]/50 z-50">
        <div className="flex items-center justify-between px-4 sm:px-6 h-14">
          {/* Left side (logo + title) */}
          <div
            className={`flex ${geistSans.className} font-mono items-center gap-2 sm:gap-3 text-white`}
          >
            <img
              src="/fire.png" // make sure fire.png is in /public
              alt="Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <h1 className="text-lg sm:text-xl font-mono">Byte Squeeze_</h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center font-mono text-gray-400 h-full">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </div>
            ))}

            <div className="px-4 border-l border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>

            <div className="px-4 border-x border-[#808080]/50 h-full flex items-center hover:text-white hover:bg-white/10 transition-colors duration-200">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-[#808080]/50 flex flex-col text-gray-300 font-mono">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-[#808080]/40 hover:bg-white/10 hover:text-white cursor-pointer transition"
              >
                {item}
              </div>
            ))}

            <div className="flex items-center justify-center gap-6 py-3 border-t border-[#808080]/50">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Scrollable content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main
          className={`flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 ${geistMono.className}`}
        >
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src="/compression.png"
              alt="Illustration"
              className="w-64 sm:w-80 md:w-96 h-auto opacity-90"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            Compress Smarter. <br />
            <span className="text-gray-400">Safer, and Faster</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            Byte Squeeze_ redefines compression by leveraging practical
            collision limits — achieving real-world results where theory stops
            short.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
                );
              }}
              className="px-8 py-2 cursor-pointer bg-white text-black font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base"
            >
              Try It Now
            </button>
            <button className="px-8 py-2 cursor-pointer border border-white/40 text-gray-300 hover:bg-white/10 transition-all text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* Upload Section */}
          <div className="bg-[#111111] border border-white/10 shadow-lg w-full max-w-md sm:max-w-xl rounded-lg overflow-hidden">
            {/* Mac-style header */}
            <div className="flex items-center space-x-2 px-4 py-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* File input area */}
            <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 text-gray-400 text-sm sm:text-base">
              <p className="mb-4 text-center">
                Drop your file here or click to upload
              </p>
              <label className="cursor-pointer px-6 py-3 border border-dashed border-gray-600 hover:bg-white/5 transition rounded-md">
                <input type="file" className="hidden" />
                <span>Choose File</span>
              </label>
            </div>
          </div>
        </main>

        {/* Team Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Team Roles
          </h2>
          <div className="space-y-2 text-gray-400 text-sm sm:text-base">
            <p>CEO - Rishi</p>
            <p>CFO - Panya</p>
            <p>Research team - Rishi, Rohith, Sasank</p>
            <p>Technical team - Praveen, Thanveer</p>
            <p>Marketing Team - Sarwan, Swaroop</p>
            <p>HR - Baswanth</p>
          </div>
        </section>
      </div>
    </div>
  );
}
