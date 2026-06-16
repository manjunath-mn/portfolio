"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sections } from "@/data/sections";
import { SectionContent } from "./SectionContent";

export function StageManager() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeId)!;
  const otherSections = sections.filter((s) => s.id !== activeId);

  return (
    <div className="flex h-screen w-full gap-6 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6">
      {/* Thumbnail stack */}
      <div className="flex w-40 flex-col gap-4 sm:w-48">
        {otherSections.map((section) => (
          <motion.button
            key={section.id}
            layoutId={`window-${section.id}`}
            onClick={() => setActiveId(section.id)}
            className="flex aspect-[4/3] flex-col justify-between rounded-xl border border-white/10 bg-zinc-800/60 p-3 text-left shadow-lg backdrop-blur-md transition-colors hover:bg-zinc-700/60"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: section.accent }}
            />
            <div>
              <p className="text-sm font-medium text-zinc-100">{section.title}</p>
              <p className="text-xs text-zinc-400">{section.subtitle}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Main stage */}
      <div className="relative flex-1">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSection.id}
            layoutId={`window-${activeSection.id}`}
            className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-xl"
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span
                className="ml-3 h-2 w-2 rounded-full"
                style={{ backgroundColor: activeSection.accent }}
              />
              <span className="text-sm font-medium text-zinc-300">
                {activeSection.title}
              </span>
            </div>
            <motion.div
              key={`content-${activeSection.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex-1 overflow-y-auto p-8 text-zinc-100"
            >
              <SectionContent section={activeSection} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
