import React, { Component } from "react";
import LessonComment from "./LessonComment";

class LessonTab extends Component {
    render() {
        return (
            <div>
                <LessonComment />
                <LessonComment />
                <LessonComment />
                <LessonComment />
            </div>
        );
    }
}
export default LessonTab;
