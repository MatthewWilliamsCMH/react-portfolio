import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom"; //allows react to manage child routes as defined in main.js
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
  </>
  );
};

export default App;