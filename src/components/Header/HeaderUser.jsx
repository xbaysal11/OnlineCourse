import React, { Component } from "react";
import { Dropdown, Icon, Avatar, Badge, Menu, Button } from "antd";
import styled from "styled-components";

const menu = (
    <Menu style={{ width: "200px" }}>
        <Menu.Item key="3">My Corses</Menu.Item>
        <Menu.Item key="3">Profile</Menu.Item>
        <Menu.Item key="3">My Purchases</Menu.Item>
        <Menu.Item key="3">Settings</Menu.Item>
        <Menu.Item key="3">Help Center</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Log Out</Menu.Item>
    </Menu>
);

class HeaderUser extends Component {
    render() {
        return (
            <div>
                <Badge count={1}>
                    <Avatar shape="square" icon="user" />
                </Badge>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <UserName>
                        Ragnar Lod Brock <Icon type="down" />
                    </UserName>
                </Dropdown>

                {/*  <Button type="primary" className={"head_btn2"}>
                    Log in
                </Button> */}
            </div>
        );
    }
}

const UserName = styled.span`
    color: #fff;
    margin-left: 0.5em;
    cursor: pointer;
`;

const CustomMenu = styled(Menu)``;

export default HeaderUser;
