import React, { Component } from "react";
import { Input as InputAntd, Icon } from "antd";
import styled from "styled-components";
import AccountSidebar from "./AccountSidebar";

class AccountSettings extends Component {
    render() {
        return (
            <SettingsAccount>
                <AccountSidebar />
            </SettingsAccount>
        );
    }
}
export default AccountSettings;

const SettingsAccount = styled.div`
    display: flex;
`;
