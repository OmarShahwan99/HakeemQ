import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, notification } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../store/api-context";

import { useNavigate } from "react-router-dom";

const DoctorRegisterForm = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    console.log(values);
    const data = await sendRequest({
      url: "/login",
      data: values,
    });
    console.log(data);
    if (data.status === 201) {
      notification.open({
        type: "success",
        message: data.msg,
      });
      navigate("/dashboard");
    }
  };

  if (error) {
    notification.open({
      type: "error",
      message: error,
    });
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
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
          style={{ backgroundColor: "blue" }}
          loading={isLoading}
        >
          Login
        </Button>
        Or{" "}
        <Link style={{ color: "blue" }} to="/doctor-register">
          Register Now!
        </Link>
      </Form.Item>
    </Form>
  );
};
export default DoctorRegisterForm;
