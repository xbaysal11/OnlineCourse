import React, { Component } from "react";
import { Row, Col, Icon, Menu, Button, Layout } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import Login from "../Registration/Login";
import HeaderUser from "./HeaderUser";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
    state = {
        current: "mail"
    };

    handleClick = e => {
        console.log("click ", e);
        this.setState({
            current: e.key
        });
    };

    render() {
        return (
            <Bg>
                <Layout>
                    <Layout.Header>
                        <Row align="middle" type="flex">
                            <Col span={6} offset={3}>
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                    theme="dark"
                                    style={{ lineHeight: "64px" }}
                                >
                                    <Menu.Item key="mail">
                                        <NavLink to="/">
                                            {" "}
                                            <Icon type="mail" />
                                            Teacher{" "}
                                        </NavLink>
                                    </Menu.Item>

                                    <Menu.Item key="app">
                                        <NavLink to="/syllabus">
                                            <Icon type="appstore" />
                                            Courses{" "}
                                        </NavLink>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={6}>
                                <SearchItem placeholder="Search" />
                            </Col>

                            <Col
                                span={6}
                                style={{
                                    justifyContent: "flex-end",
                                    display: "flex"
                                }}
                            >
                            <HeaderUser/>
                                
                            </Col>
                        </Row>
                    </Layout.Header>
                </Layout>
            </Bg>
        );
    }
}

export default Header;

const SearchItem = styled.input`
    background-color: #eee;
    border: 1px solid #eee;
    width: 15rem;
    border-radius: 5px;
    color: #222;
    width:100%;
    height: 2rem;
    &::-webkit-input-placeholder {
        padding-left: 20px;
    }
`;
const Bg = styled.div`
    .head_btn2 {
        margin-left: 6rem;
    }
`;
