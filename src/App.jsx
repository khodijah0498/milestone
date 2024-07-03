import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Project from "../pages/Project"
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";
import { CreateUserContext } from "../utils/ReusableFunctions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CreateUserContext>
      <RouterProvider router={router} />
    </CreateUserContext>
  );
};

export default App;
