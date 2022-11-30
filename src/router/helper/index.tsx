import { Location, NavigateFunction } from "react-router-dom";
import { Toast } from "@douyinfe/semi-ui";
import type { MenuTypes } from "../../types";

/**
 * 查找路由
 * @param path
 * @param routes
 * @returns
 */
export const searchRoute = (
  pathname: string,
  routes: MenuTypes.RouteItem[]
): MenuTypes.RouteItem | null => {
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
  routes: MenuTypes.RouteItem[],
  user: any
): boolean => {
  const { pathname } = location;
  const route = searchRoute(pathname, routes);
  if (route) {
    // title
    if (route.meta?.title) {
      document.title = route.meta.title;
    }
    // 登录验证
    if (route.meta?.auth && !user.token) {
      Toast.warning("请先登录");
      navigate("/login");
      return false;
    }
    // 角色页面权限
    if (route.meta?.roles && !route.meta.roles.includes(user.role)) {
      Toast.warning("无权限访问");
      navigate("/403");
      return false;
    }

    return true;
  } else {
    navigate("/404");
    return false;
  }
};
