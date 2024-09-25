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
    url: "http://pet-tracker.onrender.com",
    gitRepo: "https://github.com/MatthewWilliamsCMH/pet-tracker",
    image: ""
  },
    {
    title: "Matthew’s Taskboard",
    url: "https://matthewwilliamscmh.github.io/matthews-taskboard/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/matthews-taskboard/",
    image: "src/assets/matthews-taskboard.jpg"
  },
    {
    title: "Employee Payroll Tracker",
    url: "https://matthewwilliamscmh.github.io/EmployeeTracker/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/employee-tracker/",
    image: "src/assets/employee-tracker.jpg"
  },
    {
    title: "Matthew’s Blog",
    url: "https://matthewwilliamscmh.github.io/matthews-blog/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/matthews-blog/",
    image: "src/assets/matthews-blog.jpg"
  },
    {
    title: "Weather Report",
    url: "https://matthewwilliamscmh.github.io/weather-report/",
    gitRepo: "https://github.com/MatthewWilliamsCMH/weather-report/",
    image: "src/assets/weather-report.jpg"
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