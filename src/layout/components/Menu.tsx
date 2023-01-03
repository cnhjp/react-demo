import { useEffect, useState } from "react";
import { Nav } from "@douyinfe/semi-ui";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuSelector, userSelector } from "../../store/index";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";

export default function (
  props: { mode?: "vertical" | "horizontal" } = {
    mode: "vertical",
  }
) {
  const navigate = useNavigate();
  const location = useLocation();

  // 获取用户信息
  const user = useRecoilValue(userSelector);

  // 根据用户信息获取菜单
  const menuSelectorV = useRecoilValue(menuSelector);
  const [menus, _setMenus] = useState(menuSelectorV.getMenus(user.roleType));

  // 默认选中菜单项
  const { pathname } = location;
  const [defaultSelectedKeys] = useState<string[]>([
    pathname.slice(1).replaceAll("/", "-") || "home",
  ]);

  // 跳转
  const selectMenuItem = (item: OnSelectedData) => {
    const { selectedItems } = item;
    if (selectedItems.length) {
      if ("path" in selectedItems[0]) {
        const path = (selectedItems[0] as any).path;
        navigate(path);
      }
    }
  };
  return (
    <Nav
      className="h-full border-b-0"
      mode={props.mode}
      defaultSelectedKeys={defaultSelectedKeys}
      items={menus}
      onSelect={selectMenuItem}
      footer={{ collapseButton: true }}
    ></Nav>
  );
}
