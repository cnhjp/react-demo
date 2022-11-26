import { Suspense, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { layoutState } from "./store";
import { RouterGuard, routes } from "./router";
import { toggleDarkMode } from "./utils";

export default function () {
  const layout = useRecoilValue(layoutState);
  // 初始加载时，根据系统设置切换主题
  useEffect(() => {
    toggleDarkMode(layout.isDark);
  }, []);

  return <Suspense>{RouterGuard(routes)}</Suspense>;
}
