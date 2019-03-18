import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Menu, Icon } from "antd";

class LessonContent extends Component {
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
            <Wrapper>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <NavLink to={`lessons/home`}>
                            <Icon type="home" />
                            Lesson Title
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="code">
                        <NavLink to={`lesson/code`}>
                            <Icon type="code" />
                            Code
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Wrapper>
        );
    }
}
export default LessonContent;

const Wrapper = styled.div`
    text-align: center;
`;
