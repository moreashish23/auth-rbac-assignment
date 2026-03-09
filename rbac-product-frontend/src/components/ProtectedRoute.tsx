import { Navigate, Outlet } from "react-router-dom";

interface Props {
  role?: string;
}

const ProtectedRoute = ({ role }: Props) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/products" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;