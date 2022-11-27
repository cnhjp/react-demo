/**
 * 模拟请求
 * @param url
 * @param options
 * @param resp
 * @returns
 */
export const request = (url: string, options: any, resp: any) => {
  return Promise.resolve({
    data: resp,
  });
};
