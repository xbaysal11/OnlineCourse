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
                        <Col span={8}>
                            <img src={Photo} alt="" />
                        </Col>
                        <Col span={16}>
                            <Right>
                                <h5>Code Foundation</h5>
                                <p>
                                    Interested in learning how to code, but
                                    unsure where to start? This is the path for
                                    you!
                                </p>
                                <Progress
                                    percent={43}
                                    size="small"
                                    status="active"
                                />
                            </Right>
                        </Col>
                    </Row>
                </WrapperFor>
            </>
        );
    }
}

export default Card;

const WrapperFor = styled.div`
    background-color: #fdfdfc;
    margin-top: 1em;
    margin-bottom: 2em;
    box-shadow: 1px 1px 5px 1px;
    img {
        width: 200px;
    }
`;
const Right = styled.div`
    color: #6d6d6d;
    h5 {
        margin-top: 1em;
    }
`;
