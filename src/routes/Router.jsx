import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
    ],
  },
]);
