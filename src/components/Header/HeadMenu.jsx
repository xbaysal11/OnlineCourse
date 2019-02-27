import React, { Component } from 'react';
import { Row, Col, Icon, Menu, Button } from 'antd';
import styled from 'styled-components';

class HeadMenu extends Component {
    render() {
        return (
            <>
                <BotMenu>
                <Mya>Information</Mya>
                <Mya>Reviews</Mya>
                <Mya>Syllabus</Mya>
                </BotMenu>
            </>
        );
    }
}

export default HeadMenu;


const BotMenu = styled.div`
margin-top:150px`;

const Mya = styled.a`
&:nth-child(2){
    margin-left:30px;
}
&:last-child{
    margin-left:30px;
}
`;