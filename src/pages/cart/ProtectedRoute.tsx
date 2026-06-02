import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  currentUser: { username: string; email: string } | null;
  children: ReactNode;
};

const ProtectedRoute = ({ currentUser, children }: ProtectedRouteProps) => {
  const location = useLocation();

  if (!currentUser || currentUser.username === "demo user") {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
