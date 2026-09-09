import React from "react";
import Image from "next/image";
import { BrandLogo } from "./Vectors";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function HeaderHero() {
  return (
    <header className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[560px] md:min-h-[640px]">
        {/* Left Column: Bold Emerald Green Hero Block */}
        <div className="bg-[#169458] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between relative overflow-hidden">
          {/* Top Logo & Navigation Header */}
          <div className="relative z-20 flex items-center justify-between flex-wrap gap-4 pb-4">
            <BrandLogo size="lg" braceColor="#FEC700" textColor="#FFFFFF" subtitleColor="#E2F5EA" />

            <nav className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
              <a
                href="#services"
                className="hidden md:inline-block text-white/80 hover:text-white transition-colors uppercase tracking-wider text-xs font-semibold"
              >
                Services
              </a>
              <a
                href="#skills"
                className="hidden md:inline-block text-white/80 hover:text-white transition-colors uppercase tracking-wider text-xs font-semibold"
              >
                Skills
              </a>
              {/* Highlighted Projects Button requested by user */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black hover:bg-zinc-900 text-white text-xs sm:text-sm font-mono tracking-wider uppercase border border-white/30 hover:border-white transition-all duration-200 shadow-md group"
              >
                <span>Projects</span>
                <svg
                  className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-y-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </nav>
          </div>

          {/* Large Hero Graphic Space / Subtle Modern Details */}
          <div className="my-12 md:my-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 text-white/90 text-xs font-mono tracking-wide mb-6 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              Available for Android &amp; Backend Projects
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
              Crafting High-Performance Native Android Apps
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-50/90 max-w-lg font-normal leading-relaxed">
              Specialized in Kotlin, modern declarative Jetpack Compose, clean reactive architecture, and custom cloud backends.
            </p>
          </div>

          {/* Quick CTA row */}
          <div className="flex flex-wrap items-center gap-4 relative z-10 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black hover:bg-zinc-900 text-white font-medium text-sm rounded-none transition-all duration-200 border border-black hover:border-zinc-800 shadow-sm"
            >
              Explore Featured Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-200 border border-white/30"
            >
              Get in Touch
            </a>
          </div>

          {/* Subtle background decorative geometric lines */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        </div>

        {/* Right Column: Split into Photo (Top) and Quote (Bottom) */}
        <div className="flex flex-col w-full bg-[#0D0D0D]">
          {/* Top Half: Professional Portrait Photo */}
          <div className="relative w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] overflow-hidden bg-[#0A0A0A]">
            <Image
              src="/images/hero_portrait.jpg"
              alt="Muhammad Awais - Native Android Developer"
              fill
              priority
              className="object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Half: Black Quote Card with Downward Arrow */}
          <div className="bg-[#0D0D0D] text-white p-8 sm:p-10 md:p-12 flex items-center justify-between border-t border-zinc-800/40 relative">
            <div className="max-w-md pr-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-white">
                {PERSONAL_INFO.tagline}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span>ISLAMABAD, PK</span>
                <span>•</span>
                <span>KOTLIN &amp; COMPOSE</span>
                <span>•</span>
                <span>NODE.JS</span>
              </div>
            </div>

            {/* Downward Arrow Button */}
            <a
              href="#about"
              aria-label="Scroll to About Section"
              className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-zinc-700/60 hover:border-[#169458] flex items-center justify-center text-white hover:text-[#169458] hover:bg-zinc-900/80 transition-all duration-300 group shadow-lg"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transform transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
