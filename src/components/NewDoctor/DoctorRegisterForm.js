import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, notification } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../store/api-context";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "antd/es/modal/Modal";
import { Option } from "antd/es/mentions";

const DoctorRegisterForm = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const navigate = useNavigate();

  const [spzs, setSpzs] = useState([]);

  const [isModalOpen, setModalIsOpen] = useState(false);

  const onFinish = async (values) => {
    const regData = {
      ...values,
    };
    const data = await sendRequest({
      url: "/register",
      data: regData,
      method: "POST",
    });
    if (data.status === 201) {
      setModalIsOpen(true);
      notification.open({
        type: "success",
        message: "Your account is pending, we'll contact you soon.",
        duration: 10000,
      });
      navigate("/");
    }
  };

  if (error) {
    notification.open({
      type: "error",
      message: error,
    });
  }

  const fetchSpectializtions = async () => {
    const data = await sendRequest({
      url: "/spz",
    });
    console.log(data);
    let spzs = [];
    for (const spz of data) {
      spzs.push({
        value: spz.name,
        label: spz.name,
      });
    }
    setSpzs(data);
  };

  useEffect(() => {
    fetchSpectializtions();
  }, []);

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
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
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
          />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input your gender",
            },
          ]}
        >
          <Select
            placeholder="Select your gender"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          name="spz"
          rules={[
            {
              required: true,
              message: "Please input your specialist",
            },
          ]}
        >
          <Select
            placeholder="Select your specialist"
            onChange={(e) => console.log(e)}
            style={{ color: "black" }}
          >
            {spzs.map((spz) => (
              <Option key={spz.id} value={spz.id}>
                {spz.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: "blue" }}
            loading={isLoading}
          >
            Register
          </Button>
          Or{" "}
          <Link style={{ color: "blue" }} to="/doctor-login">
            Login
          </Link>
        </Form.Item>
      </Form>
      {/* <Modal title="Welcome Dr Omar Hasan" open={isModalOpen}>
        <p>Your account is pending, we'll contact you soon.</p>
      </Modal> */}
    </>
  );
};
export default DoctorRegisterForm;
