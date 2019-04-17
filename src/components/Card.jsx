import React, { Component } from "react";
import styled from "styled-components";
import JavaPic from "../assets/img/1280x720-DSC100382016.jpg";
import { NavLink } from "react-router-dom";
import { shadows } from "../config/var";

class Card extends Component {
    render() {
        return (
            <Shadow>
                <NavLink to="/java">
                    <Wrapper>
                        <img src={JavaPic} alt="" />

                        <Text>
                            <h5>Kelvin Weather</h5>
                            <p>
                                It's time to build fluency in CSS Fundamentals.
                                <br />
                                In this next Pro Project, we're going to
                                <br />
                                Visual Rules in CSS
                            </p>
                        </Text>
                    </Wrapper>
                </NavLink>
            </Shadow>
        );
    }
}

export default Card;

const Shadow = styled.div`
    box-shadow: ${shadows.shadow};
    transition:${shadows.transition};
    &:hover {
        ${shadows.hover}
    }
`;
 


const Wrapper = styled.div`
    img {
        width: 100%;
    }
`;
const Text = styled.div`
    h5 {
        margin: 1em 0 10px 1em;
    }
    p {
        margin-left: 1.4em;
        color: #5a5b5e;
        padding-bottom: 70px;
    }
`;