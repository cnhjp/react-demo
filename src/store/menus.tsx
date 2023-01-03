import { atom, selector } from "recoil";
import {
  IconHome,
  IconUserCircle,
  IconGridView,
  IconUploadError,
} from "@douyinfe/semi-icons";
import type { MenuTypes } from "../types";
import { UserEnums } from "../enums";

export const menuState = atom<MenuTypes.NavMenuItem[]>({
  key: "menuState",
  default: [
    {
      itemKey: "home",
      text: "首页",
      icon: <IconHome />,
      path: "/home",
      roles: [],
    },
    {
      itemKey: "user",
      text: "用户",
      icon: <IconUserCircle />,
      items: [
        {
          itemKey: "user-1",
          text: "用户1",
          path: "/user/1",
          roles: [],
        },
        {
          itemKey: "user-2",
          text: "用户2",
          path: "/user/2",
          roles: [UserEnums.ROLE_TYPE.ADMIN],
        },
      ],
      roles: [UserEnums.ROLE_TYPE.ADMIN],
    },
    {
      itemKey: "layout",
      text: "布局",
      icon: <IconGridView />,
      path: "/layout",
      roles: [UserEnums.ROLE_TYPE.ADMIN],
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
          roles: [],
        },
        {
          itemKey: "error-500",
          text: "500",
          path: "/error/500",
          roles: [],
        },
      ],
      roles: [],
    },
  ],
});

export const menuSelector = selector({
  key: "menuSelector",
  get: ({ get }) => {
    const menu = get(menuState);

    const getMenus = (
      roleType: UserEnums.ROLE_TYPE
    ): MenuTypes.NavMenuItem[] => {
      const ans: MenuTypes.NavMenuItem[] = [];
      const dfs = (
        items: MenuTypes.NavMenuItem[],
        cont: MenuTypes.NavMenuItem[]
      ) => {
        for (const item of items) {
          if (item.roles.length === 0 || item.roles.includes(roleType)) {
            if ("items" in item) {
              const sub: MenuTypes.NavMenuItem = {
                ...item,
                items: [],
              };
              dfs(item.items!, sub.items!);
              cont.push(sub);
            } else {
              cont.push(item);
            }
          }
        }
      };
      dfs(menu, ans);
      return ans;
    };
    return {
      ...menu,
      getMenus,
    };
  },
});
