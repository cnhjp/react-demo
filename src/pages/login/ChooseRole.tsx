import { userApis } from "../../api";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "@douyinfe/semi-ui";
import type { UserTypes } from "../../types";

export default function () {
  const [roles, setRoles] = useState<UserTypes.RoleType[]>([]);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  useEffect(() => {
    userApis.getRoleList().then(({ data }: { data: UserTypes.RoleType[] }) => {
      if (data) {
        setRoles(data);
      }
    });
  }, []);

  // 选择角色
  const chooseRole = (role: UserTypes.RoleType) => {
    setUser({
      ...user,
      roleId: role.id,
      roleType: role.roleType,
      name: role.name,
    });
    navigate("/");
  };

  return (
    <List
      className="flex flex-col items-center pt-20"
      dataSource={roles}
      renderItem={(item) => (
        <div
          className="text-4xl text-center mb-10 px-20 py-10 border border-solid border-light-800 rounded-md shadow-light-800 hover:cursor-pointer hover:bg-light-900"
          onClick={() => chooseRole(item)}
        >
          {item.name}
        </div>
      )}
    ></List>
  );
}
