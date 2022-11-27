import { Location, NavigateFunction } from "react-router-dom";
import type { RouteItem } from "../../types";

/**
 * 查找路由
 * @param path
 * @param routes
 * @returns
 */
export const searchRoute = (
  pathname: string,
  routes: RouteItem[]
): RouteItem | null => {
  for (const item of routes) {
    // 正则匹配
    if (item.path) {
      const path = item.path.replace(/:\w+/g, "[^/]+");
      const reg = new RegExp(`^${path}$`);
      if (reg.test(pathname)) {
        return item;
      }
    }
    if (item.children) {
      const result = searchRoute(pathname, item.children);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

/**
 * 路由守卫
 * @param location
 * @param navigate
 * @param routes
 * @returns
 */
export const guard = (
  location: Location,
  navigate: NavigateFunction,
  routes: RouteItem[]
): boolean => {
  const { pathname } = location;
  const route = searchRoute(pathname, routes);
  if (route) {
    if (route.meta?.title) {
      document.title = route.meta.title;
    }
    return true;
  } else {
    navigate("/404");
    return false;
  }
};
