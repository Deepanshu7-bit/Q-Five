"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div className={cn("w-14 h-8 rounded-full border border-border bg-surface", className)} />
    );
  }

  const isDark = theme === "obsidian";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-between p-1 w-14 h-8 rounded-full border border-border-strong/60 bg-surface hover:border-accent-crimson/50 transition-colors focus:outline-none select-none cursor-pointer",
        className
      )}
      title={`Switch to ${isDark ? "Paper (Light)" : "Obsidian (Dark)"} theme`}
      aria-label={`Toggle theme: currently ${isDark ? "Obsidian Dark" : "Paper Light"}`}
    >
      {/* Visual background indicator text */}
      <span className="text-[9px] font-mono font-bold tracking-widest pl-1.5 text-muted-foreground">
        O
      </span>
      <span className="text-[9px] font-mono font-bold tracking-widest pr-1.5 text-muted-foreground">
        P
      </span>

      {/* Sliding tactile knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className={cn(
          "absolute top-1 bottom-1 w-6 rounded-full flex items-center justify-center shadow-md border transition-colors",
          isDark
            ? "left-1 bg-surface-elevated border-border text-foreground"
            : "right-1 bg-surface-elevated border-border text-foreground"
        )}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-accent-crimson" />
        ) : (
          <Sun className="w-3 h-3 text-amber-600" />
        )}
      </motion.div>
    </button>
  );
}
