import React, { Component } from 'react';
import styled from "styled-components";

class CommentAnswer extends Component {
    render() {
        return (
            <Border>
                {this.props.children}
            </Border>
        );
    }
}

export default CommentAnswer;

const Border = styled.div`
    border: 1px red solid;
    height: 50px;
    `;
