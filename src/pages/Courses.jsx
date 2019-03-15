import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Container } from "../components/index";


class Courses extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Title>Наши курсы</Title>

                    <Box>
                        <Row>
                            <Col span={6}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                            <Col span={6}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                            <Col span={6}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                            <Col span={6}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                        </Row>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default Courses;

const Cont = styled(Container)`
border: 1px red;`;

const Title = styled.h3`
    margin-top: 50px;
`;
const Box = styled.div`
    border: 1px solid #dddddd;
    
`;

const Course = styled.div`
    border: 1px solid #dddddd;
    text-align: center;
    height: 250px;
    ;
`;
