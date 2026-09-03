"use client";

import React, { useState } from "react";
import Image from "next/image";
import { marketingProjects, Project } from "@/data/projects";
import { verifiedClients } from "@/data/clients";
import { ProjectModal } from "@/components/work/ProjectModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCursor } from "@/hooks/useCursor";
import { TrendingUp, BarChart3, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function MarketingWorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  const handleOpenModal = (p: Project) => {
    setActiveProject(p);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
          <TrendingUp className="w-4 h-4" />
          PERFORMANCE MARKETING PORTFOLIO
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-foreground max-w-4xl mx-auto">
          Get Seen. <br className="hidden sm:inline" />
          <span className="text-accent-crimson">Get Recognized.</span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Meta and Google Ads campaigns across real estate, healthcare, study abroad, e-commerce, and electronics — backed by 15+ years of performance advertising craft.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-10 p-4 rounded-3xl bg-surface border border-border">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black font-display text-foreground">15+</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground block">Years Experience</span>
          </div>
          <div className="text-center border-x border-border">
            <span className="text-2xl sm:text-3xl font-black font-display text-foreground">9+</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground block">Industries Served</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black font-display text-foreground">100%</span>
            <span className="text-[10px] font-mono uppercase text-muted-foreground block">In-House Funnels</span>
          </div>
        </div>
      </div>

      {/* Marketing Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              onMouseEnter={() => setCursorVariant("view", "VIEW")}
              onMouseLeave={resetCursor}
              className="group rounded-3xl bg-surface border border-border hover:border-accent-crimson transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-md hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-crimson">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {project.industry}
                  </span>
                </div>

                <h2 className="text-2xl font-black uppercase tracking-tight font-display text-foreground group-hover:text-accent-crimson transition-colors">
                  {project.title}
                </h2>

                <p className="mt-1 text-xs sm:text-sm font-semibold text-accent-crimson font-sans">
                  {project.headline}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>

                {project.outcomes && (
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-border-subtle">
                    {project.outcomes.map((out, idx) => (
                      <li key={idx} className="text-xs font-sans text-foreground/85 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-crimson flex-shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">CAMPAIGN SYSTEM</span>
                <span className="text-accent-crimson font-bold uppercase flex items-center gap-1">
                  View Framework <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Client Logo Wall */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border-strong mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-crimson">
              Verified Brand Wall
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-foreground mt-2">
              Clients Marketed By Qfive
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {verifiedClients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-elevated border border-border hover:border-accent-crimson transition-all min-h-[100px]"
              >
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={130}
                    height={44}
                    className="max-h-9 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <span className="text-sm font-display font-black uppercase text-foreground/90">
                    {client.name}
                  </span>
                )}
                <span className="text-[9px] font-mono text-muted-foreground uppercase mt-2">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-surface-elevated border border-border-strong text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-display text-foreground">
            Ready For Leads That Actually Convert?
          </h2>
          <p className="text-base text-muted-foreground font-sans max-w-xl mx-auto">
            Let&apos;s build structured Meta and Google Ads funnels paired with high-converting creative that turns advertising budget into verified revenue.
          </p>
          <MagneticButton href="/contact" size="lg" variant="primary">
            Start A Marketing Campaign →
          </MagneticButton>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
