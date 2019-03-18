import React from "react";

import { Comment, Avatar } from "antd";

const LessonComment = ({ children }) => (
    <Comment
        actions={[<span>Reply to</span>]}
        author={<a>Han Solo</a>}
        avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
        }
        content={
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure).
            </p>
        }
    >
        {children}
    </Comment>
);
export default LessonComment;
