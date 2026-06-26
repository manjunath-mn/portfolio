"use client";

import { useState } from "react";
import styled from "styled-components";
import { Code2, User, MapPin, ExternalLink } from "lucide-react";
import { Section } from "@/data/sections";

/* ── Shared ─────────────────────────────────────── */

const SectionHeading = styled.h2`
  font-size: 1.875em;
  font-weight: 600;
  margin: 0 0 2rem;
  color: #f4f4f5;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Body = styled.p`
  font-size: 1em;
  line-height: 1.75;
  color: #a1a1aa;
  margin: 0 0 1rem;
`;

/* ── About ───────────────────────────────────────── */

const AboutRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0.5rem 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  border-radius: 0.75rem;
  border: 1px solid #3f3f46;
  background: rgba(39, 39, 42, 0.5);
  padding: 1rem;
`;

const SkillCardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #e4e4e7;
  margin: 0 0 0.375rem;
`;

const SkillCardBody = styled.p`
  font-size: 0.8125rem;
  color: #71717a;
  line-height: 1.6;
  margin: 0;
`;

/* ── Timeline ────────────────────────────────────── */

const TimelineRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 3.5rem;

  /* vertical spine */
  &::before {
    content: "";
    position: absolute;
    left: 1.25rem;
    top: 0.75rem;
    bottom: 0.75rem;
    width: 2px;
    background: linear-gradient(
      to bottom,
      #3f3f46 0%,
      #52525b 40%,
      #3f3f46 100%
    );
    border-radius: 1px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div<{ $color: string }>`
  position: absolute;
  left: -2.875rem;
  top: 0.9rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 2px solid #09090b;
  box-shadow: 0 0 0 2px ${({ $color }) => $color}55;
  z-index: 1;
`;

const TimelineYear = styled.div`
  position: absolute;
  left: -3.25rem;
  top: 2rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: #52525b;
  letter-spacing: 0.04em;
  writing-mode: horizontal-tb;
  white-space: nowrap;
  transform: translateX(-50%);
  text-align: center;
`;

const TimelineCard = styled.div`
  display: flex;
  gap: 1.25rem;
  background: rgba(39, 39, 42, 0.45);
  border: 1px solid #3f3f46;
  border-radius: 0.875rem;
  padding: 1.375rem 1.5rem;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: #52525b;
    background: rgba(63, 63, 70, 0.4);
  }
`;

/* ── Org Logo ────────────────────────────────────── */

const LogoWrapper = styled.div<{ $bg: string }>`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  background: ${({ $bg }) => $bg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;

const LogoFallback = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: #f4f4f5;
  letter-spacing: -0.02em;
`;

function OrgLogo({ src, initials, bg }: { src: string; initials: string; bg: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <LogoWrapper $bg={bg}>
      {!failed ? (
        <LogoImg src={src} alt={initials} onError={() => setFailed(true)} />
      ) : (
        <LogoFallback>{initials}</LogoFallback>
      )}
    </LogoWrapper>
  );
}

/* ── Entry content ────────────────────────────────── */

const EntryBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const EntryRole = styled.h3`
  font-size: 1em;
  font-weight: 600;
  color: #f4f4f5;
  margin: 0 0 0.125rem;
  line-height: 1.3;
`;

const EntryMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem 0.75rem;
  margin-bottom: 0.625rem;
`;

const EntryCompany = styled.span`
  font-size: 0.8125em;
  font-weight: 500;
  color: #a1a1aa;
`;

const EntryPeriodBadge = styled.span`
  font-size: 0.75em;
  color: #71717a;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #3f3f46;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;
`;

const EntryLocation = styled.span`
  font-size: 0.75em;
  color: #52525b;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const EntryDescription = styled.p`
  font-size: 0.875em;
  line-height: 1.7;
  color: #71717a;
  margin: 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.625rem;
`;

const Tag = styled.span`
  border-radius: 9999px;
  background: #27272a;
  border: 1px solid #3f3f46;
  padding: 0.125rem 0.625rem;
  font-size: 0.6875em;
  color: #a1a1aa;
`;

/* ── Projects ────────────────────────────────────── */

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  border-radius: 0.75rem;
  border: 1px solid #3f3f46;
  background: rgba(39, 39, 42, 0.5);
  padding: 1rem;
`;

const ProjectName = styled.h3`
  font-size: 1em;
  font-weight: 500;
  color: #f4f4f5;
  margin: 0 0 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.8125em;
  line-height: 1.6;
  color: #a1a1aa;
  margin: 0 0 0.75rem;
`;

/* ── Data ────────────────────────────────────────── */

const experience = [
  {
    role: "Software Engineer",
    company: "AgilePoint Software India",
    location: "Bengaluru, India",
    startYear: "Apr 2022",
    endYear: "Jan 2025",
    period: "Apr 2022 — Jan 2025",
    description:
      "Migrated a large legacy JavaScript application to React.js, cutting initial load time by ~60%. Built a reusable UI component library with Styled-Components documented in Storybook. Integrated GraphQL APIs via Apollo Client and collaborated with UX/UI designers to deliver pixel-perfect, accessible interfaces.",
    tags: ["React.js", "TypeScript", "GraphQL", "Apollo Client", "Storybook", "Node.js"],
    logo: "/logos/agilepoint.svg",
    initials: "AP",
    bg: "#1a2744",
    dotColor: "#0A84FF",
  },
  {
    role: "Software Engineer Trainee",
    company: "AgilePoint Software India",
    location: "Bengaluru, India",
    startYear: "Sep 2021",
    endYear: "Mar 2022",
    period: "Sep 2021 — Mar 2022",
    description:
      "Refactored class-based components into functional components with React Hooks. Built dynamic, responsive interfaces with Redux and Context API for an authorisation module supporting 70+ integrations including Kafka and Blockchain.",
    tags: ["React Hooks", "Redux", "Context API", "JavaScript"],
    logo: "/logos/agilepoint.svg",
    initials: "AP",
    bg: "#1a2744",
    dotColor: "#0A84FF",
  },
  {
    role: "Web Development Intern",
    company: "Weir EnSci",
    location: "Bengaluru, India",
    startYear: "Jan 2020",
    endYear: "Aug 2020",
    period: "Jan 2020 — Aug 2020",
    description:
      "Contributed to the live 'Total Cost of Acquisition' project — cost estimation tooling for the shipping and mining industries. Developed and tested web APIs using Postman; debugged issues in Visual Studio.",
    tags: ["ASP.NET", "Web APIs", "Postman", "Visual Studio"],
    logo: "/logos/weir.svg",
    initials: "WE",
    bg: "#1a2a1a",
    dotColor: "#30D158",
  },
];

const education = [
  {
    degree: "MSc, Advanced Computer Science",
    school: "Leeds Beckett University",
    location: "Leeds, UK",
    startYear: "Jan 2025",
    endYear: "May 2026",
    period: "Jan 2025 — May 2026",
    description:
      "Modules: Intelligent Systems and Robotics, Cloud Computing, Project Management, and Software Development. Dissertation: APITestGenx — an AI-powered API test generation platform with a React.js frontend and Node.js/Express backend, applying prompt-engineering to drive LLM-based test generation. Eligible for UK Graduate Visa from June 2026.",
    tags: [
      "Intelligent Systems and Robotics",
      "Cloud Computing",
      "Project Management",
      "Software Development",
      "Dissertation: APITestGenx",
    ],
    logo: "/logos/leeds-beckett.svg",
    initials: "LBU",
    bg: "#2a1a1a",
    dotColor: "#FF9F0A",
  },
  {
    degree: "B.E., Information Science",
    school: "Visvesvaraya Technological University",
    location: "Karnataka, India",
    startYear: "2016",
    endYear: "2020",
    period: "2016 — 2020",
    description:
      "Bachelor of Engineering in Information Science. Worked on IEEE-published research project: Toll Plaza Penalty Collection System (ICCMC 2019).",
    tags: ["Information Science", "Software Engineering", "Research"],
    logo: "/logos/vtu.png",
    initials: "VTU",
    bg: "#1a1a2a",
    dotColor: "#BF5AF2",
  },
];

const projects = [
  {
    name: "APITestGenx — AI-Powered API Test Generation",
    description:
      "End-to-end full-stack platform with a React.js frontend for generating and executing API test cases on demand. Node.js/Express backend with AI-driven, data-driven test generation returning structured JSON/HTML reports.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "Prompt Engineering", "AI"],
    link: "https://api-test-generator-topaz.vercel.app/",
  },
  {
    name: "Stage Manager Portfolio",
    description:
      "This very site — a macOS Stage Manager inspired portfolio built with Next.js, TypeScript, Framer Motion, and Styled-Components.",
    tags: ["TypeScript", "Framer Motion", "Styled-Components"],
    link: "https://stage-manager-portfolio.vercel.app/",
  },
  {
    name: "Toll Plaza Penalty Collection System",
    description:
      "Mobile + admin web solution for collecting unpaid traffic violations and issuing toll tickets in a single transaction. Accepted at ICCMC 2019 — published in the IEEE Xplore Digital Library.",
    tags: ["Android Studio", "ASP.NET", "IEEE Published"],
    link: "https://ieeexplore.ieee.org",
  },
];

/* ── Component ───────────────────────────────────── */

export function SectionContent({ section, expanded = false }: { section: Section; expanded?: boolean }) {
  void expanded;

  switch (section.id) {
    case "about":
      return (
        <AboutRoot>
          <SectionHeading><User size={28} />Hi, I&apos;m Manjunath 👋</SectionHeading>
          <Body>
            I&apos;m a Frontend Developer based in Manchester, UK with 4+ years
            of commercial experience building responsive, accessible, and
            performant web applications using React.js, TypeScript, and
            JavaScript (ES6+). I have a proven track record delivering
            pixel-perfect UI from wireframes, integrating REST and GraphQL
            APIs, and optimising frontend performance — including a 60%
            reduction in load time through a legacy-to-React migration.
          </Body>
          <Body>
            I&apos;m currently completing an MSc in Advanced Computer Science
            at Leeds Beckett University (May 2026), and I&apos;m eligible for
            the UK Graduate Visa from June 2026.
          </Body>
          <SkillsGrid>
            <SkillCard>
              <SkillCardTitle>Frontend</SkillCardTitle>
              <SkillCardBody>
                React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Redux,
                React Router, Apollo Client (GraphQL), Styled-Components,
                Bootstrap, Storybook
              </SkillCardBody>
            </SkillCard>
            <SkillCard>
              <SkillCardTitle>Responsive Design &amp; Accessibility</SkillCardTitle>
              <SkillCardBody>
                Cross-browser/device testing, W3C accessibility standards,
                performance optimisation, SEO best practices
              </SkillCardBody>
            </SkillCard>
            <SkillCard>
              <SkillCardTitle>Tooling &amp; Build</SkillCardTitle>
              <SkillCardBody>
                Git/GitLab, Webpack, Babel, CI/CD pipelines, Postman, npm
              </SkillCardBody>
            </SkillCard>
            <SkillCard>
              <SkillCardTitle>Backend &amp; APIs</SkillCardTitle>
              <SkillCardBody>
                Node.js, Express.js, REST API design, GraphQL (queries /
                mutations / subscriptions), MySQL
              </SkillCardBody>
            </SkillCard>
          </SkillsGrid>
          <Body>
            Click around the windows on the left to explore my experience,
            education, and projects.
          </Body>
        </AboutRoot>
      );

    case "experience":
      return (
        <div>
          <SectionHeading>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Experience
          </SectionHeading>
          <TimelineRoot>
            {experience.map((item) => (
              <TimelineItem key={item.role + item.period}>
                <TimelineDot $color={item.dotColor} />
                <TimelineYear>{item.startYear.split(" ")[1] ?? item.startYear}</TimelineYear>
                <TimelineCard>
                  <OrgLogo src={item.logo} initials={item.initials} bg={item.bg} />
                  <EntryBody>
                    <EntryRole>{item.role}</EntryRole>
                    <EntryMeta>
                      <EntryCompany>{item.company}</EntryCompany>
                      <EntryLocation><MapPin size={11} />{item.location}</EntryLocation>
                      <EntryPeriodBadge>{item.period}</EntryPeriodBadge>
                    </EntryMeta>
                    <EntryDescription>{item.description}</EntryDescription>
                    <TagList>
                      {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </TagList>
                  </EntryBody>
                </TimelineCard>
              </TimelineItem>
            ))}
          </TimelineRoot>
        </div>
      );

    case "education":
      return (
        <div>
          <SectionHeading>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Education
          </SectionHeading>
          <TimelineRoot>
            {education.map((item) => (
              <TimelineItem key={item.school}>
                <TimelineDot $color={item.dotColor} />
                <TimelineYear>{item.startYear.split(" ")[1] ?? item.startYear}</TimelineYear>
                <TimelineCard>
                  <OrgLogo src={item.logo} initials={item.initials} bg={item.bg} />
                  <EntryBody>
                    <EntryRole>{item.degree}</EntryRole>
                    <EntryMeta>
                      <EntryCompany>{item.school}</EntryCompany>
                      <EntryLocation><MapPin size={11} />{item.location}</EntryLocation>
                      <EntryPeriodBadge>{item.period}</EntryPeriodBadge>
                    </EntryMeta>
                    <EntryDescription>{item.description}</EntryDescription>
                    <TagList>
                      {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </TagList>
                  </EntryBody>
                </TimelineCard>
              </TimelineItem>
            ))}
          </TimelineRoot>
        </div>
      );

    case "projects":
      return (
        <div>
          <SectionHeading><Code2 size={28} />Projects</SectionHeading>
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.name}>
                <ProjectName><Code2 size={15} />{project.name}</ProjectName>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagList>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", marginTop: "0.5rem", fontSize: "0.75em", color: "#71717a", textDecoration: "none" }}
                  >
                    <ExternalLink size={12} /> View project
                  </a>
                )}
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      );

    default:
      return null;
  }
}
