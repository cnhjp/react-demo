import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/home";
import UserPage from "../pages/user";
import LoginPage from "../pages/login";
import LayoutPage from "../pages/layout";
import TestPage from "../pages/test";
import type { RouteItem } from "../types";

export const routes: RouteItem[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        meta: { title: "首页" },
      },
      { path: "/home", element: <HomePage />, meta: { title: "首页" } },
      { path: "/user/:id", element: <UserPage />, meta: { title: "用户" } },
      { path: "/layout", element: <LayoutPage />, meta: { title: "布局" } },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];

export default createBrowserRouter(routes);
