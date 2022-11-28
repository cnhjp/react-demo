import { Avatar, Space, Tooltip, Dropdown, Modal } from "@douyinfe/semi-ui";
import {
  IconMoon,
  IconSun,
  IconSidebar,
  IconListView,
  IconUser,
  IconExit,
} from "@douyinfe/semi-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { layoutState, userSelector, userState } from "../../store";
import { toggleDarkMode } from "../../utils";

export default function () {
  const [layout, setLayout] = useRecoilState(layoutState);
  const [user, setUser] = useRecoilState(userState);
  const userGetter = useRecoilValue(userSelector);
  const navigate = useNavigate();
  // 切换暗色模式
  const toggleDark = () => {
    toggleDarkMode(!layout.isDark);
    setLayout({ ...layout, isDark: !layout.isDark });
  };
  // 切换布局样式
  const toggleLayout = () => {
    setLayout({ ...layout, isHorizon: !layout.isHorizon });
  };
  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "确认退出登录？",
      onOk: () => {
        setUser({
          token: "",
          roleId: "",
          roleType: "",
          name: "",
        });
        navigate("/login");
      },
    });
  };

  return (
    <div className="flex justify-end items-center p-4">
      <Space>
        <div className="h-8 w-8 flex justify-center items-center hover:cursor-pointer hover:bg-light-600 dark:hover:bg-dark-50">
          {layout.isDark ? (
            <Tooltip content="日间模式">
              <IconSun onClick={toggleDark} />
            </Tooltip>
          ) : (
            <Tooltip content="夜间模式">
              <IconMoon onClick={toggleDark} />
            </Tooltip>
          )}
        </div>
        <div className="h-8 w-8 flex justify-center items-center hover:cursor-pointer hover:bg-light-600 dark:hover:bg-dark-50">
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
        <Dropdown
          render={
            <Dropdown.Menu>
              <Dropdown.Item icon={<IconUser />}>
                {userGetter.roleTypeStr}
              </Dropdown.Item>
              <Dropdown.Item icon={<IconExit />} onClick={logout}>
                登出
              </Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <Avatar size="small" alt="Hjp">
            H
          </Avatar>
        </Dropdown>
      </Space>
    </div>
  );
}
