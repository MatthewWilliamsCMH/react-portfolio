import { Link } from 'react-router-dom';

//connects buttons (just links in this case) in the navbar to the routes that will call the appropriate pages 
//the key numbers map to the routes in main.jsx
export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} to="/" class = "button">
          About
        </Link>,
        <Link key={2} to="/projects" class = "button">
          Projects
        </Link>,
        <Link key={3} to="/Resume" class = "button">
          Resume
        </Link>,
        <Link key={4} to="/Contact" class = "button">
          Contact
      </Link>
      ]}
    />
  );
}
