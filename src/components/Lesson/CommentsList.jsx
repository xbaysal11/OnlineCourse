import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { Button } from "antd";
import CommentAnswer from "./CommentAnswer";
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
        this.state = { sOpen: false };
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        const {
            comment: { text, first_name, last_name, children }
        } = this.props;

        const body = this.state.isOpen && (
            <CommentAnswer>
                <MyInput placeholder="Text here" />
            </CommentAnswer>
        );
        return (
            <div>
                <Border>
                    <Div>
                        {first_name}
                        {last_name}
                        <CommentHeader comment = {first_name}/>
                        <Outside>
                            <Inside>
                                <p>{text}</p>
                            </Inside>
                            <Button onClick={this.handleClick} type="default">
                                Answer
                            </Button>
                            <Button type="dashed">Edit</Button>

                            <Button type="danger">Delete</Button>
                        </Outside>
                         {
                            children && children.length > 0 ?
                            <CommentsList comments={children}  />
                         : null
                         }
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

`;

const Div = styled.div`
     margin-left: 40px; 
    margin-bottom:50px;
`;

const Inside = styled.div`
    padding-left: 40px;
   /*  width: 80%; */
    /* border: 1px solid #e0e0e0; */
`;

const Outside = styled.div`
    /* margin-left: 30px; */
`;

const MyInput = styled.input`
    margin-top: 5px;
`;
