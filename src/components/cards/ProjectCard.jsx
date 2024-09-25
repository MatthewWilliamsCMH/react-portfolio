import "../../pages/css/projectcard.css";

export default function ProjectCard({ title, url, gitRepo, image }) {
  return (
      <div className = "card">
        <h2>{title}</h2>
        <a href = {gitRepo}>Click to visit the Github Repo</a><br />
        <a href = {url}>Click to visit the live page</a>
        <a>
          <img src = {image} alt = {`screen capture of ${title}`}/>
        </a>
    </div>
  );
}