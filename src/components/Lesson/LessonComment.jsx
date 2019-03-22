import React, { Component } from "react";
import styled from "styled-components";

import { Comment, Avatar } from "antd";

class LessonComment extends Component {
    render() {
        return (
            <div>
                <Border>
                    <Div>
                        <Avatar
                            size="large"
                            /* style={{ backgroundColor: "#87d068" }} */
                            icon="user"
                        />
                        <span> Daniiarov Baisalbek </span>
                        <Comment />
                    </Div>
                </Border>

                {/* <Comment
                actions={[<span>Reply to</span>]}
                author={<a href="/">Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        We supply a series of design principles, practical
                        patterns and high quality design resources (Sketch and
                        Axure).
                    </p>
                }
            /> */}
            </div>
        );
    }
}
export default LessonComment;

const Border = styled.div`
    border: 1px solid #e0e0e0;
    height: 300px;
`;

const Div = styled.div`
    margin-left: 60px;
`;

//const Comment = styled.div``;
