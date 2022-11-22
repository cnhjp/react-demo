import { atom } from "recoil";

export const layoutState = atom({
  key: "layoutState",
  default: {
    isHorizon: true,
    isDark: false,
  },
});
