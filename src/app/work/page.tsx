"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allProjects, Discipline, Project } from "@/data/projects";
import { ProjectModal } from "@/components/work/ProjectModal";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { useCursor } from "@/hooks/useCursor";
import { ExternalLink, Play, ArrowUpRight, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<"all" | Discipline>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  const filtered = allProjects.filter((p) => {
    const matchesDiscipline =
      selectedDiscipline === "all" || p.discipline === selectedDiscipline;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.technologies && p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesDiscipline && matchesSearch;
  });

  const handleProjectClick = (p: Project) => {
    if (p.discipline === "video") {
      setActiveProject(p);
      setLightboxOpen(true);
    } else {
      setActiveProject(p);
      setModalOpen(true);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-background text-foreground">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          MASTER PORTFOLIO · ALL WORK
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-foreground max-w-4xl mx-auto">
          Craft In Production. <br className="hidden sm:inline" />
          <span className="text-accent-crimson">Selected Index.</span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          A comprehensive record of software applications, performance marketing campaigns, and cinematic video productions delivered by Qfive.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar: Discipline Filters + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-3xl bg-surface border border-border mb-12 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {(
              [
                { id: "all", label: "All Disciplines" },
                { id: "software", label: "Software Development" },
                { id: "marketing", label: "Marketing" },
                { id: "video", label: "Video Production" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDiscipline(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all select-none cursor-pointer",
                  selectedDiscipline === tab.id
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by stack, industry..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-muted border border-border text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-crimson"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => {
            const isVideo = project.discipline === "video";

            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() =>
                  setCursorVariant(isVideo ? "play" : "view", isVideo ? "PLAY" : "VIEW")
                }
                onMouseLeave={resetCursor}
                className="group relative flex flex-col rounded-3xl bg-surface border border-border hover:border-accent-crimson transition-all duration-300 overflow-hidden cursor-pointer shadow-md hover:shadow-2xl"
              >
                {/* Media Aspect Container */}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Discipline Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-background/85 backdrop-blur-md text-foreground px-3 py-1 rounded-full border border-border">
                      {project.category}
                    </span>
                  </div>

                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface-elevated/90 backdrop-blur-md text-foreground flex items-center justify-center border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-display text-foreground group-hover:text-accent-crimson transition-colors">
                      {project.title}
                    </h2>
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

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-crimson font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-crimson" />
                      {project.proof || "Delivered"}
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1 uppercase font-bold tracking-wider">
                      {isVideo ? "Watch Reel" : "Read Case Study"} <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="p-16 text-center rounded-3xl bg-surface border border-border-subtle">
            <p className="text-lg font-mono text-muted-foreground">
              No projects found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDiscipline("all");
              }}
              className="mt-4 text-xs font-mono font-bold uppercase text-accent-crimson hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Video Lightbox */}
      <VideoLightbox
        project={activeProject}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
