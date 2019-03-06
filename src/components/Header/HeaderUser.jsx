import React, { Component } from "react";
import { Row, Col, Avatar, Badge, Button, Layout } from "antd";
import styled from "styled-components";

class HeaderUser extends Component {
    render() {
        return (
            <div>
                <Badge count={1}>
                    <Avatar shape="square" icon="user" />
                </Badge>
                <UserName> Ragnar Lod Brock</UserName>
                {/*  <Button type="primary" className={"head_btn2"}>
                    Log in
                </Button> */}
            </div>
        );
    }
}

const UserName = styled.span`
    color: #fff;
    margin-left: .5em;
`;

export default HeaderUser;
