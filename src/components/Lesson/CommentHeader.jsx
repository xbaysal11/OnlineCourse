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
                <Avatar
                    size="large"
                    style={{ backgroundColor: "lightblue" }}
                    icon="user"
                />
                {first_name}
                {last_name}
            </Name>
        );
    }
}

export default CommentHeader;

const Name = styled.div`
    margin-top: 1em;
`;
