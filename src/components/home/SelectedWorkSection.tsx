"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectModal } from "@/components/work/ProjectModal";
import { allProjects, Discipline, Project } from "@/data/projects";
import { useCursor } from "@/hooks/useCursor";
import { ArrowUpRight, ExternalLink, Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SelectedWorkSection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | Discipline>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  const filteredProjects = allProjects.filter((p) => {
    if (selectedFilter === "all") return p.featured;
    return p.discipline === selectedFilter;
  });

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-surface text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeading
            chapter="CHAPTER 03"
            eyebrow="Portfolio & Proof"
            title="Selected Work."
            highlightTitle="Craft In Production."
            description="Real web applications, mobile platforms, performance marketing engines, and video productions shipped for real clients."
            className="mb-0"
          />

          {/* Editorial Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-surface-elevated border border-border self-start lg:self-end">
            {(
              [
                { id: "all", label: "Featured" },
                { id: "software", label: "Software" },
                { id: "marketing", label: "Marketing" },
                { id: "video", label: "Video" },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all select-none cursor-pointer",
                  selectedFilter === filter.id
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.slice(0, 6).map((project) => {
            const isVideo = project.discipline === "video";

            return (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                onMouseEnter={() =>
                  setCursorVariant(isVideo ? "play" : "view", isVideo ? "PLAY" : "VIEW")
                }
                onMouseLeave={resetCursor}
                className="group relative flex flex-col rounded-3xl bg-surface-elevated border border-border hover:border-accent-crimson transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
              >
                {/* Media Image Aspect */}
                <div
                  className={cn(
                    "relative w-full bg-black overflow-hidden",
                    project.aspect === "vertical" ? "aspect-[4/5]" : "aspect-[16/10]"
                  )}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  )}

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Discipline Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full border border-border">
                      {project.category}
                    </span>
                  </div>

                  {/* Video Play Overlay */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* External Live indicator if exists */}
                  {project.liveUrl && (
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface-elevated/90 backdrop-blur-md text-foreground flex items-center justify-center border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-display text-foreground group-hover:text-accent-crimson transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-sans text-muted-foreground line-clamp-2">
                      {project.headline || project.description}
                    </p>
                  </div>

                  {/* Tech stack badges if software */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-muted border border-border text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-muted text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Proof footer note */}
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-crimson font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-crimson" />
                      {project.proof || "Production Grade"}
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1 uppercase font-bold tracking-wider">
                      Read Case Study <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work CTA */}
        <div className="mt-16 text-center">
          <MagneticButton href="/work" size="lg" variant="primary">
            Explore All Case Studies &amp; Projects →
          </MagneticButton>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
