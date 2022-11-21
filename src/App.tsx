import React from "react";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function () {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}
