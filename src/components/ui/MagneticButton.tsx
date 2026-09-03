"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCursor } from "@/hooks/useCursor";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorVariant, resetCursor } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    resetCursor();
  };

  const variantStyles = {
    primary:
      "bg-accent text-accent-foreground border border-accent-hover hover:bg-accent-hover shadow-lg shadow-accent/15",
    secondary:
      "bg-surface-elevated text-foreground border border-border-strong hover:border-accent-crimson",
    outline:
      "bg-transparent text-foreground border border-border-strong hover:border-accent-crimson hover:bg-surface/50",
    ghost:
      "bg-transparent text-foreground hover:text-accent-crimson hover:bg-surface-muted/50",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 gap-3",
    lg: "text-sm sm:text-base px-7 sm:px-8 py-4 sm:py-4.5 gap-4",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setCursorVariant("pointer")}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={cn(
        "group relative inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full select-none cursor-pointer transition-colors duration-300",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 pointer-events-none cursor-not-allowed",
        className
      )}
    >
      <span className="relative z-10 font-mono flex items-center font-bold">
        {children}
      </span>
      {showArrow && (
        <span className="relative z-10 w-6 h-6 rounded-full bg-foreground/10 text-foreground flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block border-0 bg-transparent p-0">
      {content}
    </button>
  );
}
