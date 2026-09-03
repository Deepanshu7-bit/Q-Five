import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import {
  TrendingUp,
  Terminal,
  Film,
  CheckCircle2,
  ArrowRight,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Marketing, Software Development & Video Production",
  description:
    "Explore Qfive's three core disciplines: quantitative paid advertising & brand architecture, custom software & mobile engineering, and full-scale video production.",
};

export default function ServicesPage() {
  const iconMap = {
    marketing: TrendingUp,
    software: Terminal,
    video: Film,
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-background text-foreground">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          WHAT WE DO · IN-HOUSE DISCIPLINES
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-foreground max-w-4xl mx-auto">
          Everything Your Brand Needs. <br className="hidden sm:inline" />
          <span className="text-accent-crimson">Under One Roof.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Three disciplines, one accountable team in Chandigarh — built so marketing,
          software development, and visual content never work against each other.
        </p>
      </div>

      <Marquee speed="fast" className="mb-20" />

      {/* Deep-Dive Discipline Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
        {servicesData.map((svc) => {
          const Icon = iconMap[svc.id];

          return (
            <section
              key={svc.id}
              id={svc.id === "software" ? "software-development" : svc.id === "video" ? "video-editing" : svc.id}
              className="scroll-mt-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-surface border border-border-strong shadow-2xl relative overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-black font-display text-accent-crimson">
                    {svc.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
                    Discipline
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-accent-crimson">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Headline & Philosophy */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-display text-foreground">
                    {svc.title}
                  </h2>
                  <p className="text-lg font-bold text-accent-crimson font-sans">
                    {svc.tagline}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans pt-2">
                    {svc.summary}
                  </p>
                  <div className="p-5 rounded-2xl bg-surface-muted border border-border-subtle text-sm text-foreground/90 font-sans italic">
                    &quot;{svc.philosophy}&quot;
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <MagneticButton href="/contact" size="md" variant="primary">
                      {svc.ctaText}
                    </MagneticButton>
                    <MagneticButton
                      href={
                        svc.id === "software"
                          ? "/work/software-development"
                          : svc.id === "video"
                          ? "/work/video-editing"
                          : "/work/marketing"
                      }
                      size="md"
                      variant="outline"
                    >
                      See {svc.title} Work
                    </MagneticButton>
                  </div>
                </div>

                {/* Sub-Services Matrix */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
                    Core Offerings &amp; Deliverables
                  </span>

                  {svc.subServices.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-6 rounded-2xl bg-surface-elevated border border-border-subtle hover:border-accent-crimson/50 transition-colors"
                    >
                      <h3 className="text-lg font-display font-bold uppercase text-foreground">
                        {sub.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-sans">
                        {sub.description}
                      </p>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-border-subtle">
                        {sub.deliverables.map((deliv, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] font-mono text-foreground/80 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-crimson flex-shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Process Bar */}
              <div className="mt-16 pt-12 border-t border-border-subtle">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block mb-6">
                  {svc.title} Execution Methodology
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {svc.process.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl bg-surface-muted/50 border border-border-subtle"
                    >
                      <span className="text-xs font-mono font-bold text-accent-crimson block mb-2">
                        STEP {step.step}
                      </span>
                      <h4 className="text-sm font-display font-bold uppercase text-foreground">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-muted-foreground font-sans">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
