import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Paste from "./components/paste";
import Viewpaste from "./components/Viewpaste";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div>
          <Navbar />
          <Paste />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div>
          <Navbar />
          <Viewpaste />
        </div>
      ),
    },
  ]);
  return (
    <div className="antialiase dark:bg-gray-950 h-screen w-full ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
