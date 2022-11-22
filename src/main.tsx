import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "virtual:windi.css";
import "./styles/index.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
