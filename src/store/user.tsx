import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserEnums } from "../enums";

const { persistAtom } = recoilPersist({
  key: "userState",
  storage: sessionStorage,
});

export const userState = atom({
  key: "userState",
  default: {
    token: "",
    roleId: "",
    roleType: "",
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const user = get(userState);
    let roleTypeStr;
    switch (user.roleType) {
      case UserEnums.ROLE_TYPE.ADMIN:
        roleTypeStr = "管理员";
        break;
      case UserEnums.ROLE_TYPE.USER:
        roleTypeStr = "普通用户";
        break;
      default:
        roleTypeStr = "未知";
        break;
    }
    return {
      ...user,
      roleTypeStr,
    };
  },
});
