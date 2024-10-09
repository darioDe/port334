import ProjectProps from '../types/Projects';
import movieSearcher from '../assets/movie-searcher.png';
import advice from '../assets/advice-generator.png';

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "A complete e-commerce application with shopping cart and payment gateway.",
    image: movieSearcher,
    tags: ["React", "Node.js", "MongoDB"],
    codeUrl: "#",
    deployUrl: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website with smooth animations.",
    image: advice,
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "#",
    deployUrl: "#",
  },
  {
    id: 3,
    title: "Task App",
    description: "A task management application with user authentication and cloud storage.",
    image: movieSearcher,
    tags: ["React Native", "Firebase"],
    codeUrl: "#",
    deployUrl: "#",
  },
  {
    id: 4,
    title: "Tech Blog",
    description: "A tech blog with a custom content management system.",
    image: movieSearcher,
    tags: ["Next.js", "Tailwind CSS", "Sanity.io"],
    codeUrl: "#",
    deployUrl: "#",
  },
];

export default projects;
