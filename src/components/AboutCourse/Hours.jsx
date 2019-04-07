import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "antd";

class Progress extends Component {
    render() {
        return (
            <>
                <Hours>
                    <p>
                        <Icon
                            type="smile"
                            style={{
                                fontSize: "25px",
                                marginRight: "8px"
                            }}
                            theme="twoTone"
                            twoToneColor="#eb2f96"
                        />
                        {this.props.children}
                    </p>
                </Hours>
            </>
        );
    }
}

export default Progress;

const Hours = styled.div`
    color: rgb(110, 118, 127);
    font-weight: 900;
`;
