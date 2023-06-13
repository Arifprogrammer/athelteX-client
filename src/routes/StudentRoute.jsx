import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useRole from "../hooks/useRole";

const StudentRoute = ({ children }) => {
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

  if (user && isRole.student) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
