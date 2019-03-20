import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { Container, PageHeader } from "../components/index";
import { NavLink } from "react-router-dom";
import JavaImg from "../assets/img/alexandru-acea-1160461-unsplash.jpg";

class Courses extends Component {
    render() {
        return (
            <Main>
                <PageHeader background="linear-gradient(to right, #b3a369, #e9aa00)">
                    <h2>
                        Improve Your English
                        <br /> Communication Skills Specialization
                    </h2>
                </PageHeader>
                <Container>
                    <Title>Our Courses </Title>

                    <Row>
                        <Col span={6}>
                            <Course>
                                <Image>
                                    <img src={JavaImg} alt="Java" />
                                </Image>
                                <Top>Java</Top>
                                <NavLink to="/java">
                                    <Button type="primary">Go to Course</Button>
                                </NavLink>
                            </Course>
                        </Col>
                        <Col span={6}>
                            <Course>
                                <Top>Python</Top>
                                <Button>Go to Course</Button>
                            </Course>
                        </Col>
                        <Col span={6}>
                            <Course>
                                <Top>C++</Top>
                                <Button type="primary">Go to Course</Button>
                            </Course>
                        </Col>
                        <Col span={6}>
                            <Course>
                                <Top>Scala</Top>
                                <Button>Go to Course</Button>
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
    margin-top: 50px;
`;

const Course = styled.div`
    border: 1px solid #dddddd;
    text-align: center;
    vertical-align: bottom;
    height: 250px;
`;
const Top = styled.div``;

const Image = styled.div`
    img {
        width: 240px;
        height: 180px;
    }
`;
