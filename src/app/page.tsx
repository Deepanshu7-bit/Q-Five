import { HeroSection } from "@/components/home/HeroSection";
import { Marquee } from "@/components/ui/Marquee";
import { DisciplinesSection } from "@/components/home/DisciplinesSection";
import { WhyQfiveSection } from "@/components/home/WhyQfiveSection";
import { CredibilityStats } from "@/components/home/CredibilityStats";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { RealSoftwareSection } from "@/components/home/RealSoftwareSection";
import { MarketingWallSection } from "@/components/home/MarketingWallSection";
import { CinematicVideoSection } from "@/components/home/CinematicVideoSection";
import { AboutTeaserSection } from "@/components/home/AboutTeaserSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Flagship Hero with animated vector logo mark */}
      <HeroSection />

      {/* Infinite Seamless Disciplines Marquee */}
      <Marquee speed="normal" />

      {/* 01 · Three Disciplines / One Team Interactive Switcher */}
      <DisciplinesSection />

      {/* 02 · Why Qfive Vertically Staged Narrative */}
      <WhyQfiveSection />

      {/* Verified Experience & Credibility Banner */}
      <CredibilityStats />

      {/* 03 · Selected Work Master Grid */}
      <SelectedWorkSection />

      {/* 04 · Real Software Development Showcase */}
      <RealSoftwareSection />

      {/* 05 · Marketing Industry Verticals & Client Logos */}
      <MarketingWallSection />

      {/* 06 · Cinematic Video Production Showcase */}
      <CinematicVideoSection />

      {/* 07 · About Qfive & Chandigarh Studio */}
      <AboutTeaserSection />
    </div>
  );
}
