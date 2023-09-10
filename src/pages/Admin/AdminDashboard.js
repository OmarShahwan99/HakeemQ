import React, { useState } from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  MedicineBoxFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Logo from "../../components/logo/Logo";
import { Outlet, useNavigate } from "react-router";
const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/admin/admin-doctors",
              icon: <MedicineBoxFilled />,
              label: "Doctors",
            },
            {
              key: "/admin/admin-appointments",
              icon: <VideoCameraOutlined />,
              label: "Appointments",
            },
            {
              key: "/admin/admin-users",
              icon: <UserOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ paddingLeft: "20px" }}>
            <Logo />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminDashboard;
