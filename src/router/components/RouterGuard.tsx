import type { MenuTypes } from "../../types";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { guard } from "../helper";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../store";

export const RouterGuard = (routes: MenuTypes.RouteItem[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    guard(location, navigate, routes, user);
  }, [location, navigate, routes]);

  const Route = useRoutes(routes);

  return Route;
};
