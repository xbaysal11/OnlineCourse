import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

class HeadMenu extends Component {
    render() {
        return (
            <>
                <BotMenu>
                    <NavLink to="/info">
                        <Mya>Information</Mya></NavLink>
                    <NavLink to="/">
                        <Mya>Reviews</Mya></NavLink>
                    <NavLink to="/syllabus">
                        <Mya>Syllabus</Mya></NavLink>
                </BotMenu>
            </>
        );
    }
}

export default HeadMenu;

const BotMenu = styled.div`
    margin-top: 150px;
`;

const Mya = styled.a`
    &:nth-child(2) {
        margin-left: 30px;
    }
    &:last-child {
        margin-left: 30px;
    }
`;
