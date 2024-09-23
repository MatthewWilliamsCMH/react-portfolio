import "../../pages/css/projectcard.css";

export default function ProjectCard({ title, url, gitRepo, image }) {
  return (
      <div className = "card">
        <h2>{title}</h2>
        <a href = {gitRepo}>Github Repo</a>
        <a href = {url}>
          <img src = {image} alt = {`screen capture of ${title}`} width = "33.333%"/>
        </a>
    </div>
  );
}