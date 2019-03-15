import React, { Component } from "react";
import PT from "prop-types";
import styled from "styled-components";
import Container from "./elements/Container";

class PageHeader extends Component {
    static propTypes = {
        background: PT.string.isRequired
    };
    render() {
        return (
            <>
                <Bg background= {this.props.background}>
                    <Container>
                        <About>{this.props.children}</About>
                    </Container>
                </Bg>
            </>
        );
    }
}

export default PageHeader;

const Bg = styled.div`
    height: 45vh;
    background-image: ${props => props.background};
`;
const About = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;
