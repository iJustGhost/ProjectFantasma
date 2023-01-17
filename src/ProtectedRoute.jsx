import { Navigate, Outlet } from "react-router-dom";

export const statusRoute = { isOpen: false };
export function ProtectedRoute() {
  return statusRoute.isOpen ? <Outlet /> : <Navigate to="/" replace />;
}
