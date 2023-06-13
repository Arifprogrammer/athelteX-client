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
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //! student routes
      {
        path: "selected",
        element: (
          <StudentRoute>
            <SelectedClasses />
          </StudentRoute>
        ),
      },
      {
        path: "enrolled",
        element: (
          <StudentRoute>
            <EnrolledClasses />
          </StudentRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "history",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
      //! instructor routes
      {
        path: "my_classes",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "new_class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      //! admin routes
      {
        path: "classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
    ],
  },
]);
