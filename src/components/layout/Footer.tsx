"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { agencyContactInfo } from "@/data/clients";
import { ArrowUpRight, MapPin, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* ─── 01. PRE-FOOTER CTA CARD SECTION (Visually distinct from Footer) ─── */}
      <section className="relative py-12 sm:py-16 bg-background border-t border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-surface border border-border-strong/50 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-lg shadow-black/[0.02] dark:shadow-none">
            {/* Ambient accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-accent-crimson/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Let&apos;s Build Together
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-display text-foreground leading-[1.08]">
                  Let&apos;s Build Something <br className="hidden sm:block" />
                  <span className="text-accent-crimson">Worth Remembering.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl font-sans">
                  Marketing, software engineering, and video production under one
                  accountable in-house team in Chandigarh.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 relative z-20 shrink-0">
                <MagneticButton href="/contact" size="md" variant="primary">
                  Start A Project
                </MagneticButton>
                <MagneticButton
                  href={agencyContactInfo.calendlyUrl}
                  size="md"
                  variant="outline"
                  showArrow={true}
                >
                  Book 30-Min Call
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. ACTUAL SITEMAP & NAVIGATION FOOTER ─── */}
      <footer className="relative bg-surface text-foreground border-t border-border-strong/50 overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Background Watermark QFIVE with calibrated contrast in light and dark mode */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 bottom-8 sm:bottom-12 flex items-center justify-center overflow-hidden z-0 leading-none transition-opacity duration-300"
          style={{ opacity: "var(--footer-watermark-opacity, 0.04)" }}
        >
          <span className="text-[17vw] font-black font-display tracking-tight text-foreground uppercase whitespace-nowrap">
            QFIVE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Multi-column sitemap grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-border-subtle">
            {/* Brand & Studio Summary */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <Logo size="md" />
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm font-sans">
                  A multidisciplinary digital studio headquartered in Chandigarh. We
                  bridge the gap between strategic marketing, enterprise software,
                  and high-production video.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border-subtle flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-accent-crimson flex-shrink-0" />
                  <span>{agencyContactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Mail className="w-3.5 h-3.5 text-accent-crimson flex-shrink-0" />
                  <a
                    href={`mailto:${agencyContactInfo.email}`}
                    className="hover:text-accent-crimson transition-colors"
                  >
                    {agencyContactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 1: Disciplines */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground border-b border-border-subtle pb-2">
                Disciplines
              </h3>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm font-sans">
                <li>
                  <Link
                    href="/services#marketing"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors flex items-center justify-between"
                  >
                    <span>Marketing</span>
                    <span className="text-[10px] font-mono text-muted-foreground">01</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#software-development"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors flex items-center justify-between"
                  >
                    <span>Software Development</span>
                    <span className="text-[10px] font-mono text-muted-foreground">02</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#video-editing"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors flex items-center justify-between"
                  >
                    <span>Video Production</span>
                    <span className="text-[10px] font-mono text-muted-foreground">03</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    All Capabilities →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Selected Work */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground border-b border-border-subtle pb-2">
                Selected Work
              </h3>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm font-sans">
                <li>
                  <Link
                    href="/work/software-development"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    Software Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/marketing"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/video-editing"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    Video &amp; Reel Showcase
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-accent-crimson hover:underline transition-colors font-medium"
                  >
                    Master Portfolio Index →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Studio & Navigation */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground border-b border-border-subtle pb-2">
                Studio
              </h3>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm font-sans">
                <li>
                  <Link
                    href="/about"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    About Qfive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors"
                  >
                    Project Planner
                  </Link>
                </li>
                <li>
                  <a
                    href={agencyContactInfo.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/85 hover:text-accent-crimson transition-colors inline-flex items-center gap-1"
                  >
                    <span>Book A Consultation</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright and social bars */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Qfive Digital &amp; Creative Agency. All
              rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {agencyContactInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-crimson transition-colors uppercase font-bold tracking-wider"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


