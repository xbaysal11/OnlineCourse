import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import LessonSideBar from "../components/Lesson/LessonSideBar";
import { Container, LessonContent, LessonCode } from "../components/index";
import { Redirect, NavLink } from "react-router-dom";
import styled from "styled-components";
import PT from "prop-types";

const { Content, Sider } = Layout;

class Lessons extends Component {
    static propTypes = {
        match: PT.object
    };
    state = {
        collapsed: false,
        current: "home"
    };
    handleClick = e => {
        console.log("click ", e);
        this.setState({
            current: e.key
        });
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    onToggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };
    render() {
        const {
            match: {
                params: { tab, lesson_id },
                url: match_url
            }
        } = this.props;
        return (
            <Container>
                <Layout>
                    <Sider
                        theme="light"
                        collapsible
                        collapsed={this.state.collapsed}
                        trigger={null}
                    >
                        <LessonSideBar onToggle onCollapse />
                    </Sider>
                    <Content>
                        <Wrapper>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="home">
                                    <NavLink to={`/lessons/${lesson_id}/home`}>
                                        <Icon type="home" />
                                        Lesson Title
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="code">
                                    <NavLink to={`/lessons/${lesson_id}/code`}>
                                        <Icon type="code" />
                                        Code
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </Wrapper>
                        {tab === "home" ? (
                            <LessonContent />
                        ) : tab === "code" ? (
                            <LessonCode />
                        ) : (
                            <Redirect to={match_url + "/home"} />
                        )}
                    </Content>
                </Layout>
            </Container>
        );
    }
}
export default Lessons;

const Wrapper = styled.div`
    text-align: center;
`;
