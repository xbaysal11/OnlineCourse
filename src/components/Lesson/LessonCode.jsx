import React, { Component } from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

import Ide from "../Ide";
import MarkdownText from "../MarkdownText";

class LessonCode extends Component {
    onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };
    render() {
        return (
            <Wrapper>
                <MarkdownText/>

                <ul>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex1</Checkbox>
                    </li>

                    <li>
                        <Checkbox onChange={this.onChange}>Ex2</Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex3</Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex4</Checkbox>
                    </li>
                </ul>
                <Ide />
            </Wrapper>
        );
    }
}
export default LessonCode;

const Wrapper = styled.div`
    list-style-type: none;
    padding: 1.5em;
    background: #fff;
`;

const ul = styled.ul`
    list-style-type: none;
`;
