import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import useRole from "../hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isRole.instructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
