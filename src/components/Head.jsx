import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import styled from 'styled-components';
import bgImg from '../img/rawpixel-798163-unsplash.jpg'
import '../css/index.css';
import LeftTable from './LeftTable';



class Head extends Component {
    render() {
        return (
            <>
            <BgImg>
            
                <Col span={18} offset={3}>
                    <MyInput placeholder="Search Catalog"></MyInput>
                    <Button type="primary" className="btn_head">Primary</Button>
                </Col>
                
            </BgImg>
            <LeftTable/>
            
            </>
        );
    }
}

export default Head;


const BgImg = styled.div`
    text-align:center;
  height: 200px;
 background-image:linear-gradient(rgb(254, 254, 254),rgb(244, 207, 189))

`;

const MyInput = styled.input`
margin-top: 50px;
width:300px;
background-color:white;
  border: 1px solid white;
  border-radius: 5px;
  height:2rem;
  &::-webkit-input-placeholder {
    padding-left:20px;
}`;