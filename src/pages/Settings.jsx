import React, { Component } from "react";
import styled from "styled-components";
import AccountSidebar from "../components/ProfileSettings/SettingsSidebar";
import BasicInfo from "../components/ProfileSettings/BasicInfo";

class Settings extends Component {
    render() {
        return (
            <SettingsAccount>
                <AccountSidebar />
                <BasicInfo />
            </SettingsAccount>
        );
    }
}
export default Settings;

const SettingsAccount = styled.div`
    display: flex;
`;
