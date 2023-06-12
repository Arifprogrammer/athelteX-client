import { Navigate, useLocation } from "react-router";
import useRole from "../hooks/useRole";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isRole.admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
