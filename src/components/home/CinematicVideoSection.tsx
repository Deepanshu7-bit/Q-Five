"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { videoProjects, Project } from "@/data/projects";
import { useCursor } from "@/hooks/useCursor";
import { Play, Film, Sparkles, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

function VideoCard({
  video,
  onOpen,
}: {
  video: Project;
  onOpen: (v: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorVariant("play", "PLAY");
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetCursor();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isVertical = video.aspect === "vertical";

  return (
    <div
      onClick={() => onOpen(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col cursor-pointer"
    >
      <div
        className={cn(
          "relative w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/20 group-hover:border-accent-crimson transition-all duration-300 shadow-2xl",
          isVertical ? "aspect-[9/16]" : "aspect-video"
        )}
      >
        {/* Video Element for Smooth Inline Preview */}
        {video.videoSrc && (
          <video
            ref={videoRef}
            src={video.videoSrc}
            poster={video.videoPoster || video.image}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Fallback image if no videoSrc */}
        {!video.videoSrc && video.image && (
          <Image
            src={video.image}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

        {/* Play Button Indicator Node */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={cn(
              "w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl transform transition-all duration-300",
              isHovered ? "scale-115 bg-accent-crimson" : "opacity-90"
            )}
          >
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Top category badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-black/75 backdrop-blur-md text-white/90 px-3 py-1 rounded-full border border-white/10">
            {video.category}
          </span>
        </div>

        {/* Bottom text metadata */}
        <div className="absolute bottom-4 left-4 right-4 text-left z-10 pointer-events-none">
          <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-accent-crimson transition-colors">
            {video.title}
          </h3>
          <p className="text-xs font-mono text-neutral-300 mt-0.5 line-clamp-1">
            {video.headline || video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CinematicVideoSection() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenVideo = (video: Project) => {
    setActiveVideo(video);
    setLightboxOpen(true);
  };

  const verticalReels = videoProjects.filter((v) => v.aspect === "vertical");
  const horizontalSeries = videoProjects.filter((v) => v.aspect === "horizontal");

  return (
    <section className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      {/* Filmstrip sprockets header */}
      <div className="w-full flex justify-center gap-2 sm:gap-3 py-3 border-b border-white/10 bg-neutral-950 select-none overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="w-3.5 h-5 rounded-sm bg-white/20 border border-white/10 flex-shrink-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
            <Film className="w-4 h-4" />
            CHAPTER 06 · IN-HOUSE CINEMATOGRAPHY
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-white">
            Every Frame, <span className="text-accent-crimson">Polished.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-sans max-w-xl mx-auto">
            Full video and photo production in Chandigarh — concept, shoot, kinetic cut,
            sound design, and color grading so your content looks as sharp as the brand behind it.
          </p>
        </div>

        {/* 9:16 Vertical Reel Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
              01 · Vertical Short-Form Reels (Fashion · F&amp;B · Products)
            </span>
            <span className="text-[10px] font-mono uppercase text-accent-crimson font-bold">
              9:16 Kinetic Cuts · Click to Play 4K
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {verticalReels.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} onOpen={handleOpenVideo} />
            ))}
          </div>
        </div>

        {/* 16:9 Multi-Camera Interview & Vox-Pop Showcase */}
        <div>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
              02 · Multi-Camera Series &amp; Documentary (Chandigarh Street Series)
            </span>
            <span className="text-[10px] font-mono uppercase text-accent-crimson font-bold">
              16:9 Master Audio · Click to Play
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {horizontalSeries.slice(0, 2).map((video) => (
              <VideoCard key={video.id} video={video} onOpen={handleOpenVideo} />
            ))}
          </div>
        </div>

        {/* Video CTA */}
        <div className="mt-16 text-center">
          <MagneticButton href="/work/video-editing" size="lg" variant="primary">
            Watch Full Video &amp; Reel Showcase →
          </MagneticButton>
        </div>
      </div>

      {/* Filmstrip sprockets footer */}
      <div className="w-full flex justify-center gap-2 sm:gap-3 py-3 border-t border-white/10 bg-neutral-950 select-none overflow-hidden mt-20">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="w-3.5 h-5 rounded-sm bg-white/20 border border-white/10 flex-shrink-0" />
        ))}
      </div>

      <VideoLightbox
        project={activeVideo}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
