import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../layout";
import PageHome from "../pages/home";
import PageUser from "../pages/user";
import PageLogin from "../pages/login";
import PageLayout from "../pages/layout";
import PageTest from "../pages/test";
import Page404 from "../pages/error/404";
import Page500 from "../pages/error/500";
import ElementRedirect from "../components/redirect";
import type { RouteItem } from "../types";

export const routes: RouteItem[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <PageHome />,
        meta: { title: "首页" },
      },
      { path: "/home", element: <PageHome />, meta: { title: "首页" } },
      { path: "/user/:id", element: <PageUser />, meta: { title: "用户" } },
      { path: "/layout", element: <PageUser />, meta: { title: "布局" } },
      {
        page: "/error",
        children: [
          {
            path: "/error/404",
            element: <Page404 />,
            meta: { title: "error-404" },
          },
          {
            path: "/error/500",
            element: <Page500 />,
            meta: { title: "error-500" },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "/test",
    element: <PageTest />,
  },
  {
    path: "/404",
    element: <Page404 />,
  },
  {
    path: "/500",
    element: <Page500 />,
  },
  {
    path: "*",
    element: <ElementRedirect to="/404" />,
  },
] as any;

export default createBrowserRouter(routes);
