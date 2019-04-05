import React, { Component } from "react";
import { Input, Select, Row as RRow, Col } from "antd";

import styled from "styled-components";
import UploadAvatar from "./UploadAvatar";

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class ProfileInfo extends Component {
    render() {
        return (
            <Wrapper action="#" method="post">
                <Row>
                    <Col span={6}>
                        <label htmlFor="">NickName</label>
                    </Col>
                    <Col span={18}>
                        <Text>Reshidahunalibek</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <label htmlFor="">Name</label>
                    </Col>
                    <Col span={18}>
                        <Text>Reshidahunalibek</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <label htmlFor="">Surname</label>
                    </Col>
                    <Col span={18}>
                        <Text>Nurzehrihahunugumugumatarev</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <label htmlFor="">E-Mail</label>
                    </Col>
                    <Col span={18}>
                        <Text>123@gmail.com</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <label htmlFor="">Group</label>
                    </Col>
                    <Col span={18}>
                        <Text>Front-end</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <label htmlFor="">Birth day</label>
                    </Col>
                    <Col span={18}>
                        <Text>234.4534.3.345.345.</Text>
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}
export default ProfileInfo;

const Wrapper = styled.form`
    background: #fff;
    padding: 2em;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 24px 12px 52px 12px;
    min-height: 50%;
`;
const Row = styled(RRow)`
    margin: 1em 0;
`;
const Text = styled.div`
    font-size: 16px;
`;
