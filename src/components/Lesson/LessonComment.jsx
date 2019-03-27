import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { Button, Avatar } from "antd";
import CommentAnswer from "./CommentAnswer";

const CommentsList = ({ comments }) => (
    <div>
        {comments.map(comment => (
            <LessonComment comment={comment} />
        ))}
    </div>
);

class LessonComment extends Component {
    static propTypes = {
        comment: PT.array
    };
    constructor(props) {
        super(props);
        this.state = { isAnswer: true, isOpen: false };
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        /* const {
            comments: { answers = [] }
        } = this */
        const body = this.state.isOpen && (
            <CommentAnswer>
                <input />
            </CommentAnswer>
        );
        return (
            <div>
                <Border>
                    <Div>
                        <Avatar
                            size="large"
                            style={{ backgroundColor: "#87d068" }}
                            icon="user"
                        />
                        <span>{}</span>
                        <Outside>
                            <Inside>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat."
                                </p>
                            </Inside>
                            <Button onClick={this.handleClick} type="default">
                                Answer
                            </Button>
                            <Button type="dashed">Edit</Button>
                            <Button type="danger">Delete</Button>
                         </Outside>
                        {/*  {
                            answers.length > 0 ?
                            <CommentsList  comments={answers}  />
                         : null
                         } */}

                        {body}
                    </Div>
                </Border>
            </div>
        );
    }
}

export default CommentsList;

const Border = styled.div`
    border: 1px solid #e0e0e0;
    height: 300px;
`;

const Div = styled.div`
    margin-left: 60px;
`;

const Inside = styled.div`
    padding-left: 20px;
    width: 80%;
    border: 1px solid #e0e0e0;
`;

const Outside = styled.div`
    margin-left: 30px;
`;
