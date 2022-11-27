import { request } from "../utils/request";

/**
 * 登录
 * @param params
 * @returns
 */
export function login(params: { username: string; password: string }) {
  return request("/api/login", params, {
    token: "123456",
  });
}
