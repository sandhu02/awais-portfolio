import HeaderHero from "@/components/HeaderHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#0D0D0D] text-white selection:bg-[#169458] selection:text-white">
      {/* 1. Hero & Header Section (Exact PDF Top) */}
      <HeaderHero />

      {/* 2. About Awais Section (Exact PDF Row 2) */}
      <AboutSection />

      {/* 3. Services Offered Section (Exact PDF Row 3) */}
      <ServicesSection />

      {/* 4. Skills & Specialization Matrix (Requested skills section) */}
      <SkillsSection />

      {/* 5. Projects Section (Exact PDF Row 4 + Rich Screenshots & Links Showcase) */}
      <ProjectsSection />

      {/* 6. Contact & Footer Section (Exact PDF Row 5) */}
      <ContactFooter />
    </main>
  );
}
