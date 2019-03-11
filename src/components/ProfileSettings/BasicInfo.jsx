import React, { Component } from "react";
import { Input as InputAntd } from "antd";
import { colors } from "../../config/var";

import styled from "styled-components";

class BasicInfo extends Component {
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
export default BasicInfo;

const AccountInfo = styled.form`
    padding: 2vw;
    background: #fff;
    border-left: 4px solid ${colors.main};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 24px 12px 52px 12px;
    /* width: 40vw; */
    min-height: 40vh;
`;

const Input = styled(InputAntd)`
    font-size: 16px;
    line-height: 22px;
    padding: 0.6rem 0;
    text-indent: 0.8rem;
    display: inline-block;

    margin: 3vh 2vw;
    background-color: transparent;
    width: 60vw;
    overflow: visible;
    -webkit-appearance: none;
    border-radius: 0;
    word-break: normal;
    -webkit-rtl-ordering: logical;
    cursor: text;
`;
