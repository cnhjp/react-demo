import { Avatar, Space } from "@douyinfe/semi-ui";
import { IconMoon, IconSun } from "@douyinfe/semi-icons";
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

  return (
    <div className="flex justify-end items-center p-4">
      <Space>
        <div className="h-8 w-8 flex justify-center items-center hover:cursor-pointer hover:bg-light-600">
          {layout.isDark ? (
            <IconSun onClick={toggleDarkMode} />
          ) : (
            <IconMoon onClick={toggleDarkMode} />
          )}
        </div>
        <Avatar size="small" alt="Hjp"></Avatar>
      </Space>
    </div>
  );
}
