import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Button, Progress } from "antd";
import { NavLink } from "react-router-dom";
import Card from "../CourseCard";
import { shadows } from "../../config/var";
class MyCourses extends Component {
    render() {
        return (
            <Wrapper>
                <Courses>
                    <MyCourse>
                        <Row>
                            <Col span={8}>
                                <Center>
                                    <Image1>
                                        <img
                                            src="https://img.icons8.com/color/480/000000/java.png"
                                            alt=""
                                        />
                                        <h5>JAVA COURSE</h5>
                                    </Image1>
                                </Center>
                            </Col>
                            <Center>
                                <Col span={16}>
                                    <h5>Python Foundation</h5>
                                    <p>Keep making progress on Learn Python</p>
                                    <Button> RESUME 23%</Button>
                                </Col>
                            </Center>
                        </Row>
                    </MyCourse>
                </Courses>

                <Courses>
                    <MyCourse>
                        <Row>
                            <Col span={8}>
                                <Center>
                                    <Image1>
                                        <img
                                            src="https://img.icons8.com/color/480/000000/python.png"
                                            alt=""
                                        />
                                        <h5>PYTHON COURSE</h5>
                                    </Image1>
                                </Center>
                            </Col>
                            <Center>
                                <Col span={16}>
                               
                                    <h6>Java Foundation</h6>
                                    <p>Keep making progress on Learn Python</p>
                                    <Button> RESUME 23%</Button>
                                    <Progress
                                        percent={50}
                                        size="small"
                                        status="active"
                                    />
                                   
                                </Col>
                            </Center>
                        </Row>
                    </MyCourse>
                </Courses>

                <Intro>
                    <h3>Active Courses You Can Take</h3>
                    <p>This courses are avaliable now.</p>
                </Intro>

                <Row type="flex" justify="space-between">
                    <Col span={12}>
                        <Right>
                            <Card />
                        </Right>
                    </Col>
                    <Col span={12}>
                        <Left>
                            <Card />
                        </Left>
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}

export default MyCourses;

const Wrapper = styled.form`
    background: #fff;
    padding: 2em;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 24px 12px 52px 12px;
    min-height: 50%;
`;
const Left = styled.div`
    margin-left: 1em;
`;
const Right = styled.div`
    margin-right: 1em;
`;

const Courses = styled.div`
    margin-bottom: 30px;
`;
const MyCourse = styled.div`
    border: #d8d8d8 solid 1px;
    padding: 2em;
    box-shadow: ${shadows.shadow};

    button {
        font-size: 20px;
        background-color: #ffc107;
        font-weight: 300;
    }
    h5 {
        margin-top: 20px;
    }
    h4 {
        color: #949494;
    }
`;

const Intro = styled.div`
    margin-top: 30px;
    h3 {
        color: #949494;
    }
`;

const Image1 = styled.div`
    img {
        width: 120px;
        height: 120px;
    }
    button {
        margin-top: 70px;
    }
`;
const Center = styled.div`
    text-align: center;
`;
