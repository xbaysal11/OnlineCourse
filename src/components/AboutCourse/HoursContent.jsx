import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "antd";

class Progress extends Component {
    render() {
        return (
            <>
                <Content>
                    <p>
                        <Icon
                            type="check-circle"
                            style={{
                                fontSize: "25px",
                                marginRight: "8px"
                            }}
                            theme="twoTone"
                            twoToneColor="blue"
                        />
                        {this.props.children}
                    </p>
                </Content>
            </>
        );
    }
}

export default Progress;

const Content = styled.div`
    color: rgb(110, 118, 127);
`;
