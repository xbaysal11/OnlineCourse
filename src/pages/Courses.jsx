import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

class Courses extends Component {
    render() {
        return (
            <div>
                <Col span={18} offset={3}>
                    <Title>Наши курсы</Title>

                    <Box>
                        <Row>
                            <Col span={8}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                            <Col span={8}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                            <Col span={8}>
                                {" "}
                                <Course>Java</Course>
                            </Col>
                        </Row>
                    </Box>
                </Col>
            </div>
        );
    }
}

export default Courses;

const Title = styled.h3`
    margin-top: 50px;
`;
const Box = styled.div`
    border: 1px solid #dddddd;
    width: 70%;
`;

const Course = styled.div`
    border: 1px solid #dddddd;
    text-align: center;
    height: 250px;
`;
