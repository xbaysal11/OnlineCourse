import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { Container } from "../components/index";
import { NavLink } from "react-router-dom";


class Courses extends Component {
    render() {
        return (
            <Main>
                <Container>
                    <Title>Our Courses  </Title>

                    <Row>
                        <Col span={6}>
                            <Course>
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
const Top = styled.div`
    height: 60%;
`;
