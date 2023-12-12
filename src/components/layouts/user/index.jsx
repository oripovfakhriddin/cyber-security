import { Fragment, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Layout, Menu, theme } from "antd";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import useScreenSize from "./../../../utils/useScreen";

import "./style.scss";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink to="/dashboard">Dashboard</NavLink>,
    "/dashboard",
    <PieChartOutlined />
  ),
  getItem(<NavLink to="/rsa">RSA</NavLink>, "/rsa", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />),
  getItem("Files", "9", <FileOutlined />),
];

const UserLayout = () => {
  const location = useLocation();
  const screen = useScreenSize();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (screen < 550) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screen]);

  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">
            {!collapsed ? <h1>731-22 Group</h1> : <h1>731</h1>}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#001529",
              margin: "0 10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            {" "}
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            TUIT ©2023 Created by Juniors Group
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default UserLayout;
