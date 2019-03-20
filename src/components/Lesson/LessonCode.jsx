import React, { Component } from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

class LessonCode extends Component {
    onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };
    render() {
        return (
            <Wrapper>
                <ul>
                    <li>
                        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        <p>Description</p>
                    </li>

                    <li>
                        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        <h3>Ex1</h3>

                        <p>Description</p>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        <h3>Ex1</h3>
                        <p>Description</p>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        <h3>Ex1</h3>
                        <p>Description</p>
                    </li>
                </ul>
            </Wrapper>
        );
    }
}
export default LessonCode;

const Wrapper = styled.div`
    list-style-type: none;
`;

const ul = styled.ul`
    list-style-type: none;
`;
