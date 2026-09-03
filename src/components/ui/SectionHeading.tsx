import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  chapter?: string;
  title: string;
  highlightTitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  chapter,
  title,
  highlightTitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignMap = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignMap[align], className)}>
      {/* Eyebrow with decorative dot and chapter indicator */}
      <div className="flex items-center gap-3 mb-4">
        {chapter && (
          <span className="text-[11px] font-mono font-bold tracking-widest text-muted-foreground uppercase border border-border px-2 py-0.5 rounded">
            {chapter}
          </span>
        )}
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-accent-crimson">
          <span className="w-2 h-2 rounded-full bg-accent-crimson animate-pulse-subtle" />
          {eyebrow}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight font-display text-foreground leading-[1.05]">
        {title}
        {highlightTitle && (
          <>
            {" "}
            <span className="text-accent-crimson">{highlightTitle}</span>
          </>
        )}
      </h2>

      {/* Narrative summary paragraph */}
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
