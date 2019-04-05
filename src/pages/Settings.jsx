import React, { Component } from "react";
import { Layout } from "antd";
import SettingsSidebar from "../components/ProfileSettings/SettingsSidebar";
import BasicInfo from "../components/ProfileSettings/ProfileSettings";
import { Container } from "../components/index";

const { Content } = Layout;

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
