import type { MenuTypes } from "../../types";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { guard } from "../helper";
import { useEffect } from "react";

export const RouterGuard = (routes: MenuTypes.RouteItem[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    guard(location, navigate, routes);
  }, [location, navigate, routes]);

  const Route = useRoutes(routes);

  return Route;
};
