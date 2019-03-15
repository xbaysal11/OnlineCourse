import React, { Component } from "react";
import { Container } from "..";
import styled from "styled-components";
import { Rate } from "antd";
import { Card, Col, Row } from "antd";

class AboutJava extends Component {
    render() {
        return (
            <_Bg>
                <Container>
                    <About>
                        <h3>About this Specialization</h3>
                        <Rate disabled allowHalf defaultValue={3.5} />
                        <p>
                            Take your first step towards a career in software
                            development with this introduction to Java—one of
                            the most in-demand programming languages and the
                            foundation of the Android operating system. Designed
                            for beginners, this Specialization will teach you
                            core programming concepts and equip you to write
                            programs to solve complex problems. In addition, you
                            will gain the foundational skills a software
                            engineer needs to solve real-world problems, from
                            designing algorithms to testing and debugging your
                            programs.
                        </p>
                    </About>
                    <div style={{ background: "#fff", padding: "30px" }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Free" bordered={false} />
                                <Card title="" bordered={true}>
                                    Access for 5 lessons
                                </Card>
                                <Card title="" bordered={true}>
                                    No access to links
                                </Card>
                                <Card title="" bordered={true}>
                                    No access ti write a comments
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Pro " bordered={false} />
                                <Card title="" bordered={true}>
                                    Access for all lessons
                                </Card>
                                <Card title="" bordered={true}>
                                    Access for all links
                                </Card>
                                <Card title="" bordered={true}>
                                    Access to write a comments
                                </Card>
                                <Card title="" bordered={true}>
                                    30 day access
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Premium" bordered={false} />
                                <Card title="" bordered={true}>
                                    Full course lifetime access
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </_Bg>
        );
    }
}

export default AboutJava;

const About = styled.div`
    width: 70%;
    h3 {
        margin-top: 60px;
        margin-bottom: 10px;
        padding: 0;
    }
    p {
        margin-top: 10px;
    }
`;

const Gold = styled.div`
    color: #f7bb56;
`;
const _Bg = styled.div`
    background-color: #fff;
`;
