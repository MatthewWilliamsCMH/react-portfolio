import "./css/projects.css";

import ProjectCard from "../components/cards/ProjectCard";

const projects = [
    {
    title: "Summit Chase Tree Inventory",
    url: "https://treeinventory.onrender.com",
    gitRepo: "https://github.com/MatthewWilliamsCMH/TreeInventory",
    image: "/treeinventory.jpg"
  },
  {
    title: "J.A.T.E Text Editor",
    url: "http://jate-text-editor-9o20.onrender.com",
    gitRepo: "https://github.com/MatthewWilliamsCMH/JATE-text-editor",
    image: "/jate-text-editor.jpg"
  },
    {
    title: "Pet Tracker",
    url: "https://pet-tracker-hldv.onrender.com",
    gitRepo: "https://github.com/MatthewWilliamsCMH/pet-tracker",
    image: "/pet-tracker.jpg"
  },
    {
    title: "Matthew’s Taskboard",
    url: "https://matthewwilliamscmh.github.io/matthews-taskboard/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/matthews-taskboard/",
    image: "/matthews-taskboard.jpg"
  },
    {
    title: "Employee Payroll Tracker",
    url: "https://matthewwilliamscmh.github.io/EmployeeTracker/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/employee-tracker/",
    image: "/employee-tracker.jpg"
  },
    {
    title: "Weather Report",
    url: "https://matthewwilliamscmh.github.io/weather-report/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/weather-report/",
    image: "/weather-report.jpg"
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