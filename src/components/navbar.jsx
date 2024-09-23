import { NavLink } from 'react-router-dom';

//connects buttons (just links in this case) in the navbar to the routes that will call the appropriate pages 
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" exact>
        About
      </NavLink>
      <NavLink to="/projects" activeClassName = "active">
        &emsp;Projects
      </NavLink>
      <NavLink to="/Resume">
        &emsp;Resume
      </NavLink>
      <NavLink to="/Contact">
        &emsp;Contact
      </NavLink>
    </nav>
  );
}
