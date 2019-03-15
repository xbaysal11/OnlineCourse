import React, { Component } from "react";
import { Row, Col, Icon, Menu, Button, Layout, Input } from "antd";
import styled from "styled-components";
import { Container } from "../components";
import AboutJava from "../components/AboutCourse/AboutJava";

class Java extends Component {
    render() {
        return (
            <>
                <_Bg>
                    <Container>
                        <About>
                            <h2>
                                Java Programming and Software <br />Engineering
                                Fundamentals Specialization
                            </h2>
                            <p>
                                Explore a Career as a Software Engineer. Learn
                                the basics of programming and <br></br>software
                                development
                            </p>
                        </About>
                    </Container>
                </_Bg>
                <AboutJava />
            </>
        );
    }
}

export default Java;

const _Bg = styled.div`
    background-image: linear-gradient(to right, #01256e, #f6eab8);
    height: 45vh;
`;
const About = styled.div`
    padding-top: 40px;
    h2, p{
        color: #fff;
        font-weight: lighter;
    }
`;
