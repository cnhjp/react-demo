import { Nav } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuState } from "../../store/index";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import style from "../styles/index.module.scss";

export default function (props: {
  selectMenuItem: (item: OnSelectedData) => void;
}) {
  const items = useRecoilValue(menuState);
  return (
    <Nav
      className={style["h-full"]}
      bodyStyle={{ height: "100%" }}
      items={items}
      onSelect={props.selectMenuItem}
      footer={{ collapseButton: true }}
    ></Nav>
  );
}
