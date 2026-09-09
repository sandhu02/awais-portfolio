import React from "react";

/**
 * Muhammad Awais Brand Logo with Curly Brace Emblem
 */
export function BrandLogo({
  braceColor = "#FDFBF7",
  textColor = "#FFFFFF",
  subtitleColor = "#CBD5E1",
  size = "md",
}: {
  braceColor?: string;
  textColor?: string;
  subtitleColor?: string;
  size?: "sm" | "md" | "lg";
}) {
  const isLarge = size === "lg";
  const isSm = size === "sm";

  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none">
      {/* Signature Curly Brace Emblem */}
      <span
        className={`font-mono font-bold leading-none select-none transition-transform duration-300 hover:scale-110 ${
          isLarge
            ? "text-6xl sm:text-7xl md:text-8xl"
            : isSm
            ? "text-3xl sm:text-4xl"
            : "text-4xl sm:text-5xl md:text-6xl"
        }`}
        style={{ color: braceColor }}
      >
        &#123;
      </span>

      <div className="flex flex-col justify-center -space-y-0.5 sm:-space-y-1">
        <span
          className={`font-black tracking-tight leading-tight uppercase font-sans ${
            isLarge
              ? "text-2xl sm:text-3xl md:text-4xl"
              : isSm
              ? "text-base sm:text-lg"
              : "text-xl sm:text-2xl md:text-3xl"
          }`}
          style={{ color: textColor }}
        >
          Muhammad<br />Awais
        </span>
        <span
          className={`font-bold tracking-[0.22em] uppercase font-mono ${
            isLarge ? "text-xs sm:text-sm" : isSm ? "text-[9px]" : "text-[10px] sm:text-xs"
          }`}
          style={{ color: subtitleColor }}
        >
          ANDROID DEVELOPER
        </span>
      </div>
    </div>
  );
}

/**
 * Service Arrow: Native Android Wave
 * Sinusoidal oscilloscope wave leading to right-pointing arrow
 */
export function ServiceArrowWave({ className = "w-full h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M 10 50 C 35 50, 45 15, 65 15 C 85 15, 95 85, 115 85 C 135 85, 145 15, 165 15 C 185 15, 195 85, 215 85 C 235 85, 245 50, 275 50 H 300"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 285 36 L 306 50 L 285 64"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Service Arrow: Front End Stepped Stairs
 * Ascending staircase line leading to directional arrow
 */
export function ServiceArrowStairs({ className = "w-full h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Staircase going up right, ending in arrow pointing left or right as in PDF */}
      <path
        d="M 30 90 L 10 90 M 10 90 L 22 78 M 10 90 L 22 102 M 30 90 H 80 V 65 H 130 V 40 H 180 V 20 H 250"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Service Arrow: Back End Looping Roller-Coaster
 * Smooth sweeping curved loop ending in an arrow pointing right
 */
export function ServiceArrowLoop({ className = "w-full h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M 10 30 C 50 40, 110 95, 140 95 C 180 95, 200 45, 175 25 C 150 5, 130 50, 170 65 C 210 75, 260 55, 305 45"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 288 32 L 310 44 L 292 58"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Projects Section Connector: Curved Emerald Green Arrow
 * Sweeping curved line pointing into the project directory
 */
export function ProjectCurvedArrow({ className = "w-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 450 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 10 40 C 220 40, 260 80, 260 170 H 420"
        stroke="#169458"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 398 152 L 426 170 L 398 188"
        stroke="#169458"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3D Isometric Wireframe: Polyhedron (Project 1 - JsonLauncher)
 */
export function WireframePolyhedron({
  color = "#E07A5F",
  size = 56,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 hover:rotate-12 hover:scale-110"
    >
      {/* Outer Hexagonal Facet Silhouette */}
      <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke={color} strokeWidth="2.5" />
      {/* Inner Central Hexagon */}
      <polygon points="50,26 72,38 72,62 50,74 28,62 28,38" stroke={color} strokeWidth="2" />
      {/* Isometric Interconnecting Edges */}
      <line x1="50" y1="6" x2="50" y2="26" stroke={color} strokeWidth="2" />
      <line x1="88" y1="28" x2="72" y2="38" stroke={color} strokeWidth="2" />
      <line x1="88" y1="72" x2="72" y2="62" stroke={color} strokeWidth="2" />
      <line x1="50" y1="94" x2="50" y2="74" stroke={color} strokeWidth="2" />
      <line x1="12" y1="72" x2="28" y2="62" stroke={color} strokeWidth="2" />
      <line x1="12" y1="28" x2="28" y2="38" stroke={color} strokeWidth="2" />
      {/* Inner diagonals */}
      <line x1="50" y1="50" x2="50" y2="26" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="50" y1="50" x2="72" y2="62" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="50" y1="50" x2="28" y2="62" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

/**
 * 3D Isometric Wireframe: Octahedron (Project 2 - Signstream)
 */
export function WireframeOctahedron({
  color = "#E07A5F",
  size = 56,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 hover:rotate-12 hover:scale-110"
    >
      {/* Top Pyramid Apex */}
      <line x1="50" y1="8" x2="16" y2="50" stroke={color} strokeWidth="2.5" />
      <line x1="50" y1="8" x2="84" y2="50" stroke={color} strokeWidth="2.5" />
      <line x1="50" y1="8" x2="50" y2="50" stroke={color} strokeWidth="2" />
      {/* Bottom Pyramid Apex */}
      <line x1="50" y1="92" x2="16" y2="50" stroke={color} strokeWidth="2.5" />
      <line x1="50" y1="92" x2="84" y2="50" stroke={color} strokeWidth="2.5" />
      <line x1="50" y1="92" x2="50" y2="50" stroke={color} strokeWidth="2" />
      {/* Equatorial Belt / Diamond */}
      <polygon points="50,34 84,50 50,66 16,50" stroke={color} strokeWidth="2" />
      <line x1="16" y1="50" x2="84" y2="50" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
}

/**
 * 3D Isometric Wireframe: Hourglass / Dual Pyramids (Project 3 - JsonClock)
 */
export function WireframeHourglass({
  color = "#E07A5F",
  size = 56,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 hover:rotate-12 hover:scale-110"
    >
      {/* Top Frame */}
      <polygon points="20,15 80,15 65,30 35,30" stroke={color} strokeWidth="2.2" />
      {/* Upper Cross Diagonals */}
      <line x1="20" y1="15" x2="50" y2="50" stroke={color} strokeWidth="2.2" />
      <line x1="80" y1="15" x2="50" y2="50" stroke={color} strokeWidth="2.2" />
      <line x1="35" y1="30" x2="50" y2="50" stroke={color} strokeWidth="1.8" />
      <line x1="65" y1="30" x2="50" y2="50" stroke={color} strokeWidth="1.8" />
      {/* Lower Cross Diagonals */}
      <line x1="50" y1="50" x2="20" y2="85" stroke={color} strokeWidth="2.2" />
      <line x1="50" y1="50" x2="80" y2="85" stroke={color} strokeWidth="2.2" />
      <line x1="50" y1="50" x2="35" y2="70" stroke={color} strokeWidth="1.8" />
      <line x1="50" y1="50" x2="65" y2="70" stroke={color} strokeWidth="1.8" />
      {/* Bottom Frame */}
      <polygon points="20,85 80,85 65,70 35,70" stroke={color} strokeWidth="2.2" />
      {/* Central Intersection Ring */}
      <circle cx="50" cy="50" r="3" fill={color} />
    </svg>
  );
}
