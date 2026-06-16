export interface Section {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
}

export const sections: Section[] = [
  {
    id: "about",
    title: "About",
    subtitle: "Who I am",
    accent: "#0A84FF",
  },
  {
    id: "experience",
    title: "Experience",
    subtitle: "Where I've worked",
    accent: "#FF9F0A",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "What I've studied",
    accent: "#30D158",
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "What I've built",
    accent: "#BF5AF2",
  },
];
