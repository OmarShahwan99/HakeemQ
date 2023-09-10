import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Logo from "../../components/logo/Logo";
import { Outlet, useNavigate } from "react-router";
const { Header, Sider, Content } = Layout;

const UserDashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <h1 className="text-white text-center text-xl my-5">Omar Shahwan</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/user/appointments",
              icon: <VideoCameraOutlined />,
              label: "Appointments",
            },
            {
              key: "/user/profile",
              icon: <UserOutlined />,
              label: "Profile",
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
export default UserDashboard;
