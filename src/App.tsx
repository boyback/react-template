import type { MenuProps, MenuTheme } from "antd/es/menu";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Layout } from "antd";
import Wrapper from "./Wrapper";
const { Header, Footer, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];

const App: React.FC = () => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  return (
    <Wrapper>
      <div className="layout" style={{ display: "flex" }}>
        <Menu
          style={{ width: 200 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={mode}
          theme={theme}
          items={items}
        />
        <div className="layout">
          <div className="header">
            <div className="welecome">
              <div className="name">Hi赵瑞,</div>
              <div className="tip">欢迎回来</div>
            </div>
            <div className="search">
              <input type="text" placeholder="搜索" />
              <div className="tip"></div>
            </div>
          </div>
          <div className="content">
            <div className="status-card"></div>
            <div className="bill-card">
              <div className="bill-chart"></div>
              <div className="bill-editor"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default App;
