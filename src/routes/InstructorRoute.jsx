import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import useRole from "../hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center px-4 lg:px-0">
        <progress className="progress max-w-[256px]"></progress>
      </div>
    );
  }

  if (user && isRole.instructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
