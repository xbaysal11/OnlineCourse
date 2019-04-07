import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Row, Col, Icon, Rate, Popover, Layout } from "antd";
import faker from "faker";
import {
    PageHeader,
    Container,
    SettingsSidebar,
    ProfileSettings,
    AccountSettings,
    NotificationsSettigs,
    MyCourses,
    ProfileGrades,
    ProfileInfo
} from "../components/index";

import { Route } from "react-router-dom";

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
                    <PageHeader
                        user
                        background="linear-gradient(to right, #465584, #262643)"
                    >
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
                                                    margin: ".6em 0",
                                                    color: "#40A9FF"
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
                                                        fontSize: "22px",
                                                        color: "#40A9FF"
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
                                                        fontSize: "22px",
                                                        color: "#40A9FF"
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
                                                    margin: "0 .2em",
                                                    color: "#40A9FF"
                                                }}
                                            />
                                            <Icon
                                                type="google"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em",
                                                    color: "#40A9FF"
                                                }}
                                            />
                                            <Icon
                                                type="gitlab"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em",
                                                    color: "#40A9FF"
                                                }}
                                            />
                                            <Icon
                                                type="facebook"
                                                style={{
                                                    fontSize: "22px",
                                                    margin: "0 .2em",
                                                    color: "#40A9FF"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Info>
                            </Col>
                        </Row>
                    </PageHeader>
                    <Container>
                        <Layout>
                            <SettingsSidebar />

                            <Content>
                                <Route
                                    path="/profile/profile_info"
                                    component={ProfileInfo}
                                />
                                <Route
                                    path="/profile/my_courses"
                                    component={MyCourses}
                                />
                                <Route
                                    path="/profile/grades"
                                    component={ProfileGrades}
                                />
                                <Route
                                    path="/profile/profile_settings"
                                    component={ProfileSettings}
                                />
                                <Route
                                    path="/profile/account_settings"
                                    component={AccountSettings}
                                />
                                <Route
                                    path="/profile/notifications_settings"
                                    component={NotificationsSettigs}
                                />
                            </Content>
                        </Layout>
                    </Container>
                </Wrapper>
            </div>
        );
    }
}
export default Profile;
const Wrapper = styled.div``;
const Content = styled.div`
    width: 100%;
`;

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
