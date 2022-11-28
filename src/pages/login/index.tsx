import style from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Toast } from "@douyinfe/semi-ui";
import { IconUserCircle, IconLock } from "@douyinfe/semi-icons";
import { userApis } from "../../api";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";

export default function () {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  // 更新表单
  const updateForm = (v: { username: string; password: string }) => {
    setForm(v);
  };

  // 登录
  const login = async () => {
    // 检查是否为空
    if (!form.username || !form.password) {
      return Toast.error("请输入用户名和密码");
    }
    const { data } = await userApis.login(form);
    const { token } = data;
    if (token) {
      setUser({ ...user, token });
      navigate("/choose-role");
    } else {
      Toast.error("登录失败");
    }
  };

  return (
    <div className={style["login"]}>
      <div className={style["login-wrapper"]}>
        <Form onValueChange={updateForm}>
          <Form.Input
            prefix={<IconUserCircle />}
            field="username"
            label="用户"
            placeholder="请输入用户名"
          ></Form.Input>
          <Form.Input
            prefix={<IconLock />}
            field="password"
            label="密码"
            type="password"
            placeholder="请输入密码"
          ></Form.Input>
          <Button
            theme="solid"
            type="primary"
            className="w-full mt-4"
            onClick={login}
          >
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
}
