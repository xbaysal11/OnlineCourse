import React, { Component } from "react";
import { Row, Col, Layout, Button } from "antd";
import SettingsSidebar from "../components/ProfileSettings/SettingsSidebar";
import BasicInfo from "../components/ProfileSettings/BasicInfo";
import { Container } from "../components/index";
import Footer from "../components/Footer/Footer";

const { Sider, Content } = Layout;

class Settings extends Component {
    render() {
        return (
            <Container>
                <Layout>
                    <SettingsSidebar />

                    <Content>
                        <BasicInfo />
                    </Content>
                </Layout>
            </Container>
        );
    }
}
export default Settings;
