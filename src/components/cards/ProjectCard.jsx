export default function ProjectCard({ title, url, gitRepo, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <a href = {gitRepo}>Github Repo</a>
      <a href = {url}>
        <img src = {image} alt = {`screen capture of ${title}`} />
      </a>
    </div>
  );
}