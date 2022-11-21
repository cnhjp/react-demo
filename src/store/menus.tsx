import { atom } from "recoil";
import { IconHome, IconUserCircle } from "@douyinfe/semi-icons";
import type { NavMenuItem } from "../types";

export const menuState = atom<NavMenuItem[]>({
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
  ],
});
