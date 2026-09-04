"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  {
    name: "Work",
    href: "/work",
    subLinks: [
      { name: "All Work", href: "/work" },
      { name: "Marketing", href: "/work/marketing" },
      { name: "Software Development", href: "/work/software-development" },
      { name: "Video Production", href: "/work/video-editing" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-lg"
            : "py-5 sm:py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 bg-surface/85 border border-border-strong/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.subLinks) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors py-1",
                        isActive
                          ? "text-accent-crimson font-black"
                          : "text-foreground font-semibold hover:text-accent-crimson"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 opacity-70" />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {workDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-4 mt-2 w-56 p-2 rounded-2xl bg-surface-elevated border border-border-strong shadow-2xl backdrop-blur-2xl"
                        >
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={cn(
                                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors",
                                pathname === sub.href
                                  ? "text-accent-crimson font-bold bg-surface"
                                  : "text-foreground font-semibold hover:text-accent-crimson hover:bg-surface-muted"
                              )}
                            >
                              <span>{sub.name}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-60" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-mono font-bold uppercase tracking-wider transition-colors relative py-1",
                    isActive
                      ? "text-accent-crimson font-black"
                      : "text-foreground font-semibold hover:text-accent-crimson"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-crimson rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Switcher & Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <ThemeSwitcher />
            <MagneticButton href="/contact" size="sm" variant="primary">
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Burger / Control Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-surface border border-border text-foreground hover:text-accent-crimson transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-between p-6 sm:p-10 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground border-b border-border-subtle pb-3">
                Navigation
              </span>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      href={link.href}
                      className="text-3xl sm:text-4xl font-display font-black uppercase text-foreground hover:text-accent-crimson transition-colors py-1 flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
                    </Link>
                    {link.subLinks && (
                      <div className="flex flex-wrap gap-2 mt-2 ml-2 pl-3 border-l-2 border-border-strong">
                        {link.subLinks.slice(1).map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground py-1 px-2 rounded bg-surface border border-border-subtle"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="flex flex-col gap-5 pt-6 border-t border-border-subtle">
              <MagneticButton href="/contact" size="md" variant="primary" className="w-full">
                Start A Project →
              </MagneticButton>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Plot 25, Ind. Area Phase I, CHD</span>
                <a href="mailto:hello@qfive.in" className="hover:text-accent-crimson">
                  hello@qfive.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
