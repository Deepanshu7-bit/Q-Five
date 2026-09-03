"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 320 }}
          className="relative z-10 w-full max-w-4xl bg-surface border border-border-strong rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with category badge & close button */}
          <div className="flex items-center justify-between p-6 border-b border-border-subtle bg-surface-muted/40">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-crimson border border-accent-crimson/30 bg-accent-crimson/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.industry && (
                <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                  {project.industry}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface-elevated border border-border text-foreground hover:bg-accent-crimson hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Main Header */}
            <div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-display text-foreground"
              >
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg font-medium text-accent-crimson font-sans">
                {project.headline}
              </p>
            </div>

            {/* Media Banner: Video Player or Image */}
            {project.videoSrc ? (
              <div
                className={`relative w-full rounded-2xl overflow-hidden border border-border-strong bg-black ${
                  project.aspect === "vertical" ? "aspect-[9/16] max-w-[340px] mx-auto" : "aspect-video"
                }`}
              >
                <video
                  src={project.videoSrc}
                  poster={project.videoPoster || project.image}
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            ) : project.image ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border-strong bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}

            {/* Metrics Ribbon if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-surface-muted border border-border-subtle">
                {project.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-black font-display text-foreground">
                      {m.value}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Case Study Narrative */}
            <div className="space-y-6 text-foreground/90 font-sans leading-relaxed">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-crimson" />
                  Overview
                </h3>
                <p className="text-base text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {project.challenge && (
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent-crimson" />
                    The Engineering Challenge
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent-crimson" />
                    Our Solution &amp; Architecture
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Outcomes Checklist */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Delivered Results &amp; Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent-crimson flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack Pills */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-surface-elevated border border-border-strong text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 border-t border-border-subtle bg-surface-muted/30 flex flex-wrap items-center justify-between gap-4">
            {project.proof && (
              <span className="text-xs font-mono font-bold text-accent-crimson flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-crimson" />
                {project.proof}
              </span>
            )}

            <div className="flex items-center gap-3 ml-auto">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase bg-surface-elevated border border-border hover:border-accent-crimson text-foreground transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase bg-accent text-accent-foreground hover:bg-accent-hover transition-colors shadow-md"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
