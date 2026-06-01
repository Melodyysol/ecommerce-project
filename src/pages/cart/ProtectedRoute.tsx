import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  currentUser: string | null;
  children: ReactNode;
};

const ProtectedRoute = ({ currentUser, children }: ProtectedRouteProps) => {
  if (!currentUser || currentUser === "demo user") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
