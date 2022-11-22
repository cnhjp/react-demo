import { useRecoilState } from "recoil";
import { layoutState } from "../../store";
import { Button } from "@douyinfe/semi-ui";

export default function () {
  const [layout, setLayout] = useRecoilState(layoutState);
  return (
    <div>
      <Button
        onClick={() => setLayout({ ...layout, isHorizon: !layout.isHorizon })}
      >
        切换布局
      </Button>
    </div>
  );
}
