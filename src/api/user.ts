import { request } from "../utils/request";
import type { UserTypes } from "../types";
import { UserEnums } from "../enums";

/**
 * 登录
 * @param params
 * @returns
 */
export function login(params: { username: string; password: string }) {
  return request<{ token: string }>("/api/login", params, {
    token: "123456",
  });
}

/**
 * 获取用户角色列表
 * @returns
 */
export function getRoleList() {
  return request<UserTypes.RoleType[]>("/api/role/list", {}, [
    { id: 1, name: "管理员", roleType: UserEnums.ROLE_TYPE.ADMIN },
    { id: 2, name: "普通用户", roleType: UserEnums.ROLE_TYPE.USER },
  ]);
}
