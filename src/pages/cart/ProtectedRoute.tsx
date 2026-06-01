import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  currentUser: {username: string; email: string} | null;
  children: ReactNode;
};

const ProtectedRoute = ({ currentUser, children }: ProtectedRouteProps) => {
  if (!currentUser || currentUser.username === "demo user") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
