import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { Button, Comment, Icon, Tooltip } from "antd";
import CommentEditor from "./CommentEditor";
import CommentHeader from "./CommentHeader";

const CommentsList = ({ comments }) => (
    <div>
        {comments.map(comment => (
            <LessonComment comment={comment} />
        ))}
    </div>
);

class LessonComment extends Component {
    static propTypes = {
        comment: PT.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderReplyEditor() {
        const {
            comment: { first_name, last_name }
        } = this.props;
        return this.state.isOpen ? (
            <CommentEditor
                first_name={first_name}
                last_name={last_name}
                cancelOnclick={() => this.setState({ isOpen: false })}
            />
        ) : null;
    }

    state = {
        likes: 0,
        dislikes: 0,
        action: null
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: "liked"
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: "disliked"
        });
    };

    render() {
        const {
            comment: { text, first_name, last_name, children }
        } = this.props;

        return (
            <Margin>
                <Border>
                    <Div>
                        <CommentHeader
                            first_name={first_name}
                            last_name={last_name}
                        />
                        <Outside>
                            <Inside>
                                {text}
                            </Inside>
                            <Button onClick={this.handleClick} type="default">
                                Answer
                            </Button>
                            <Button type="dashed">Edit</Button>
                            <Button type="danger">Delete</Button>
                        </Outside>
                        {children && children.length > 0 ? (
                            <CommentsList comments={children} />
                        ) : null}
                        {this.renderReplyEditor()}
                    </Div>
                </Border>
            </Margin>
        );
    }
}

export default CommentsList;

const Border = styled.div`
    border: 1px solid #e0e0e0;
    border-left: 5px solid #e0e0e0;
`;
const Margin = styled.div`
    margin-bottom: 30px;
`;

const Div = styled.div`
    margin-left: 40px;
    margin-bottom: 50px;
`;

const Inside = styled.div`
    padding-left: 40px;
`;

const Outside = styled.div`
    margin-bottom: 30px;
`;
