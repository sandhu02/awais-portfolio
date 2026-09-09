import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Left Side: Developer Coding Atmosphere (Photo) */}
        <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-auto min-h-[460px] bg-black overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/coding_developer.jpg"
            alt="Muhammad Awais software development workspace"
            fill
            className="object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Visual dark gradient overlay matching the PDF mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />

          {/* Quick Code Badge Overlay at bottom */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white/90">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>stack_trace.kt</span>
              <span className="text-emerald-400">● Live Preview</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-emerald-300">
              val experience = "Android Native" + "Jetpack Compose" + "Node.js"
            </p>
          </div>
        </div>

        {/* Right Side: Emerald Green "About Awais" Block */}
        <div className="bg-[#169458] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between order-1 lg:order-2 relative">
          <div>
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              About
              <br />
              Awais
            </h2>

            {/* Editorial Down Arrow matching PDF */}
            <div className="my-6 sm:my-8 text-white/90">
              <svg
                className="w-8 h-12 sm:w-10 sm:h-16 animate-bounce"
                fill="none"
                viewBox="0 0 24 48"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="12" y1="4" x2="12" y2="40" strokeLinecap="round" />
                <polyline points="5,33 12,40 19,33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Exact Bio Text from Design */}
            <div className="space-y-4 max-w-xl text-lg sm:text-xl font-medium leading-relaxed text-emerald-50">
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Hi! I&#39;m Awais.
              </p>
              <p className="text-white/95">
                I&#39;m a software developer specializing in native Android and backend development. I build modern Android applications using Kotlin and Jetpack Compose, while also developing scalable server-side.
              </p>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed pt-2">
                Alongside mobile engineering, I possess professional experience as a{" "}
                <span className="text-white font-semibold underline decoration-white/40 underline-offset-4">
                  Requirements &amp; QA Engineer at Splenify
                </span>
                , providing deep understanding of clean architecture, SDLC, bug prevention, and user-centric acceptance testing.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 pt-10 border-t border-white/20 mt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono">100%</div>
              <div className="text-xs uppercase tracking-wider text-emerald-100 font-mono mt-0.5">
                Native Kotlin &amp; Compose
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono">BS CS</div>
              <div className="text-xs uppercase tracking-wider text-emerald-100 font-mono mt-0.5">
                COMSATS Islamabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
