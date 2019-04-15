import React, { Component } from "react";
import { Row, Col, Button, Progress } from "antd";
import Photo from "../assets/img/39149d04cdb46c1a490cfccae64f1bc8.svg";
import styled from "styled-components";

class Card extends Component {
    render() {
        return (
            <>
                <WrapperFor>
                    <Row>
                        <Col span={16}>
                            <Right>
                                <h5>Code Foundation</h5>
                                <Progress percent={30} size="small" />
                            </Right>
                        </Col>
                        <Col span={8}>
                            {/* <img src={Photo} alt="" /> */}
                            <img
                                src="https://img.icons8.com/color/480/000000/python.png"
                                alt=""
                            />
                        </Col>
                    </Row>
                </WrapperFor>
            </>
        );
    }
}

export default Card;

const WrapperFor = styled.div`
    background-color: #6df0c2;
    margin-top: 1em;
    margin-bottom: 2em;
    box-shadow: 10px 1px 5px 1px;

    img {
        width: 120px;
        height: 120px;
    }
`;
const Right = styled.div`
    color: #6d6d6d;
    h5 {
        margin-top: 1em;
        margin-left: 1em;
    }
`;
