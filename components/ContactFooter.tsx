"use client";

import React, { useState } from "react";
import { BrandLogo } from "./Vectors";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer id="contact" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[440px] md:min-h-[500px]">
        {/* Left Box: Emerald Green Contact Box (matching PDF) */}
        <div className="bg-[#169458] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.08] uppercase text-white max-w-lg">
              Need a Native
              <br />
              Android App or a
              <br />
              Custom Server?
            </h2>

            <div className="mt-8">
              <p className="text-sm font-mono uppercase tracking-wider text-emerald-100 font-semibold mb-3">
                Contact me via:
              </p>

              <ul className="space-y-3 font-mono text-sm sm:text-base text-white">
                {/* Phone */}
                <li className="flex items-center gap-3 group">
                  <span className="text-emerald-200">•</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:underline underline-offset-4 decoration-emerald-200 font-semibold"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                    className="opacity-80 hover:opacity-100 text-xs px-2 py-0.5 bg-black/20 rounded-none border border-white/20 transition-opacity"
                    title="Copy phone"
                  >
                    {copiedPhone ? "Copied!" : "Copy"}
                  </button>
                </li>

                {/* Email */}
                <li className="flex items-center gap-3 group">
                  <span className="text-emerald-200">•</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:underline underline-offset-4 decoration-emerald-200 font-semibold break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                    className="opacity-80 hover:opacity-100 text-xs px-2 py-0.5 bg-black/20 rounded-none border border-white/20 transition-opacity flex-shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social / Connect Action Row */}
          <div className="pt-8 mt-6 border-t border-white/20 flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black hover:bg-zinc-900 text-white text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp Chat</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-mono tracking-wider transition-colors border border-white/30"
            >
              LinkedIn Profile
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-mono tracking-wider transition-colors border border-white/30"
            >
              GitHub Portfolio
            </a>
          </div>
        </div>

        {/* Right Box: Pitch Black Box with Centered Brand Logo (matching PDF) */}
        <div className="bg-[#0D0D0D] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-zinc-800/80 relative">
          <div className="scale-110 sm:scale-125 md:scale-135 py-12 transition-transform duration-300 hover:scale-140">
            <BrandLogo
              size="lg"
              braceColor="#F4F0E8"
              textColor="#FFFFFF"
              subtitleColor="#94A3B8"
            />
          </div>

          <div className="absolute bottom-6 text-center text-xs font-mono text-zinc-600">
            &copy; {new Date().getFullYear()} Muhammad Awais Amjad • All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
