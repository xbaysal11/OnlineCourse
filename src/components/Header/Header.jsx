import React, { Component } from "react";
import { Row, Col, Icon, Menu, Layout, Input, Button} from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import OpenModal from "../modal/OpenModal";

import HeaderUser from "./HeaderUser";
import { Container, LoginModal, RegisterModal } from "..";

const Search = Input.Search;

class Header extends Component {
    state = {
        current: "home"
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
                        <Container>
                            <Row align="middle" type="flex">
                                <Col span={8}>
                                    <Menu
                                        onClick={this.handleClick}
                                        selectedKeys={[this.state.current]}
                                        mode="horizontal"
                                        theme="dark"
                                        style={{ lineHeight: "64px" }}
                                    >
                                        <Menu.Item key="home">
                                            <NavLink to="/">
                                                <Icon type="home" />
                                                Home
                                            </NavLink>
                                        </Menu.Item>

                                        <Menu.Item key="app">
                                            <NavLink to="/syllabus">
                                                <Icon type="appstore" />
                                                Courses
                                            </NavLink>
                                        </Menu.Item>
                                    </Menu>
                                </Col>
                                <Col span={8}>
                                    {
                                        <Search
                                            placeholder=" search"
                                            onSearch={value =>
                                                console.log(value)
                                            }
                                        />
                                    }
                                </Col>

                                <Col
                                    span={8}
                                    style={{
                                        justifyContent: "flex-end",
                                        display: "flex"
                                    }}
                                >
                                    <LoginModal name={"login"} />
                                    <RegisterModal name={"register"} />
                                    <HeaderUser />
                                </Col>
                            </Row>
                        </Container>
                    </Layout.Header>
                </Layout>
            </Bg>
        );
    }
}

export default Header;

const Bg = styled.div`
    .head_btn2 {
        margin-left: 6rem;
    }
`;
