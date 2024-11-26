import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
