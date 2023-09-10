import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { useContext } from "react";
import ApiContext from "../../store/api-context";
import { useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
const LoginForm = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await sendRequest({
      url: "/user/login",
      method: "POST",
      data: values,
    });
    console.log(data);
    if (data) {
      notification.open({
        type: "success",
        message: data.message,
      });
      login(data);
      navigate("/user");
    }
  };

  if (error) {
    console.log(error);
    notification.open({
      type: "error",
      message: error,
    });
  }

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h2 className="text-3xl font-medium" style={{ marginBottom: "20px" }}>
        Welcome Back!
      </h2>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
            style={{ backgroundColor: "blue" }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
