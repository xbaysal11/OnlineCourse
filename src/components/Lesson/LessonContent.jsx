import React, { Component } from "react";
import { List } from "antd";
import styled from "styled-components";
import CommentsList from "./LessonComment";

const data = [
    {
        author: {
            first_name: "Yrys"
        },
        text: "awdawdawdawd",
        answers: [
            {
                author: {
                    first_name: "A"
                },
                text: "",
                answers: []
            }
        ]
    },
    {
        author: {
            first_name: "A"
        },
        text: ""
    }
];

class LessonContent extends Component {
    render() {
        return (
            <Wrapper>
                <CommentsList comments={data} />
            </Wrapper>
        );
    }
}
export default LessonContent;
const Wrapper = styled.div`
    padding: 0 1em;
`;
