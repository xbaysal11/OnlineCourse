import React, { Component } from "react";
import { PageHeader, Container } from "../components";
import styled from "styled-components";
import { Row, Col as CCol, Button } from "antd";
import { NavLink } from "react-router-dom";

class MyCourses extends Component {
    render() {
        return (
            <>
                <PageHeader background="linear-gradient(to right, #990033,#802249)">
                    <Head>
                        See the courses you can take <br />
                        for fr ee
                    </Head>
                </PageHeader>
                <Container>
                    <Intro>
                        <h3>Last Active</h3>
                        <p>Courses are sorted by your last activity.</p>
                    </Intro>
                    <Courses>
                        <MyCourse>
                            <Image1>
                                <img
                                    src="https://img.icons8.com/color/500/000000/java-coffee-cup-logo.png"
                                    alt=""
                                />
                                <Button type="primary">Go to Course</Button>
                            </Image1>
                            <AboutCourse>
                                <h5>JAVA COURSE</h5>
                                <br />
                                Learn Java From Beginnig To Advance
                            </AboutCourse>
                        </MyCourse>
                    </Courses>
                    <Courses>
                        <MyCourse>
                            <Image1>
                                <img
                                    src="https://img.icons8.com/color/480/000000/python.png"
                                    alt=""
                                />
                                <Button type="primary">Go to Course</Button>
                            </Image1>
                            <AboutCourse>
                                <h5>PYTHON COURSE</h5>
                                <br />
                                Learn Python From Beginnig To Advance
                            </AboutCourse>
                        </MyCourse>
                    </Courses>
                    <Intro>
                        <h3>Active Courses You Can Take</h3>
                        <p>This courses are avaliable now.</p>
                    </Intro>

                    <Row type="flex" justify="space-between">
                        <Col span={5}>
                            <Course>
                                <Image>
                                    <img
                                        src="https://img.icons8.com/color/500/000000/java-coffee-cup-logo.png"
                                        alt=""
                                    />
                                </Image>
                                <Top>Java</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                        <Col span={5}>
                            <Course>
                                <Image>
                                    <img
                                        src="https://img.icons8.com/color/480/000000/python.png"
                                        alt=""
                                    />
                                </Image>
                                <Top>Python</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                        <Col span={5}>
                            <Course>
                                <Image>
                                    <img
                                        src="https://img.icons8.com/color/480/000000/javascript.png"
                                        alt=""
                                    />
                                </Image>
                                <Top>JavaScript</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                        <Col span={5}>
                            <Course>
                                <Image>
                                    <img
                                        src="https://img.icons8.com/color/480/000000/ruby-programming-language.png"
                                        alt=""
                                    />
                                </Image>
                                <Top>Ruby</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MyCourses;

const Head = styled.h3`
    color: #fff;
`;

const Courses = styled.div`
    border: #d8d8d8 solid 1px;
    margin-bottom: 30px;
`;

const MyCourse = styled.div`
    border: #d8d8d8 solid 1px;
    padding: 40px;
`;

const Intro = styled.div`
    margin-top: 30px;
    h3 {
        color: #949494;
    }
`;
const AboutCourse = styled.div``;

const Course = styled.div`
    border: 1px solid #dddddd;
    text-align: center;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #ccc;
    margin-bottom: 50px;
`;
const Top = styled.div`
    margin: 1em 0;
`;
const Col = styled(CCol)`
    margin: 0 1em;
`;
const Image1 = styled.div`
    img {
        width: 120px;
        height: 120px;
    }
    button {
        float: right;
        margin-top: 70px;
    }
`;

const Image = styled.div`
    img {
        width: 160px;
        height: 160px;
    }
`;
