import React, { Component } from "react";
import styled from "styled-components";

class Head2 extends Component {
    render() {
        return (
            <>
                <Bg>
                    <div className="container" />
                </Bg>
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
