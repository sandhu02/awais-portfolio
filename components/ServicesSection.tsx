import React from "react";
import {
  ServiceArrowWave,
  ServiceArrowStairs,
  ServiceArrowLoop,
} from "./Vectors";
import { SERVICES } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      {/* Top Banner: Warm Cream / Off-White Header */}
      <div className="bg-[#F4F0E8] text-[#169458] py-16 sm:py-20 md:py-24 px-8 sm:px-12 md:px-16 lg:px-20 border-b border-[#EAE4D5]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
          Services
          <br />
          Offered
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#169458]/80 max-w-xl font-medium">
          Comprehensive full-lifecycle engineering for mobile and server-side systems, from architecture to production release.
        </p>
      </div>

      {/* 3 Column Color-Blocked Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {/* Card 1: Native Android Development (Green #169458) */}
        <div className="bg-[#169458] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[480px] border-b md:border-b-0 md:border-r border-white/10 group transition-colors duration-300 hover:bg-[#13844e]">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-200 uppercase mb-4">
              Service / 01
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Native Android
              <br />
              Development
            </h3>
            <p className="mt-4 text-sm sm:text-base text-emerald-50/90 leading-relaxed max-w-xs">
              Modern declarative Android apps built with Kotlin, Jetpack Compose, Clean Architecture (MVVM/MVI), Hilt, and Android System APIs.
            </p>
          </div>

          {/* Bottom Wave Vector Graphic */}
          <div className="pt-8">
            <ServiceArrowWave className="w-full h-16 sm:h-20 text-white transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>

        {/* Card 2: Front End Development (Navy #0C2340) */}
        <div className="bg-[#0C2340] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[480px] border-b md:border-b-0 md:border-r border-white/10 group transition-colors duration-300 hover:bg-[#0a1e36]">
          <div>
            <div className="text-xs font-mono tracking-widest text-slate-300 uppercase mb-4">
              Service / 02
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Front End
              <br />
              Development
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xs">
              Responsive user interfaces, cross-platform layouts, interactive web apps, and design system components with fluid micro-interactions.
            </p>
          </div>

          {/* Bottom Staircase Vector Graphic */}
          <div className="pt-8">
            <ServiceArrowStairs className="w-full h-16 sm:h-20 text-white transition-transform duration-300 group-hover:-translate-x-2" />
          </div>
        </div>

        {/* Card 3: Back End Development (Royal Blue #2F54EB) */}
        <div className="bg-[#2F54EB] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[480px] group transition-colors duration-300 hover:bg-[#2849d4]">
          <div>
            <div className="text-xs font-mono tracking-widest text-blue-200 uppercase mb-4">
              Service / 03
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Back End
              <br />
              Development
            </h3>
            <p className="mt-4 text-sm sm:text-base text-blue-50/90 leading-relaxed max-w-xs">
              Scalable Node.js &amp; Express backends, real-time WebSockets with Socket.IO, WebRTC peer-to-peer pipelines, and cloud database integration.
            </p>
          </div>

          {/* Bottom Looping Roller-Coaster Vector Graphic */}
          <div className="pt-8">
            <ServiceArrowLoop className="w-full h-16 sm:h-20 text-white transition-transform duration-300 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
