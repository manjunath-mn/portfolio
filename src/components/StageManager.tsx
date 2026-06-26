"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { User, Briefcase, GraduationCap, Code2, Minimize2, Maximize2, X } from "lucide-react";
import { sections } from "@/data/sections";
import { SectionContent } from "./SectionContent";
import { LandingPage } from "./LandingPage";

/* ── Icons map ─────────────────────────────────── */
const SectionIcon = ({ id, size = 14 }: { id: string; size?: number }) => {
  if (id === "about")      return <User size={size} />;
  if (id === "experience") return <Briefcase size={size} />;
  if (id === "education")  return <GraduationCap size={size} />;
  if (id === "projects")   return <Code2 size={size} />;
  return null;
};

/* ── Styled components ─────────────────────────── */

const Root = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #18181b 0%, #09090b 60%, #000000 100%);
  padding: 1.5rem;
  gap: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    height: auto;
    min-height: 100vh;
  }

  @media (max-width: 640px) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

const ThumbnailStack = styled(motion.div)`
  display: flex;
  width: 11rem;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem;
  perspective: 700px;
  perspective-origin: right center;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    gap: 0.75rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
  }

  @media (max-width: 640px) {
    gap: 0.5rem;
  }
`;

const Thumbnail = styled(motion.button)<{ $active: boolean; $accent: string }>`
  display: flex;
  aspect-ratio: 4 / 3;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  border: 1px solid ${({ $active, $accent }) =>
    $active ? $accent : "rgba(255,255,255,0.12)"};
  background: ${({ $active }) =>
    $active ? "rgba(63,63,70,0.85)" : "rgba(39,39,42,0.65)"};
  padding: 0.75rem;
  text-align: left;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transform-style: preserve-3d;
  box-shadow: ${({ $active, $accent }) =>
    $active
      ? `0 0 0 1px ${$accent}33, 4px 4px 20px rgba(0,0,0,0.6), inset -2px 0 6px rgba(0,0,0,0.3)`
      : "4px 4px 16px rgba(0,0,0,0.5), inset -2px 0 6px rgba(0,0,0,0.3)"};
  flex-shrink: 0;

  @media (max-width: 1024px) {
    min-width: 9rem;
  }

  @media (max-width: 640px) {
    min-width: 8rem;
    aspect-ratio: 3 / 2;
    padding: 0.5rem;
  }
`;

const ThumbnailTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const AccentDot = styled.div<{ $color: string }>`
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const ThumbnailTitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #f4f4f5;
`;

const ThumbnailSubtitle = styled.p`
  margin: 0;
  font-size: 0.6875rem;
  color: #71717a;
  margin-top: 0.125rem;
`;

const Stage = styled(motion.div)`
  position: relative;
  flex: 1;
  perspective: 1200px;
  perspective-origin: left center;
  min-width: 0;

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  @media (max-width: 640px) {
    min-height: 350px;
  }
`;

const Window = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(24, 24, 27, 0.9);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.6875rem 1.25rem;
  flex-shrink: 0;
  user-select: none;
`;

const TrafficBtn = styled.button<{ $color: string }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.85;
  flex-shrink: 0;
  transition: opacity 0.15s ease, filter 0.15s ease;

  &:hover {
    opacity: 1;
    filter: brightness(1.15);
  }
`;

const TitleBarCenter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  color: #a1a1aa;
`;

const WindowTitle = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #d4d4d8;
`;

const TitleBarRight = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const ExpandBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  color: #71717a;
  font-size: 0.6875rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #d4d4d8;
  }

  @media (max-width: 640px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.625rem;
  }
`;

const ContentArea = styled(motion.div)<{ $expanded: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: ${({ $expanded }) => ($expanded ? "3rem 4rem" : "2rem")};
  color: #f4f4f5;
  font-size: ${({ $expanded }) => ($expanded ? "1.125rem" : "1rem")};
  transition: font-size 0.3s ease, padding 0.3s ease;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  @media (max-width: 1024px) {
    padding: ${({ $expanded }) => ($expanded ? "2rem 2.5rem" : "1.5rem")};
    font-size: ${({ $expanded }) => ($expanded ? "1rem" : "0.95rem")};
  }

  @media (max-width: 768px) {
    padding: ${({ $expanded }) => ($expanded ? "1.5rem 2rem" : "1.25rem")};
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    padding: ${({ $expanded }) => ($expanded ? "1rem 1.25rem" : "1rem")};
    font-size: 0.9rem;
  }
`;

const LandingWindow = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(24, 24, 27, 0.6);
  backdrop-filter: blur(20px);
  overflow: hidden;
`;

const windowVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 72 : -72,
    y: 10,
    scale: 0.92,
    rotateY: direction > 0 ? -10 : 10,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -56 : 56,
    y: -6,
    scale: 0.96,
    rotateY: direction > 0 ? 8 : -8,
    filter: "blur(4px)",
  }),
};

/* ── Component ─────────────────────────────────── */

export function StageManager() {
  const [activeId, setActiveId] = useState<string | null>("about");
  const [isExpanded, setIsExpanded] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(1);

  const activeSection = sections.find((s) => s.id === activeId) ?? null;

  const handleOpenSection = (id: string) => {
    const nextIndex = sections.findIndex((section) => section.id === id);
    const currentIndex = activeId ? sections.findIndex((section) => section.id === activeId) : -1;

    setTransitionDirection(nextIndex >= currentIndex ? 1 : -1);
    setActiveId(id);
  };

  const handleClose = () => {
    setActiveId(null);
    setIsExpanded(false);
  };

  const handleExpand = () => setIsExpanded((v) => !v);

  return (
    <Root>
      {/* Thumbnail stack — slides out on expand */}
      <AnimatePresence initial={false}>
        {!isExpanded && (
          <ThumbnailStack
            key="stack"
            initial={{ x: -220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -220, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <Thumbnail
                  key={section.id}
                  $active={isActive}
                  $accent={section.accent}
                  onClick={() => handleOpenSection(section.id)}
                  initial={{ rotateY: 14 }}
                  animate={{
                    rotateY: 14,
                    scale: isActive ? 1.055 : 1,
                    x: isActive ? 3 : 0,
                    y: isActive ? -2 : 0,
                  }}
                  whileHover={isActive ? {} : { rotateY: 9, scale: 1.03 }}
                  whileTap={isActive ? {} : { scale: 0.97, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                >
                  <ThumbnailTop>
                    <AccentDot $color={section.accent} />
                    <span style={{ color: section.accent, opacity: 0.8 }}>
                      <SectionIcon id={section.id} size={48} />
                    </span>
                  </ThumbnailTop>
                  <div>
                    <ThumbnailTitle>{section.title}</ThumbnailTitle>
                    <ThumbnailSubtitle>{section.subtitle}</ThumbnailSubtitle>
                  </div>
                </Thumbnail>
              );
            })}
          </ThumbnailStack>
        )}
      </AnimatePresence>

      {/* Main stage — expands smoothly as stack exits */}
      <Stage layout transition={{ type: "spring", stiffness: 280, damping: 30 }}>
        <AnimatePresence mode="wait" initial={false} custom={transitionDirection}>
          {activeSection ? (
            <Window
              key={activeSection.id}
              custom={transitionDirection}
              variants={windowVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 240, damping: 24, mass: 0.9 }}
            >
              <TitleBar>
                {/* Traffic lights */}
                <TrafficBtn $color="#ff5f57" onClick={handleClose} title="Close" />
                <TrafficBtn $color="#febc2e" title="Minimise" />
                <TrafficBtn $color="#28c840" onClick={handleExpand} title="Expand" />

                {/* Centred title */}
                <TitleBarCenter>
                  <span style={{ color: activeSection.accent }}>
                    <SectionIcon id={activeSection.id} size={13} />
                  </span>
                  <WindowTitle>{activeSection.title}</WindowTitle>
                </TitleBarCenter>

                {/* Expand / collapse button */}
                <TitleBarRight>
                  <ExpandBtn onClick={handleExpand}>
                    {isExpanded ? <Minimize2 size={11} /> : <Maximize2 size={11} />}
                    {isExpanded ? "Collapse" : "Expand"}
                  </ExpandBtn>
                </TitleBarRight>
              </TitleBar>

              <ContentArea
                key={`content-${activeSection.id}`}
                $expanded={isExpanded}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <SectionContent section={activeSection} expanded={isExpanded} />
              </ContentArea>
            </Window>
          ) : (
            <LandingWindow
              key="landing"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <LandingPage onOpenSection={handleOpenSection} />
            </LandingWindow>
          )}
        </AnimatePresence>
      </Stage>
    </Root>
  );
}
