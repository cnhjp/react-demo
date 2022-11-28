/**
 * 模拟请求
 * @param url
 * @param params
 * @param respData
 * @param config
 * @returns
 */
export function request<T>(
  url: string,
  params: any,
  respData: any,
  config?: { delay?: number; reject?: boolean }
): Promise<{ data: T }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (config?.reject) {
        reject({ error: "请求失败" });
      } else {
        resolve({ data: respData });
      }
    }, config?.delay || 1000);
  });
}
