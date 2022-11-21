import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { layoutState } from "../store/index";
import LayoutHorizon from "./LayoutHorizon";
import LayoutVertical from "./LayoutVertical";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";

export default function () {
  const layoutStateValue = useRecoilValue(layoutState);
  const navigate = useNavigate();
  const selectMenuItem = (item: OnSelectedData) => {
    const { selectedItems } = item;
    if (selectedItems.length) {
      if ("path" in selectedItems[0]) {
        const path = (selectedItems[0] as any).path;
        navigate(path);
      }
    }
  };

  return layoutStateValue.isHorizon ? (
    <LayoutHorizon selectMenuItem={selectMenuItem}></LayoutHorizon>
  ) : (
    <LayoutVertical></LayoutVertical>
  );
}
