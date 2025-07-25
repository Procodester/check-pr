import { techStack } from "./techStack.data";
import { Database, Puzzle  } from "lucide-react"

 
export const projects = [
  {
    title: "Show Pop Extension",
    description: "ShowPop is a lightweight Chrome extension that instantly plays a random episode from iconic Indian TV shows",
    imageSrc: "/assets/project/showpop.webp",
    liveUrl: "https://showpop.netlify.app",
    repoUrl: "https://github.com/real-devance/showpop-extension",
    techStack: [
      { name: "React", icon: techStack.React },
      { name: "Tailwind CSS", icon: techStack.TailwindCSS },
      { name: "Typescript", icon: techStack.TypeScript },
      { name: "CrxJS", icon: <Puzzle size={"0.875rem"}/> },
      { name: "Cloudflare Workers", icon: <i className="devicon-cloudflareworkers-plain colored"/>},
    ]
  },
    {
      title: "GifsTok",
      description: "GifsTok lets you search, download, and share your favorite GIFs quickly and easily",
      imageSrc: "/assets/project/gifstok.webp",
      liveUrl: "https://gifstok.netlify.app",
      repoUrl: "https://github.com/real-devance/gifsTok-react",
      techStack: [
        { name: "React", icon: techStack.React },
        { name: "Firebase", icon: techStack.Firebase},
        { name: "Tailwind CSS", icon: techStack.TailwindCSS },
        { name: "Typescript", icon: techStack.TypeScript }
      ]
    },
    {
      title: "Task Thing",
      description: "TaskThing is a simple to-do and notes app with local data saving and sync across devices. Stay organized, anywhere.",
      imageSrc: "/assets/project/taskthing.webp",
      liveUrl: "https://taskthing.netlify.app",
      repoUrl: "https://github.com/real-devance/task-thing-react",
      techStack: [
        { name: "React", icon: techStack.React },
        { name: "Tailwind CSS", icon: techStack.TailwindCSS },
        { name: "Typescript", icon: techStack.TypeScript },
        { name: "Dexie", icon: <Database size={"0.875rem"}/> }
      ]
    },
    {
      title: "Retro Snake",
      description: "Classic Snake game rebuilt with React. Uses a Queue for smooth movement and HTML5 Canvas for a retro, responsive experience",
      imageSrc: "/assets/project/retrosnake.webp",
      liveUrl: "https://retro-snake-01.netlify.app",
      repoUrl: "https://github.com/real-devance/retro-snake-react",
      techStack: [
        { name: "React", icon: techStack.React },
        { name: "Tailwind CSS", icon: techStack.TailwindCSS },
        { name: "Typescript", icon: techStack.TypeScript }

      ]
    },
    // {
    //   title: "Dixnary",
    //   description: "A simple and intuitive dictionary app built with React. Search for word definitions, synonyms, and more      ",
    //   imageSrc: "/assets/project/dixnary.webp",
    //   liveUrl: "https://dixnary.netlify.app",
    //   repoUrl: "https://github.com/real-devance/dixnary-react",
    //   techStack: [
    //     { name: "React", icon: techStack.React },
    //     { name: "Tailwind CSS", icon: techStack.TailwindCSS },
    //     { name: "Typescript", icon: techStack.TypeScript }
    //   ]
    // },
   
  ];