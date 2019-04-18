import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Row, Col } from "antd";

import { colors } from "../../config";
import UserStatus from "../ProfileSettings/UserStatus";

class LessonAutor extends Component {
    render() {
        return (
            <Autor>
                <Row>
                    <Col span={3}>
                        <Avatar
                            shape="circle"
                            size={60}
                            icon="user"
                            src="https://randomuser.me/api/portraits/men/71.jpg"
                        />
                    </Col>
                    <Col span={21}>
                        <Name>
                            <p>John Snow</p>
                            <UserStatus userStatus="Teacher" />
                        </Name>
                    </Col>
                </Row>
            </Autor>
        );
    }
}
export default LessonAutor;
const Autor = styled.div`
    margin: 1em 0;
`;
const Name = styled.div`
    color: ${colors.blue};
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    padding: 0;
    & p {
        margin: 0;
        padding: 0;
    }
`;
