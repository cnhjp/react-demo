import { Outlet } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import Menu from "./components/Menu";
import User from "./components/User";

export default function () {
  return (
    <Layout className="h-screen">
      <Layout.Header className="h-16 flex justify-between items-center border-b-1 border-bottom-gray-light-600">
        <Menu mode="horizontal"></Menu>
        <User></User>
      </Layout.Header>
      <Layout.Content className="p-1">
        <Outlet></Outlet>
      </Layout.Content>
    </Layout>
  );
}
