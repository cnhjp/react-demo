import { useRecoilValue } from "recoil";
import { layoutState } from "../store/index";
import LayoutHorizon from "./LayoutHorizon";
import LayoutVertical from "./LayoutVertical";

export default function () {
  const layoutStateValue = useRecoilValue(layoutState);

  return layoutStateValue.isHorizon ? (
    <LayoutHorizon></LayoutHorizon>
  ) : (
    <LayoutVertical></LayoutVertical>
  );
}
