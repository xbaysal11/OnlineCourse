import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col as CCol, Button } from "antd";
import { Container, PageHeader } from "../components/index";
import { NavLink } from "react-router-dom";
import JavaImg from "../assets/img/alexandru-acea-1160461-unsplash.jpg";

class Courses extends Component {
    render() {
        return (
            <Main>
                <PageHeader background="linear-gradient(to right, #56c9ff, #0063ba)">
                    <h2>
                        Improve Your English
                        <br /> Communication Skills Specialization
                    </h2>
                </PageHeader>
                <Container>
                    <Title>Our Courses </Title>

                    <Row type="flex" justify="space-between">
                        <Col span={5}>
                            <Course>
                                <Image>
                                    <img src="https://img.icons8.com/color/500/000000/java-coffee-cup-logo.png" />
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
                                    <img src="https://img.icons8.com/color/480/000000/python.png" />
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
                                    <img src="https://img.icons8.com/color/480/000000/javascript.png" />
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
                                    <img src="https://img.icons8.com/color/480/000000/ruby-programming-language.png" />
                                </Image>
                                <Top>Ruby</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                    </Row>
                </Container>
            </Main>
        );
    }
}

export default Courses;

const Main = styled.div`
    margin-bottom: 50px;
    h2 {
        color: #fff;
        font-weight: lighter;
    }
`;

const Title = styled.h3`
    margin: 50px 0;
    text-align: center;
    font-weight: 600;
`;

const Course = styled.div`
    border: 1px solid #dddddd;
    text-align: center;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #ccc;
`;
const Top = styled.div`
    margin: 1em 0;
`;
const Col = styled(CCol)`
    margin: 0 1em;
`;

const Image = styled.div`
    img {
        width: 160px;
        height: 160px;
    }
`;
