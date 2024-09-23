import "./css/projects.css";
import ProjectCard from "../components/cards/ProjectCard";

const projects = [
  {
    title: "J.A.T.E Text Editor",
    url: "http://jate-text-editor-9o20.onrender.com",
    gitRepo: "https://github.com/MatthewWilliamsCMH/JATE-text-editor",
    image: "src/assets/jate-text-editor.jpg"
  },
    {
    title: "Pet Tracker",
    url: "",
    gitRepo: "https://github.com/MatthewWilliamsCMH/pet-tracker",
    image: ""
  },
    {
    title: "Logo Generator",
    url: "",
    gitRepo: "https://github.com/MatthewWilliamsCMH/logo-generator/",
    image: ""
  },
    {
    title: "Employee Tracker",
    url: "",
    gitRepo: "https://github.com/MatthewWilliamsCMH/employee-tracker/",
    image: ""
  },
    {
    title: "Tech Blog",
    url: "",
    gitRepo: "https://github.com/MatthewWilliamsCMH/tech-blog/",
    image: ""
  },
    {
    title: "Read Me Generator",
    url: "",
    gitRepo: "https://github.com/MatthewWilliamsCMH/readme-generator/",
    image: ""
  }
];

export default function ProjectsPage() {
  return (
    <div id = "projects">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          url={project.url}
          gitRepo={project.gitRepo}
          image={project.image}
        />
      ))}
    </div>
  );
}