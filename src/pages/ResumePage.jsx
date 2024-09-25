import "./css/resume.css";

export default function ResumePage() {
  return (
    <>
    <div id = "resume">
      <div id = "pdf">
        <a href = "/resume-matthew-williams.pdf" download>
          <button type = "button">Download Resume</button>
        </a>
      </div>
        <div id = "skills">
          <h2>Coding Skills</h2>
          <ul>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>HTML</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>SQL and Sequelize</li>
            <li>PWA Development</li>
            <li>Figma</li>
            <li>GitHub</li>
            <li>Insomnia</li>
            <li>Render</li>
          </ul>
        </div>
      </div>
    </>
  )
}