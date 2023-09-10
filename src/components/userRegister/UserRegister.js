import { Button, Form, Input, Select, notification } from "antd";
import { useContext } from "react";
import ApiContext from "../../store/api-context";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const UserRegister = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const regData = {
      ...values,
      gdr: values.gender,
    };
    const data = await sendRequest({
      method: "POST",
      url: "/user/register",
      data: regData,
    });
    console.log(data);
    if (data.status === 201) {
      notification.open({
        type: "success",
        message: data.msg,
      });
    } else {
      notification.open({
        type: "warning",
        message: data.msg,
      });
    }
  };

  if (error) {
    notification.open({
      type: "error",
      message: error,
    });
  }

  return (
    <div
      style={{
        margin: "60px auto",
        backgroundColor: "#fff",
        maxWidth: "720px",
        borderRadius: "12px",
        padding: "30px",
      }}
    >
      <h1 className="text-center text-3xl mb-7 text-blue-500">
        Welcome to our platform
      </h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              type: "text",
              message: "The input is not valid Name!",
            },
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore="+963"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            style={{ backgroundColor: "blue" }}
            loading={isLoading}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UserRegister;
