import React, { Component } from "react";

import { Menu, Icon, Layout } from "antd";
import { colors } from "../../config/var";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SettingsSidebar extends React.Component {
    handleClick = e => {
        console.log("click ", e);
    };
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout.Sider
                // collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu
                    onClick={this.handleClick}
                    // style={{ width: 256 }}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                >
                    <Menu.Item key="1">Profile </Menu.Item>
                    <Menu.Item key="2">My Courses </Menu.Item>
                    <Menu.Item key="3">Success Reports </Menu.Item>

                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>Settings</span>
                            </span>
                        }
                    >
                        <Menu.Item key="4">Profile</Menu.Item>
                        <Menu.Item key="5">Accounts</Menu.Item>
                        <Menu.Item key="6">Notifications</Menu.Item>
                    </SubMenu>
                    <Menu.Item
                        key="7"
                        style={{ color: "red", background: colors.red_light }}
                    >
                        Log Out
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}
export default SettingsSidebar;
