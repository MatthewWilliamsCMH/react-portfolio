import { Link } from 'react-router-dom';

//connects buttons (just links in this case) in the navbar to the routes that will call the appropriate pages 
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className = "button">
        About
      </Link>
      <Link to="/projects" className = "button">
        &emsp;Projects
      </Link>
      <Link to="/Resume" className = "button">
        &emsp;Resume
      </Link>
      <Link to="/Contact" className = "button">
        &emsp;Contact
      </Link>
    </nav>
  );
}
