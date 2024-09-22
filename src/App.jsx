import { Outlet } from "react-router-dom"; //allows react to manage child routes as defined in main.js
import Header from "./components/header.jsx";
import Nav from "./components/nav.jsx";
import Root from "./components/root.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
  </>
  );
};

export default App;