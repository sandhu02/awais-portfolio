"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import {
  WireframePolyhedron,
  WireframeOctahedron,
  WireframeHourglass,
} from "./Vectors";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#111111] border border-zinc-700/80 rounded-none shadow-2xl text-white z-10 flex flex-col">
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-zinc-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {project.wireframeType === "polyhedron" && (
              <WireframePolyhedron size={28} />
            )}
            {project.wireframeType === "octahedron" && (
              <WireframeOctahedron size={28} />
            )}
            {project.wireframeType === "hourglass" && (
              <WireframeHourglass size={28} />
            )}
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors rounded-none"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Main Visual & Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Device Mockup / Screenshot */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] h-[480px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 bg-black group">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#169458]" />
                Interactive UI Mockup &amp; Production Capture
              </span>
            </div>

            {/* Right: Project Details & Action Buttons */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-sm font-mono text-emerald-400 mb-1">
                  {project.subtitle}
                </p>
                <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons: Play Store & GitHub */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#169458] hover:bg-[#13824c] text-white font-medium text-sm transition-all duration-200 shadow-md group"
                  >
                    {/* Google Play Store Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.27 2.27 0 0 1-.61-.83V2.644a2.27 2.27 0 0 1 .61-.83zm11.238 11.24l2.128 2.127-11.8 6.786 9.672-8.913zm0-2.108L5.175 2.033l11.8 6.786-2.128 2.127zm1.094 1.054l3.784-2.176c1.173-.674 1.173-1.776 0-2.45l-3.784-2.176-1.785 1.785 1.785 3.017z"/>
                    </svg>
                    <span>Google Play Store</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm border border-zinc-700 transition-all duration-200"
                >
                  {/* GitHub Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="p-4 rounded-none bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Architecture &amp; Reliability
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.architectureNotes}
                </p>
                {project.metrics && (
                  <div className="pt-2 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {project.metrics}
                  </div>
                )}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-200 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="border-t border-zinc-800 pt-6">
            <h4 className="text-base font-bold font-mono uppercase tracking-wider text-emerald-400 mb-4">
              Key Features &amp; Implementation Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-zinc-900/40 border border-zinc-800/60"
                >
                  <span className="text-[#169458] font-mono text-sm font-bold">
                    0{idx + 1}.
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-normal">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
