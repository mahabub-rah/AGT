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
          loader: () => fetch("http://localhost:5000/all"),
        },
        {
          path: "/article",
          element: <Article></Article>,
          loader: () => fetch("http://localhost:5000/article"),
        },
        {
          path: "/event",
          element: <Event></Event>,
          loader: () => fetch("http://localhost:5000/event"),
        },
        {
          path: "/education",
          element: <Edu></Edu>,
          loader: () => fetch("http://localhost:5000/edu"),
        },
        {
          path: "/job",
          element: <Job></Job>,
          loader: () => fetch("http://localhost:5000/job"),
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
