import React, { Component } from "react";
import PT from "prop-types";
import styled from "styled-components";
import CommentHeader  from "./CommentHeader"


export default class CommentAnswer extends Component {
    static propTypes = {
        cancel_onclick: PT.func,
        first_name: PT.string,
        last_name: PT.string,
        answer: PT.object
    };

    render() {
        
        return (
            <SCommentAnswer>
                <STop>
                    <CommentHeader
                    />
                    {this.props.children}
                </STop>
            </SCommentAnswer>
        );
    }
}

const SCommentAnswer = styled.div`
    margin-top: 1em;
    border: 2px solid #f1f1f2;
    padding: 1em;
   
`;
const STop = styled.div`
    margin-bottom: 1em;
`;
