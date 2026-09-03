"use client";

import React, { useState } from "react";
import Image from "next/image";
import { softwareProjects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/work/ProjectModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCursor } from "@/hooks/useCursor";
import { ExternalLink, Code2, Cpu, CheckCircle2, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function SoftwareDevelopmentWorkPage() {
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
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase mb-4">
          <Terminal className="w-4 h-4" />
          SOFTWARE ENGINEERING PORTFOLIO
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-foreground max-w-4xl mx-auto">
          Built To Run Your Business. <br className="hidden sm:inline" />
          <span className="text-cyan-500">Not Just Represent It.</span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Real web applications, mobile products, and AI automations in active production with real users, live App Store listings, and verified API speedups.
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto">
          {[
            "Next.js App Router",
            "React Native",
            "TypeScript",
            "GraphQL",
            "MongoDB",
            "Payload CMS",
            "ONNX AI Runtime",
            "Google Gemini",
            "WebRTC",
            "Web Audio API",
            "Power BI Embedded",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-border text-foreground/80 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              onMouseEnter={() => setCursorVariant("view", "VIEW")}
              onMouseLeave={resetCursor}
              className="group rounded-3xl bg-surface border border-border hover:border-cyan-500 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.proof}
                  </span>
                </div>

                {/* Media Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-border-strong mb-6">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-display text-foreground group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>

                <p className="mt-1 text-sm font-semibold text-accent-crimson font-sans">
                  {project.headline}
                </p>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Badges */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-surface-muted border border-border text-foreground font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-500 flex items-center gap-1">
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex items-center gap-3">
                  {project.sourceUrl && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.sourceUrl, "_blank");
                      }}
                      className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </span>
                  )}
                  {project.liveUrl && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      className="text-xs font-mono text-accent-crimson hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Box */}
        <div className="p-8 sm:p-14 rounded-3xl bg-surface-elevated border border-border-strong text-center space-y-6 mt-16 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-display text-foreground">
            Have A Custom Software Platform To Build?
          </h2>
          <p className="text-base text-muted-foreground font-sans max-w-xl mx-auto">
            From technical scoping and API schema design to production deployment and mobile app store approvals — our Chandigarh engineering team handles the full lifecycle.
          </p>
          <MagneticButton href="/contact" size="lg" variant="primary">
            Start A Development Project →
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
