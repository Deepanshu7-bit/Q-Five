"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { videoProjects, Project } from "@/data/projects";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCursor } from "@/hooks/useCursor";
import { Play, Film, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function VideoWorkCard({
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

        {!video.videoSrc && video.image && (
          <Image
            src={video.image}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

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

        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-black/70 backdrop-blur-md text-white/90 px-3 py-1 rounded-full border border-white/10">
            {video.category}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
          <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-accent-crimson transition-colors">
            {video.title}
          </h2>
          <p className="text-xs font-mono text-neutral-300 mt-0.5 line-clamp-1">
            {video.headline || video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoEditingWorkPage() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenVideo = (video: Project) => {
    setActiveVideo(video);
    setLightboxOpen(true);
  };

  const verticalReels = videoProjects.filter((v) => v.aspect === "vertical");
  const horizontalSeries = videoProjects.filter((v) => v.aspect === "horizontal");

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-black text-white">
      {/* Filmstrip Header */}
      <div className="w-full flex justify-center gap-2 sm:gap-3 py-3 border-b border-white/10 bg-neutral-950 select-none overflow-hidden mb-12">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="w-3.5 h-5 rounded-sm bg-white/20 border border-white/10 flex-shrink-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
          <Film className="w-4 h-4" />
          IN-HOUSE CINEMATOGRAPHY &amp; POST-PRODUCTION
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-white max-w-4xl mx-auto">
          Every Frame, <span className="text-accent-crimson">Polished.</span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-sans">
          On-location shoots and kinetic product reels produced by Qfive — fashion, food &amp; beverage, luxury accessories, and documentary interview series. Hover to preview, click to play in 4K.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Vertical Reels */}
        <div>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
              01 · Vertical 9:16 Social &amp; Product Reels (Hover to Preview · Click to Play)
            </span>
            <span className="text-[10px] font-mono uppercase text-accent-crimson font-bold">
              TikTok · IG Reels · Shorts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticalReels.map((video) => (
              <VideoWorkCard key={video.id} video={video} onOpen={handleOpenVideo} />
            ))}
          </div>
        </div>

        {/* Section 2: Multi-Camera Interview Series */}
        <div>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
              02 · Multi-Camera Interview &amp; Documentary Series
            </span>
            <span className="text-[10px] font-mono uppercase text-accent-crimson font-bold">
              16:9 Broadcast Masters
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {horizontalSeries.map((video) => (
              <VideoWorkCard key={video.id} video={video} onOpen={handleOpenVideo} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900 border border-white/15 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-display text-white">
            Need Video Content That Actually Gets Watched?
          </h2>
          <p className="text-base text-neutral-400 font-sans max-w-xl mx-auto">
            From storyboard concepts and multi-camera shoots to kinetic cuts and final color grading in our Chandigarh studio.
          </p>
          <MagneticButton href="/contact" size="lg" variant="primary">
            Start A Video Production Project →
          </MagneticButton>
        </div>
      </div>

      {/* Filmstrip Footer */}
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
    </div>
  );
}
