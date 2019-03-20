import React, { Component } from "react";
import styled from "styled-components";

import { Menu, Icon } from "antd";

class LessonTabber extends Component {
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
                        {/* <NavLink to={`${match.url}/home`}> */}
                        <Icon type="home" />
                        Lesson Title
                        {/* </NavLink> */}
                    </Menu.Item>
                    <Menu.Item key="code">
                        <Icon type="code" />
                        Code
                    </Menu.Item>
                </Menu>
            </Wrapper>
        );
    }
}
export default LessonTabber;

const Wrapper = styled.div`
    text-align: center;
`;
