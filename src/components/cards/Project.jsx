const images = require.context("./assets", false, /\.(jpg|jpeg|png|gif)$/i);  //added this because image name will be dynamic

export default function CardProject({ title, gitRepo }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{gitRepo}</h1>
      <img src = {images(`./${title}.jpg`)} alt = {`screen capture of ${title}`} />
    </div>
  );
}