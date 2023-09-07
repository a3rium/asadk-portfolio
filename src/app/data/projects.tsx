import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["Python", "cv2"],
    title: "Indian Sign Language Recognizer",
    description:
      "A Computer Vision project created as part of a University final.",
    repo: "https://github.com/a3rium/ISL_recognizer",
    link: "",
    type: "showcase",
  },
  {
    id: 2,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["Python", "Word2Vec", "TF-IDF", "GloVe"],
    title: "Genre Classification and Sentiment Analysis of Steam Game Reviews",
    description:
      "An NLP project made as part of a University final to analyse and compare methods for Genre Classification and Sentiment Analysis of Steam game reviews.",
    repo: "https://github.com/a3rium/nlp_game_reviews",
    link: "",
    type: "showcase",
  },
  {
    id: 3,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["Java", "Android Studio"],
    title: "Medical Adherence Android Application",
    description:
      "An android application to help the vision impaired adhere to medical prescriptions built as part of a University project.",
    repo: "https://github.com/a3rium/medical_adherence_app",
    link: "",
    type: "showcase",
  },
  {
    id: 4,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["SQL", "Java"],
    title: "Rest API",
    description:
      "A simple Rest API using Spring Framework created as part of a University Project.",
    repo: "https://github.com/a3rium/rest_api",
    link: "",
    type: "complete",
  },
  {
    id: 5,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["C#", "Unity"],
    title: "Infinite Borders",
    description:
      "Simple 2.5D inifinite Runner game built with Unity Game Engine.",
    repo: "https://github.com/a3rium/infinite-borders",
    link: "",
    type: "incomplete",
  },
  {
    id: 6,
    img_path: "https://via.placeholder.com/300x150",
    languages: ["TypeScript", "NextJS", "TailwindCSS"],
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built using Next.js and TailwindCSS",
    repo: "https://github.com/a3rium/asadk-portfolio",
    link: "https://asadk-portfolio.vercel.app/",
    type: "incomplete",
  },
];
