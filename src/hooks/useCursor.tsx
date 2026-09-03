"use client";

import React, { createContext, useContext, useState } from "react";

export type CursorVariant = "default" | "pointer" | "view" | "play" | "drag" | "explore" | "hidden";

interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorVariant, setVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState<string>("");

  const setCursorVariant = (variant: CursorVariant, text?: string) => {
    setVariant(variant);
    setCursorText(text || "");
  };

  const resetCursor = () => {
    setVariant("default");
    setCursorText("");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariant, cursorText, setCursorVariant, resetCursor }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
