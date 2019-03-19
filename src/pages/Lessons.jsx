import React, { Component } from "react";
import { Layout } from "antd";
import LessonSideBar from "../components/Lesson/LessonSideBar";
import LessonTabber from "../components/Lesson/LessonTabber";
import { Container, LessonContent, LessonCode } from "../components/index";
import { Route } from "react-router-dom";

const { Content, Sider } = Layout;

class Lessons extends Component {
    render() {
        return (
            <Container>
                <Layout>
                    <Sider theme="light">
                        <LessonSideBar />
                    </Sider>
                    <Content>
                        <LessonTabber />
                        <Route path={""} component={LessonContent} />
                        <Route path={""} component={LessonCode} />
                    </Content>
                </Layout>
            </Container>
        );
    }
}
export default Lessons;
