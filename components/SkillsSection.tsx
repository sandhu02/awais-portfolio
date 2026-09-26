import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-[#0D0D0D] text-white border-t border-zinc-800">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-800">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 bg-[#111111] border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Skills
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Android, backend, AI, and QA engineering.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/80">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-[#169458]" />
              <span className="font-mono text-xs text-zinc-300">
                100% Kotlin &amp; Modern Jetpack Ecosystem
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Category Matrix */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-zinc-900/50 ${
                idx >= 2 ? "border-t border-zinc-800" : ""
              }`}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-zinc-900 text-zinc-200 text-xs font-mono border border-zinc-800 hover:border-[#169458] hover:text-white transition-colors duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#169458]" />
                      {skill.name}
                      <span className="text-[10px] text-zinc-500 ml-1">
                        {skill.level}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
