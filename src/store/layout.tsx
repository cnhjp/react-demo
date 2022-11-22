import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "layoutState",
  storage: localStorage,
});

export const layoutState = atom({
  key: "layoutState",
  default: {
    isHorizon: true,
    isDark: false,
  },
  effects_UNSTABLE: [persistAtom],
});
