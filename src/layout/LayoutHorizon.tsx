import { Outlet } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import Menu from "./horizon/Menu";
import { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import style from "./styles/index.module.scss";

export default function (props: {
  selectMenuItem: (item: OnSelectedData) => void;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Sider className={style["h-full"]}>
        <Menu selectMenuItem={props.selectMenuItem} />
      </Layout.Sider>
      <Layout.Content>
        <Outlet></Outlet>
      </Layout.Content>
    </Layout>
  );
}
