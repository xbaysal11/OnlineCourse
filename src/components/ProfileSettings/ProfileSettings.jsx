import React, { Component } from "react";
import { Input } from "antd";

import styled from "styled-components";

class ProfileSettings extends Component {
    render() {
        return (
            <div>
                <AccountInfo action="#" method="post">
                    <div>
                        <label htmlFor="">Name</label>
                        <Input placeholder="Basic usage" />
                    </div>
                    <div>
                        <label htmlFor="">E-mail</label>
                        <Input placeholder="Basic usage" />
                    </div>
                </AccountInfo>
            </div>
        );
    }
}
export default ProfileSettings;

const AccountInfo = styled.form`
    background: #fff;
    padding: 2vw;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 24px 12px 52px 12px;
    min-height: 45vh;
`;
