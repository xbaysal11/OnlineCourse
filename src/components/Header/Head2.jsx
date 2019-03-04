import React, { Component } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import HeadMenu from "./HeadMenu";

class Head2 extends Component {
    render() {
        return (
            <>
                <Bg>
                    <Col span={18} offset={3}>
                        <HeadMenu />
                    </Col>
                </Bg>
            </>
        );
    }
}

export default Head2;

const Bg = styled.div`
    background-image: linear-gradient(#fefefe, #e5dccd);
    height: 200px;
    width: 100%;
`;
