import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import Payment from "../pages/Payment/Payment";

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
      {
        path: "/classes",
        element: <ClassesPage />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      //! student routes
      {
        path: "selected",
        element: <SelectedClasses />,
      },
      {
        path: "enrolled",
        element: <EnrolledClasses />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
    ],
  },
]);
