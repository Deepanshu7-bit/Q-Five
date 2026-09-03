"use client";

import React, { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CheckCircle2, AlertCircle, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Marketing & Paid Ads",
  "Software Development",
  "Video Production",
  "AI & Automations",
  "Brand Identity & Design",
  "Full-Stack Suite (All 3)",
];

const budgetOptions = [
  "₹1.5L – ₹3L ($2k - $4k)",
  "₹3L – ₹7L ($4k - $9k)",
  "₹7L – ₹15L ($9k - $20k)",
  "₹15L+ ($20k+)",
  "Not sure yet",
];

const timelineOptions = ["Immediately (<2 weeks)", "1 - 2 Months", "3+ Months", "Ongoing Retainer"];

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    botcheck: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget,
          timeline: selectedTimeline,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission failed. Please email hello@qfive.in directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email hello@qfive.in directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-emerald-500/30 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black font-display uppercase tracking-tight text-foreground">
          Inquiry Received.
        </h3>
        <p className="text-base text-muted-foreground font-sans max-w-md mx-auto">
          Thank you for reaching out, <strong className="text-foreground">{formData.name}</strong>. A partner from our Chandigarh studio will review your requirements and respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", company: "", message: "", botcheck: false });
            setSelectedServices([]);
          }}
          className="text-xs font-mono font-bold uppercase tracking-wider text-accent-crimson hover:underline"
        >
          Submit Another Inquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-surface border border-border-strong shadow-2xl space-y-8 select-none"
    >
      {/* Botcheck hidden field */}
      <input
        type="checkbox"
        name="botcheck"
        checked={formData.botcheck}
        onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Step 1: Discipline / Services Selectors */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
          01 · What do you need help with? <span className="text-accent-crimson">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {serviceOptions.map((svc) => {
            const isSelected = selectedServices.includes(svc);
            return (
              <button
                key={svc}
                type="button"
                onClick={() => toggleService(svc)}
                className={cn(
                  "p-3.5 rounded-2xl border text-xs font-mono font-medium text-left transition-all duration-200 flex items-center justify-between cursor-pointer",
                  isSelected
                    ? "bg-accent/10 border-accent text-accent-crimson font-bold shadow-sm"
                    : "bg-surface-muted/50 border-border text-foreground hover:bg-surface-elevated"
                )}
              >
                <span>{svc}</span>
                <span
                  className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center text-[10px]",
                    isSelected
                      ? "border-accent bg-accent text-white"
                      : "border-border text-transparent"
                  )}
                >
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Contact Details */}
      <div className="space-y-4">
        <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
          02 · Tell us about yourself
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground uppercase">Your Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Aman Sharma"
              className="w-full px-4 py-3 rounded-2xl bg-surface-muted border border-border text-foreground text-sm font-sans focus:outline-none focus:border-accent-crimson"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground uppercase">Work Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-2xl bg-surface-muted border border-border text-foreground text-sm font-sans focus:outline-none focus:border-accent-crimson"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground uppercase">Company / Brand Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Acme Health"
              className="w-full px-4 py-3 rounded-2xl bg-surface-muted border border-border text-foreground text-sm font-sans focus:outline-none focus:border-accent-crimson"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted-foreground uppercase">Phone Number (Optional)</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-2xl bg-surface-muted border border-border text-foreground text-sm font-sans focus:outline-none focus:border-accent-crimson"
            />
          </div>
        </div>
      </div>

      {/* Step 3: Budget & Timeline Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
            Estimated Budget (Optional)
          </label>
          <div className="flex flex-wrap gap-1.5">
            {budgetOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedBudget(opt)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer",
                  selectedBudget === opt
                    ? "bg-foreground text-background font-bold shadow"
                    : "bg-surface-muted border border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
            Target Timeline (Optional)
          </label>
          <div className="flex flex-wrap gap-1.5">
            {timelineOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedTimeline(opt)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer",
                  selectedTimeline === opt
                    ? "bg-foreground text-background font-bold shadow"
                    : "bg-surface-muted border border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 4: Project Scope Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
          03 · Project Details &amp; Goals
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us what you're building, growing, or trying to solve..."
          className="w-full px-4 py-3 rounded-2xl bg-surface-muted border border-border text-foreground text-sm font-sans focus:outline-none focus:border-accent-crimson resize-none"
        />
      </div>

      {/* Error notification if any */}
      {status === "error" && (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-500 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <MagneticButton
          type="submit"
          size="lg"
          variant="primary"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? "Submitting Inquiry..." : "Start The Conversation →"}
        </MagneticButton>

        <span className="text-xs font-mono text-muted-foreground">
          Average response: &lt; 24 hours
        </span>
      </div>
    </form>
  );
}
