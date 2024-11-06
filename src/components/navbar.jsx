import { NavLink } from 'react-router-dom';

//connects buttons (just links in this case) in the navbar to the routes that will call the appropriate pages 
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" exact>
        About Me
      </NavLink>
      <NavLink to="/projects" activeClassName = "active">
        &ensp;|&ensp;Projects
      </NavLink>
      <NavLink to="/Resume">
        &ensp;|&ensp;Resume
      </NavLink>
      <NavLink to="/Contact">
        &ensp;|&ensp;Contact
      </NavLink>
    </nav>
  );
}
