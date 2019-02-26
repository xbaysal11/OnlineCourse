import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';


class Intro extends Component {
    render() {
        return (
            <Col span={18} offset={3}>
            <Border>
               <H3>
                   Введение</H3> 
                   <Text>
                   <Row>
      <Col span={6}>Start date:</Col>
      <Col span={6}>Soft deadline:</Col>
      <Col span={6}>Hard deadline:</Col>
      <Col span={6}>Close date:</Col>
    </Row>
                   </Text>
            </Border>
            </Col>
        );
    }
}

export default Intro;

const Border = styled.div`
border: 1px solid rgb(204, 204, 204);
border-left: 10px solid #EEE;
margin-top: 20px;
height: 120px;
`;
const H3 = styled.h3`
margin-top:20px;
margin-left:3rem;
font-size:1.5rem;
`;
const Text = styled.p`
   margin-left:10%;
`;