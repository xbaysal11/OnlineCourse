import React, { Component } from "react";
import { Avatar } from "antd";


class CommentHeader extends Component {
    render() {
        return (
            <div>
                <Avatar
                    size="large"
                    style={{ backgroundColor: "#87d068" }}
                    icon="user"
                />
            </div>
        );
    }
}

export default CommentHeader;
