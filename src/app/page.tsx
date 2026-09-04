import { HeroSection } from "@/components/home/HeroSection";
import { Marquee } from "@/components/ui/Marquee";
import { DisciplinesSection } from "@/components/home/DisciplinesSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { WhyQfiveSection } from "@/components/home/WhyQfiveSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01 · Flagship Hero with interactive 3D authentic logo emblem */}
      <HeroSection />

      {/* 02 · Infinite Client Logos & Discipline Ticker */}
      <Marquee speed="normal" />

      {/* 03 · The Three Disciplines (Marketing, Software, Video) */}
      <DisciplinesSection />

      {/* 04 · Selected Work Master Showcase (Interactive filterable grid) */}
      <SelectedWorkSection />

      {/* 05 · Why Qfive (Credibility metrics & In-House advantage) */}
      <WhyQfiveSection />
    </div>
  );
}

