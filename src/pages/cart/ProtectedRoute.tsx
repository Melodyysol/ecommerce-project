import { useContext, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../hooks/user";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const currentUser = useContext(UserContext);
  if (!currentUser) {
    throw new Error("useUser must be used within UserProvider");
  }

  if (!currentUser || currentUser.user?.userId === "demo") {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
