import React, { Component } from "react";
import { Row, Col, Icon, Menu, Button, Layout, Input } from "antd";
import styled from "styled-components";
import { Container } from "../components";

class Java extends Component {
    render() {
        return <>
        <_Bg>
            <Container>
        <About>
            <h2>Java Programming and Software <br></br>Engineering Fundamentals Specialization</h2>
        </About>
        </Container>
        </_Bg>
        </>;
    }
}

export default Java;

const _Bg = styled.div`
    background-image: linear-gradient(to right, #01256e, #045ea7);
    height: 45vh;
`;
const About = styled.div`
    padding-top: 40px;
    h2{
        color: #fff;
    font-weight: lighter;
    }
`;