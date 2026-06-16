import { Section } from "@/data/sections";

const experience = [
  {
    role: "Software Engineer",
    company: "AgilePoint Software India, Bengaluru",
    period: "Apr 2022 — Jan 2025",
    description:
      "Migrated a large legacy JavaScript application to React.js, cutting initial load time by ~60%. Built a reusable UI component library (Sliders, TreeView, Accordion, Buttons, Popups) with Styled-Components, documented in Storybook. Integrated GraphQL APIs via Apollo Client, replacing over-fetching REST patterns. Collaborated with UX/UI designers to turn wireframes into pixel-perfect, accessible interfaces, and conducted cross-browser/device testing.",
  },
  {
    role: "Software Engineer Trainee",
    company: "AgilePoint Software India, Bengaluru",
    period: "Sep 2021 — Mar 2022",
    description:
      "Refactored class-based components and HOCs into functional components with React Hooks, reducing boilerplate. Built dynamic, responsive interfaces with Redux and Context API for an authorisation module supporting 70+ integrations including Kafka and Blockchain. Replaced unnecessary dependencies with native solutions to improve performance and reduce bundle size.",
  },
  {
    role: "Web Development Intern",
    company: "Weir EnSci, Bengaluru",
    period: "Jan 2020 — Aug 2020",
    description:
      "Contributed to the live 'Total Cost of Acquisition' project — cost estimation tooling for the shipping and mining industries. Developed and tested web APIs using Postman; debugged issues in Visual Studio alongside a cross-functional development team.",
  },
];

const education = [
  {
    school: "Leeds Beckett University, UK",
    degree: "MSc, Advanced Computer Science",
    period: "Jan 2025 — May 2026",
    description:
      "Dissertation: APITestGenx — an AI-powered API test generation platform with a React.js frontend and Node.js/Express backend, applying prompt-engineering to drive LLM-based test generation. Eligible for UK Graduate Visa from June 2026.",
  },
  {
    school: "Visvesvaraya Technological University, India",
    degree: "B.E., Information Science",
    period: "2016 — 2020",
    description: "Undergraduate degree in Information Science.",
  },
];

const projects = [
  {
    name: "APITestGenx — AI-Powered API Test Generation Platform",
    description:
      "End-to-end full-stack platform with a React.js frontend for generating and executing API test cases on demand. Integrated a Node.js/Express backend with REST APIs for AI-driven, data-driven test generation, returning structured JSON/HTML reports. Applied prompt-engineering to optimise output quality and test coverage.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "Prompt Engineering", "AI Integration"],
  },
  {
    name: "Stage Manager Portfolio",
    description:
      "This very site — a macOS Stage Manager inspired portfolio built with Next.js, TypeScript, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    name: "Toll Plaza Penalty Collection System",
    description:
      "Mobile + admin web solution (Android Studio + ASP.NET) for collecting unpaid traffic violations and issuing toll tickets in a single transaction. Presented and accepted at ICCMC 2019 — published in the IEEE Xplore Digital Library.",
    tags: ["Android Studio", "ASP.NET"],
  },
];

export function SectionContent({ section }: { section: Section }) {
  switch (section.id) {
    case "about":
      return (
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Hi, I&apos;m Manjunath 👋</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            I&apos;m a Frontend Developer based in Manchester, UK with 4+ years
            of commercial experience building responsive, accessible, and
            performant web applications using React.js, TypeScript, and
            JavaScript (ES6+). I have a proven track record delivering
            pixel-perfect UI from wireframes, integrating REST and GraphQL
            APIs, and optimising frontend performance — including a 60%
            reduction in load time through a legacy-to-React migration.
          </p>
          <p className="text-base leading-relaxed text-zinc-300">
            I&apos;m currently completing an MSc in Advanced Computer Science
            at Leeds Beckett University (May 2026), and I&apos;m eligible for
            the UK Graduate Visa from June 2026.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
              <h3 className="text-sm font-medium text-zinc-200">Frontend</h3>
              <p className="mt-1 text-sm text-zinc-400">
                React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Redux,
                React Router, Apollo Client (GraphQL), Styled-Components,
                Bootstrap, Storybook
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
              <h3 className="text-sm font-medium text-zinc-200">
                Responsive Design &amp; Accessibility
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Cross-browser/device testing, W3C accessibility standards,
                performance optimisation, SEO best practices
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
              <h3 className="text-sm font-medium text-zinc-200">
                Tooling &amp; Build
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Git/GitLab, Webpack, Babel, CI/CD pipelines, Postman, npm
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
              <h3 className="text-sm font-medium text-zinc-200">
                Backend &amp; APIs
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Node.js, Express.js, REST API design, GraphQL (queries /
                mutations / subscriptions), MySQL
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-zinc-300">
            Click around the windows on the left to explore my experience,
            education, and projects. Each one transitions smoothly into
            focus, just like switching between spaces on a Mac.
          </p>
        </div>
      );
    case "experience":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Experience</h2>
          {experience.map((item) => (
            <div key={item.role} className="border-l-2 border-zinc-700 pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">{item.role}</h3>
                <span className="text-sm text-zinc-400">{item.period}</span>
              </div>
              <p className="text-sm text-zinc-400">{item.company}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Education</h2>
          {education.map((item) => (
            <div key={item.school} className="border-l-2 border-zinc-700 pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <span className="text-sm text-zinc-400">{item.period}</span>
              </div>
              <p className="text-sm text-zinc-400">{item.school}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    case "projects":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4"
              >
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-700 px-2 py-0.5 text-xs text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}
