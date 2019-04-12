import React, { Component } from "react";

import { Menu, Layout } from "antd";
import SiderMenu from "../SiderMenu";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LessonSideBar extends Component {
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
            <Layout.Sider
                collapsible
                collapsed={this.state.collapsed}
                theme="light"
                trigger={null}
                collapsedWidth="120px"
            >
                <SiderMenu
                    onClick={this.handleClick}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    toggle={this.onToggle}
                    collapsed={this.state.collapsed}
                    style={{
                        minWidth: "100%"
                        
                    }}
                >
                    <MenuItemGroup key="g1" title="Week 1">
                        <Menu.Item  key="1" style={{backgroundColor:"#C7FFBF"}}>Lesson 1</Menu.Item>
                        <Menu.Item key="2" style={{backgroundColor:"#C7FFBF"}}>Lesson 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Week 2">
                        <Menu.Item key="3" style={{backgroundColor:"#C7FFBF"}}>Lesson 3</Menu.Item>
                        <Menu.Item key="4">Lesson 4</Menu.Item>
                    </MenuItemGroup>

                    <Menu.Item  key="5" disabled>Lesson 5</Menu.Item>
                    <Menu.Item key="6" disabled>Lesson 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7" disabled>Lesson 7</Menu.Item>
                        <Menu.Item key="8" disabled>Lesson 8</Menu.Item>
                    </SubMenu>
                </SiderMenu>
            </Layout.Sider>
        );
    }
}
export default LessonSideBar;
