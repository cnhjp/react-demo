import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { layoutState } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { toggleDarkMode } from "./utils";

export default function () {
  const layout = useRecoilValue(layoutState);
  useEffect(() => {
    toggleDarkMode(layout.isDark);
  }, []);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>loading...</div>}
    ></RouterProvider>
  );
}
