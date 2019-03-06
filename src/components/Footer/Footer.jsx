import React, { Component } from "react";
import { Row as RowAntd, Col } from "antd";
import styled from "styled-components";

import logo from "../../assets/img/tv.svg";

class Footer extends Component {
    render() {
        return (
            <FooterMain>
                <Row>
                    <Col offset={3} span={6}>
                        <Social>
                            <h5>Social Media</h5>
                            <ul>
                                <li>
                                    <a href="#">Address n1</a>
                                </li>
                                <li>
                                    <a href="#">Address n2</a>
                                </li>
                                <li>
                                    <a href="#">Address n3</a>
                                </li>
                                <li>
                                    <a href="#">Address n4</a>
                                </li>
                            </ul>
                        </Social>
                    </Col>
                    <Col span={6}>
                        <Courses>
                            <h5>Courses</h5>
                            <ul>
                                <li>
                                    <a href="#">Address n1</a>
                                </li>
                                <li>
                                    <a href="#">Address n2</a>
                                </li>
                                <li>
                                    <a href="#">Address n3</a>
                                </li>
                                <li>
                                    <a href="#">Address n4</a>
                                </li>
                            </ul>
                        </Courses>
                    </Col>
                    <Col span={6}>
                        <Address>
                            <h5>Address</h5>
                            <ul>
                                <li>
                                    <a href="#">Address n1</a>
                                </li>
                                <li>
                                    <a href="#">Address n2</a>
                                </li>
                                <li>
                                    <a href="#">Address n3</a>
                                </li>
                                <li>
                                    <a href="#">Address n4</a>
                                </li>
                            </ul>
                        </Address>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4}>
                        <Flex>
                            <Logo>
                                <img src={logo} alt="" />
                            </Logo>
                            <Copyright>
                                <p>
                                    © Все права защищены 2019. Разработан и
                                    поддерживается IT-Lab
                                </p>
                            </Copyright>
                        </Flex>
                    </Col>
                </Row>
            </FooterMain>
        );
    }
}

export default Footer;

const Logo = styled.div`
    display: block;

    img {
        margin-bottom: 4vh;
        width: 50px;
        height: 50px;
    }
`;

const Copyright = styled.div`
    color: #b2bec3;
    padding-left: 2em;
    align-self: center;
`;
const Flex = styled.div`
    display: flex;
`;
const FooterMain = styled.div`
    background: linear-gradient(
        0deg,
        rgba(0, 2, 24, 1) 0%,
        rgba(0, 0, 0, 1) 100%
    );
`;

const Row = styled(RowAntd)``;
const Box = styled.div`
    color: #fff;
    height: 35vh;
    padding: 0 5vw;
    text-transform: uppercase;

    h5 {
        padding-top: 3vh;
        margin: 2vh 0 0 0;
        font-size: 1.1em;
        color: #fff;
        font-weight: bold;
        &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: #fff;
            top: 3.8em;
            left: 4.4em;
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            margin: 1rem 0;
        }
    }

    a {
        color: #b2bec3;
        font-size: 0.8em;
        font-weight: 600;

        &:hover {
            color: #fff;
        }
    }
`;

const Social = styled(Box)``;
const Courses = styled(Box)``;
const Address = styled(Box)``;
