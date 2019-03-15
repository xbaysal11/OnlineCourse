import React, { Component } from "react";
import styled from "styled-components";
import Courses from "../../pages/Courses";
import { Container } from "../index";
class Head2 extends Component {
    render() {
        return (
            <>
                <Bg>
                    <Container />
                </Bg>
                <Container>
                    <Courses />
                </Container>
            </>
        );
    }
}

export default Head2;

const Bg = styled.div`
    background-image: linear-gradient(#fefefe, #e5dccd);
    height: 45vh;
    width: 100%;
`;
