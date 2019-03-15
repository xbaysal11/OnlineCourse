import React, { Component } from "react";
import styled from "styled-components";
import Courses from "../../pages/Courses";
import { Container } from "../index";
class Head2 extends Component {
    render() {
        return (
            <>
                <Bg>
                    <Container>
                        <About>
                           <h2> Improve Your English<br></br> Communication Skills
                            Specialization</h2>
                        </About>
                    </Container>
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
    background-image: linear-gradient(to right, #b3a369, #e9aa00);
    height: 45vh;
    width: 100%;
`;
const About = styled.div`
    padding-top: 40px;
    h2{
        color: #fff;
    font-weight: lighter;
    }
`;
