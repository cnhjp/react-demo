import { Avatar, Space, Tooltip } from "@douyinfe/semi-ui";
import {
  IconMoon,
  IconSun,
  IconSidebar,
  IconListView,
} from "@douyinfe/semi-icons";
import { useRecoilState } from "recoil";
import { layoutState } from "../../store";

export default function () {
  const [layout, setLayout] = useRecoilState(layoutState);
  const toggleDarkMode = () => {
    setLayout({ ...layout, isDark: !layout.isDark });
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
    } else {
      body.setAttribute("theme-mode", "dark");
    }
  };
  const toggleLayout = () => {
    setLayout({ ...layout, isHorizon: !layout.isHorizon });
  };

  return (
    <div className="flex justify-end items-center p-4">
      <Space>
        <div className="h-8 w-8 flex justify-center items-center hover:cursor-pointer hover:bg-light-600">
          {layout.isDark ? (
            <Tooltip content="日间模式">
              <IconSun onClick={toggleDarkMode} />
            </Tooltip>
          ) : (
            <Tooltip content="夜间模式">
              <IconMoon onClick={toggleDarkMode} />
            </Tooltip>
          )}
        </div>
        <div className="h-8 w-8 flex justify-center items-center hover:cursor-pointer hover:bg-light-600">
          {layout.isHorizon ? (
            <Tooltip content="水平布局">
              <IconListView onClick={toggleLayout} />
            </Tooltip>
          ) : (
            <Tooltip content="垂直布局">
              <IconSidebar onClick={toggleLayout} />
            </Tooltip>
          )}
        </div>
        <Avatar size="small" alt="Hjp">
          H
        </Avatar>
      </Space>
    </div>
  );
}
