import React, { Component } from "react";
import LessonComment from "./LessonComment";
import { List } from "antd";
import styled from "styled-components";

class LessonContent extends Component {
    render() {
        return (
            <Wrapper>
                <List
                    className="comment-list"
                    header={`${4} replies`}
                    itemLayout="horizontal"
                    dataSource={[1, 2, 3, 4]}
                    renderItem={item => <LessonComment />}
                />
            </Wrapper>
        );
    }
}
export default LessonContent;
const Wrapper = styled.div`
    padding: 0 1em;
`;
