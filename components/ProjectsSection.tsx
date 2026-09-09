"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolio";
import {
  ProjectCurvedArrow,
  WireframePolyhedron,
  WireframeOctahedron,
  WireframeHourglass,
} from "./Vectors";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderWireframe = (type: Project["wireframeType"]) => {
    switch (type) {
      case "polyhedron":
        return <WireframePolyhedron size={64} />;
      case "octahedron":
        return <WireframeOctahedron size={64} />;
      case "hourglass":
        return <WireframeHourglass size={64} />;
      default:
        return <WireframePolyhedron size={64} />;
    }
  };

  return (
    <section id="projects" className="w-full bg-[#0D0D0D] text-white scroll-mt-6">
      {/* 1. Exact PDF Projects Header & List Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] border-b border-zinc-800">
        {/* Left Column: "Projects" Heading + Curved Green Arrow */}
        <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 relative">
          <div>
            <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
              Portfolio / Work
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed">
              Explore production-grade native Android applications, innovative Glance widgets, and full-stack real-time backends.
            </p>
          </div>

          {/* Curved Green Arrow pointing to the right list (matching PDF) */}
          <div className="mt-8 lg:mt-16 w-full max-w-[340px]">
            <ProjectCurvedArrow className="w-full h-auto text-[#169458]" />
          </div>
        </div>

        {/* Right Column: Project Rows with 3D Wireframes (exact PDF design) */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-800 justify-center">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-8 sm:p-10 md:p-12 flex items-center justify-between cursor-pointer group transition-all duration-300 hover:bg-zinc-900/60"
            >
              <div className="flex items-center gap-6 sm:gap-8">
                {/* 3D Wireframe Icon */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  {renderWireframe(project.wireframeType)}
                </div>

                {/* Project Titles */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-zinc-800 text-emerald-400 border border-zinc-700">
                      0{idx + 1}
                    </span>
                    {project.playStoreUrl && (
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                        Google Play
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 font-normal mt-1 leading-snug">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="flex-shrink-0 ml-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 group-hover:border-[#169458] flex items-center justify-center group-hover:bg-[#169458] transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Visual Device Showcase Grid: Screenshots, Descriptions & Links */}
      <div className="p-8 sm:p-12 md:p-16 lg:p-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-zinc-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#169458] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#169458]" />
                Live Demonstrations
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Screenshots &amp; App Architecture
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-sm">
              Click any app card for interactive modal with complete technical specifications, source code, and release testing links.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={`card-${project.id}`}
                className="bg-[#111111] border border-zinc-800 flex flex-col justify-between group hover:border-[#169458] transition-all duration-300"
              >
                {/* Phone Preview Top Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-[360px] sm:h-[400px] bg-gradient-to-b from-[#18181b] to-[#0d0d0d] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
                >
                  <div className="relative w-full max-w-[210px] h-full shadow-2xl rounded-2xl overflow-hidden border border-zinc-700/50 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Subtle Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-wide bg-black/80 text-zinc-300 backdrop-blur-md border border-zinc-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Bottom */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between border-t border-zinc-800/80">
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-400/90 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-mono text-zinc-500">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 px-4 bg-[#169458] hover:bg-[#13824c] text-white text-xs font-bold tracking-wider uppercase transition-colors text-center"
                    >
                      View Details
                    </button>
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                        title="Google Play Store"
                        aria-label="Google Play Store"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.793 12 3.61 22.186a2.27 2.27 0 0 1-.61-.83V2.644a2.27 2.27 0 0 1 .61-.83zm11.238 11.24l2.128 2.127-11.8 6.786 9.672-8.913zm0-2.108L5.175 2.033l11.8 6.786-2.128 2.127zm1.094 1.054l3.784-2.176c1.173-.674 1.173-1.776 0-2.45l-3.784-2.176-1.785 1.785 1.785 3.017z"/>
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
