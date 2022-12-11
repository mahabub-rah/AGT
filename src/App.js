import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import All from "./Pages/All";
import Edu from "./Pages/Edu";
import Article from "./Pages/Article";
import Event from "./Pages/Event";
import Job from "./Pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <All></All>,
          loader: () => fetch("https://atgworld-server-site.vercel.app/all"),
        },
        {
          path: "/article",
          element: <Article></Article>,
          loader: () =>
            fetch("https://atgworld-server-site.vercel.app/article"),
        },
        {
          path: "/event",
          element: <Event></Event>,
          loader: () => fetch("https://atgworld-server-site.vercel.app/event"),
        },
        {
          path: "/education",
          element: <Edu></Edu>,
          loader: () => fetch("https://atgworld-server-site.vercel.app/edu"),
        },
        {
          path: "/job",
          element: <Job></Job>,
          loader: () => fetch("https://atgworld-server-site.vercel.app/job"),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
