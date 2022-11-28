import { createBrowserRouter } from "react-router-dom";
import { RouterGuard } from "./components/RouterGuard";

import Layout from "../layout";
import PageHome from "../pages/home";
import PageUser from "../pages/user";
import PageLogin from "../pages/login";
import PageLoginChooseRole from "../pages/login/ChooseRole";
import PageLayout from "../pages/layout";
import PageTest from "../pages/test";
import Page404 from "../pages/error/404";
import Page500 from "../pages/error/500";
import ElementRedirect from "../components/redirect";
import type { MenuTypes } from "../types";

export const routes: MenuTypes.RouteItem[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <PageHome />,
        meta: { title: "首页", auth: true },
      },
      {
        path: "/home",
        element: <PageHome />,
        meta: { title: "首页", auth: true },
      },
      {
        path: "/user/:id",
        element: <PageUser />,
        meta: { title: "用户", auth: true },
      },
      {
        path: "/layout",
        element: <PageLayout />,
        meta: { title: "布局", auth: true },
      },
      {
        page: "/error",
        children: [
          {
            path: "/error/404",
            element: <Page404 />,
            meta: { title: "错误-404", auth: true },
          },
          {
            path: "/error/500",
            element: <Page500 />,
            meta: { title: "错误-500", auth: true },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <PageLogin />,
    meta: { title: "登录" },
  },
  {
    path: "/choose-role",
    element: <PageLoginChooseRole />,
    meta: { title: "选择角色" },
  },
  {
    path: "/test",
    element: <PageTest />,
    meta: { title: "测试" },
  },
  {
    path: "/404",
    element: <Page404 />,
    meta: { title: "404" },
  },
  {
    path: "/500",
    element: <Page500 />,
    meta: { title: "500" },
  },
  {
    path: "*",
    element: <ElementRedirect to="/404" />,
  },
] as any;

export default createBrowserRouter(routes);
export { RouterGuard };
