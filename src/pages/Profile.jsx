import React, { Component } from "react";
import styled from "styled-components";
import { Button, Card, Icon, Avatar as AvatarAntd } from "antd";
import bgImage from "../assets/img/tv.svg";

const { Meta } = Card;

class Profile extends Component {
    state = {
        size: 100
    };
    render() {
        const size = this.state.size;
        return (
            <div>
                <BackgroundImage style={{ zIndex: -1 }}>
                    <img src={bgImage} alt="" />
                </BackgroundImage>
                <About
                    style={{
                        zIndex: 2,
                        position: "relative",
                        top: -50,
                        margin: "auto",
                        textAlign: "center"
                    }}
                >
                    <Avatar size={164} icon="user" />
                    <Name>Baisalbek Daniiarov</Name>
                    <Line>
                        <a href="">
                            <Icon
                                style={{ fontSize: "36px", color: "#08c" }}
                                type="schedule"
                            />
                        </a>
                        <a href="">
                            <Icon
                                style={{ fontSize: "36px", color: "#08c" }}
                                type="edit"
                            />
                        </a>

                        <a href="">
                            <Icon
                                style={{ fontSize: "36px", color: "#08c" }}
                                type="logout"
                            />
                        </a>
                    </Line>
                </About>
                <TakenCourses>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                            <img
                                alt="example"
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                        }
                    >
                        <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        />
                    </Card>
                </TakenCourses>
            </div>
        );
    }
}
export default Profile;
const About = styled.div`
    display: inline-block;
`;
const BackgroundImage = styled.div`
    img {
        height: 20vh;
    }
`;
// const Icon = styled.div``;
const Line = styled.div`
    border: 2px solid red;
`;
const Avatar = styled(AvatarAntd)`
    border-radius: 50%;
    border: 3px solid green;
`;
const TakenCourses = styled.div``;
const Name = styled.div``;
