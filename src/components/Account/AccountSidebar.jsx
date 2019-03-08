import React, { Component } from "react";
import styled from "styled-components";

class AccountSidebar extends Component {
    render() {
        return (
            <div>
                <SettingsSidebar>
                    <SettingsSidebarItem>
                        <a href="/account">Basic Information</a>{" "}
                    </SettingsSidebarItem>

                    <SettingsSidebarItem>
                        <a href="/account/password">Change Password</a>{" "}
                    </SettingsSidebarItem>
                    <SettingsSidebarItem>
                        <a href="/account/mail_settings">Mail Settings</a>{" "}
                    </SettingsSidebarItem>

                    <SettingsSidebarItem>
                        <a href="/account/linked_accts">Linked Accounts</a>{" "}
                    </SettingsSidebarItem>

                    <SettingsSidebarItem>
                        <a href="/account/delete_acct">Delete Account</a>{" "}
                    </SettingsSidebarItem>
                </SettingsSidebar>
            </div>
        );
    }
}
export default AccountSidebar;

const SettingsSidebar = styled.ul`
    padding: 1vh 0;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 3vh 2vw;
    width: 20vw;
    word-break: break-word;
    box-sizing: border-box;
    display: block;
`;

const SettingsSidebarItem = styled.li`
    list-style: none;
    font-size: 18px;
    padding: 0.6em 2.8vw;
    &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #192a56;
    }
    a {
        color: #273c75;
        &:hover {
            color: #192a56;
        }
    }
`;
