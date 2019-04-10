import React, { Component } from "react";
import { Avatar } from "antd";
import PT from "prop-types";
import styled from "styled-components";

class CommentHeader extends Component {
    static propTypes = {
        first_name: PT.string,
        last_name: PT.string
    };
    render() {
        const { first_name, last_name } = this.props;
        return (
            <Name>
                <div>
                    <Avatar
                        size="large"
                        style={{ backgroundColor: "lightblue" }}
                        icon="user"
                    />
                </div>
                <FullName>
                    {first_name} {last_name}
                </FullName>
            </Name>
        );
    }
}

export default CommentHeader;

const Name = styled.div`
    margin-top: 1em;
    display: flex;
    align-items: center;
`;

const FullName = styled.div`
    margin-left: 0.5em;
`;
