import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Row, Col, Icon, Rate, Popover } from "antd";
import faker from "faker";
import { PageHeader, Container, SettingsSidebar } from "../components/index";

class Profile extends Component {
    state = {
        visible: false,
        status: "Student"
    };

    hide = () => {
        this.setState({
            visible: false
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <PageHeader background="linear-gradient(to right, #27C1FF, #0D4156)">
                        <Row>
                            <Col span={6}>
                                <Popover
                                    content={
                                        <a onClick={this.hide}>
                                            Upload new image
                                        </a>
                                    }
                                    title="Avatar"
                                    trigger="click"
                                    visible={this.state.visible}
                                    onVisibleChange={this.handleVisibleChange}
                                >
                                    <Avatar
                                        shape="square"
                                        size={190}
                                        icon="user"
                                        src="https://randomuser.me/api/portraits/men/71.jpg"
                                    />
                                </Popover>
                            </Col>
                            <Col span={18}>
                                <Info>
                                    <Row>
                                        <Col span={14}>
                                            <Name>
                                                {faker.name.firstName()}{" "}
                                                {faker.name.lastName()}
                                            </Name>
                                        </Col>
                                        <Col span={10}>
                                            <Rate
                                                disabled
                                                allowHalf
                                                defaultValue={4}
                                                style={{
                                                    margin: ".6em 0"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <H5>
                                                <Icon
                                                    type="skin"
                                                    style={{
                                                        fontSize: "22px"
                                                    }}
                                                />
                                                <span>{this.state.status}</span>
                                            </H5>
                                        </Col>
                                        <Col span={12}>
                                            <p>
                                                <Icon
                                                    type="phone"
                                                    style={{
                                                        fontSize: "22px"
                                                    }}
                                                />
                                                +9967000000000
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <p>
                                                <strong>Group : </strong>
                                                Front-End 19
                                            </p>
                                        </Col>
                                        <Col span={12}>
                                            <p>
                                                <strong>Birth day : </strong>
                                                444 - 3232 - 1999999
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <p>
                                                {" "}
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Autem fugiat neque, sit maiores
                                                recusandae nam voluptatibus
                                                aspernatur, incidunt sapiente
                                                eveniet in illum debitis
                                                obcaecati non consectetur
                                                asperiores quasi officia! Animi!{" "}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Icon
                                                type="github"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em"
                                                }}
                                            />
                                            <Icon
                                                type="google"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em"
                                                }}
                                            />
                                            <Icon
                                                type="gitlab"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em"
                                                }}
                                            />
                                            <Icon
                                                type="facebook"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Info>
                            </Col>
                        </Row>
                    </PageHeader>
                    <Container>
                        <SettingsSidebar />
                        <Content />
                    </Container>
                </Wrapper>
            </div>
        );
    }
}
export default Profile;
const Wrapper = styled.div``;
const Content = styled.div``;

const Info = styled.div`
    color: #fff;
`;
const Name = styled.div`
    color: #fff;
    font-size: 36px;
    font-weight: 600;
`;
const H5 = styled.h5`
    color: #fff;
`;
