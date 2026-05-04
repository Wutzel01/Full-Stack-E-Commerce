import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedRoutes({children}) {
  const { isAuthenticated, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <p className="page-message">Anmeldung wird geprüft...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/register" replace/>;
  }

  return children;
}

export default ProtectedRoutes;