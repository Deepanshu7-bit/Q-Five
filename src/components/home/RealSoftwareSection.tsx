"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectModal } from "@/components/work/ProjectModal";
import { softwareProjects, Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function RealSoftwareSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (p: Project) => {
    setActiveProject(p);
    setModalOpen(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="CHAPTER 04"
          eyebrow="Software Engineering"
          title="Real Products."
          highlightTitle="Real Users. Real Systems."
          description="We engineer production-grade platforms with deep technical complexity — from on-device AI neural networks and sub-15ms WebRTC audio engines to multi-tenant healthcare analytics."
        />

        {/* Featured Software Products Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {softwareProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group rounded-3xl bg-surface border border-border hover:border-cyan-500/80 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-md hover:shadow-2xl"
            >
              <div>
                {/* Header Tag & Proof */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.proof}
                  </span>
                </div>

                {/* Media preview */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-border-strong mb-6">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-display text-foreground group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-accent-crimson font-sans">
                  {project.headline}
                </p>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-surface-muted border border-border text-foreground/90 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-500 flex items-center gap-1">
                  <span>Architecture Details</span>
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
                      <span>Code</span>
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

        {/* View all software link */}
        <div className="mt-16 text-center">
          <MagneticButton href="/work/software-development" size="lg" variant="primary">
            See All 12+ Software Platforms Shipped →
          </MagneticButton>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
