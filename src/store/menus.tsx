import { atom } from "recoil";
import {
  IconHome,
  IconUserCircle,
  IconGridView,
  IconUploadError,
} from "@douyinfe/semi-icons";
import type { MenuTypes } from "../types";

export const menuState = atom<MenuTypes.NavMenuItem[]>({
  key: "menuState",
  default: [
    { itemKey: "home", text: "首页", icon: <IconHome />, path: "/home" },
    {
      itemKey: "user",
      text: "用户",
      icon: <IconUserCircle />,
      items: [
        {
          itemKey: "user-1",
          text: "用户1",
          path: "/user/1",
        },
        {
          itemKey: "user-2",
          text: "用户2",
          path: "/user/2",
        },
      ],
    },
    {
      itemKey: "layout",
      text: "布局",
      icon: <IconGridView />,
      path: "/layout",
    },
    {
      itemKey: "error",
      text: "错误页",
      icon: <IconUploadError />,
      items: [
        {
          itemKey: "error-404",
          text: "404",
          path: "/error/404",
        },
        {
          itemKey: "error-500",
          text: "500",
          path: "/error/500",
        },
      ],
    },
  ],
});
