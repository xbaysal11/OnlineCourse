import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import AccountSidebar from "../components/ProfileSettings/SettingsSidebar";
import BasicInfo from "../components/ProfileSettings/BasicInfo";
import { Container } from "../components/index";

class Settings extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <_Settings>
                        <Col span={6}>
                            <AccountSidebar />
                        </Col>
                        <Col span={18}>
                            <BasicInfo />
                        </Col>
                    </_Settings>
                </Row>
            </Container>
        );
    }
}
export default Settings;

const _Settings = styled.div`
    display: flex;
`;
