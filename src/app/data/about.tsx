import { Skill } from "../types/Skill";
import { Hobby } from "../types/Hobby";

export const titles: string[] = [
  "web designer",
  "captain of the Cs",
  "adventurer",
  "python charmer",
  "visionary",
  "problem solver",
  "code monkey",
  "game designer",
  "pun-isher of bugs",
  "snapshot artist",
  "sci-fi writer",
  "cat whisperer",
  "creative thinker",
  "trouble shooter",
  "tech enthusiast",
  "java junkie",
  "animal lover",
  "page turner",
  "rickroller",
];

export const skills: Skill[] = [
  {
    id: 1,
    title: "Languages",
    technologies: ["TypeScript", "Java", "Python", "C++", "C", "C#"],
  },
  {
    id: 2,
    title: "Databases",
    technologies: ["SQLite", "PostgreSQL", "MS SQL Server"],
  },
  {
    id: 3,
    title: "Tools",
    technologies: [
      "VSCode",
      "Visual Studio",
      "Linux",
      "Figma",
      "Git",
      "Android Studio",
    ],
  },
  {
    id: 4,
    title: "Other",
    technologies: ["HTML", "CSS", "REST", ".NET"],
  },
  {
    id: 5,
    title: "Frameworks",
    technologies: ["React", "Next.js", "Django", "Flask"],
  },
];

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Reading",
  },
  {
    id: 2,
    title: "Gaming",
  },
  {
    id: 3,
    title: "Music",
  },
  {
    id: 4,
    title: "Movies",
  },
  {
    id: 5,
    title: "Sailing",
  },
  {
    id: 6,
    title: "Photography",
  },
];
