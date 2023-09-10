import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { useContext } from "react";
import ApiContext from "../../store/api-context";
import { useNavigate } from "react-router";
const AdminLogin = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await sendRequest({
      url: "/admin-login",
      method: "POST",
      data: values,
    });
    console.log(data);
    if (data.status === 201) {
      notification.open({
        type: "success",
        message: data.msg,
      });
      navigate("/admin");
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
      <h2 style={{ marginBottom: "20px" }}>Welcome Back!</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
export default AdminLogin;
