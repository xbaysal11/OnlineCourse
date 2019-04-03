import React, { Component } from "react";
import styled from "styled-components";

import { Menu, Icon, Layout } from "antd";
import { colors } from "../../config/var";
import SiderMenu from "../SiderMenu";

const SubMenu = Menu.SubMenu;

class SettingsSidebar extends Component {
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
    onToggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            <Wrapper>
                <Layout.Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    theme="light"
                    trigger={null}
                >
                    <SiderMenu
                        onClick={this.handleClick}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        mode="inline"
                        toggle={this.onToggle}
                        collapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>Profile</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="project" />
                            <span>My Courses</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="calculator" />
                            <span>Groups</span>
                        </Menu.Item>

                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="setting" />
                                    <span>Settings</span>
                                </span>
                            }
                        >
                            <Menu.Item key="4">
                                <Icon type="solution" />
                                Profile
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="tool" />
                                Accounts
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="bell" />
                                Notifications
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item
                            key="7"
                            style={{
                                color: "red",
                                background: colors.red_light
                            }}
                        >
                            <Icon type="logout" />
                            <span>Log Out</span>
                        </Menu.Item>
                    </SiderMenu>
                </Layout.Sider>
            </Wrapper>
        );
    }
}
export default SettingsSidebar;

const Wrapper = styled.div`
    /* margin: 24px 12px 52px 12px; */
`;
