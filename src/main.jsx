import ReactDOM from "react-dom/client"; //load react
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //load react router to handle page calls
import "./index.css"; //import style sheet

//load the pages to be injected into index.html at root
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

//define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "resume",
        element: <ResumePage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render( //creates a root element for the react app, assigns it to display in the element with an id of "root" in index.html, then renders the content based on the routes defined above
  <RouterProvider router = {router} /> //this is the actual handler for the route; it receives the router configuration and manages the navigation in the app
);