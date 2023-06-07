import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import HomePage from "../pages/HomePage/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
