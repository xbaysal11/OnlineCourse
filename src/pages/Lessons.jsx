import React, { Component } from "react";
import { Layout } from "antd";
import LessonSideBar from "../components/Lesson/LessonSideBar";
import LessonContent from "../components/Lesson/LessonContent";
import { Container } from "../components/index";
import Sider from "antd/lib/layout/Sider";

const { Content } = Layout;

class Lessons extends Component {
    render() {
        return (
            <Container>
                <Layout>
                    <Sider>
                        <LessonSideBar />
                    </Sider>
                    <Content>
                        <LessonContent />
                    </Content>
                </Layout>
            </Container>
        );
    }
}
export default Lessons;
