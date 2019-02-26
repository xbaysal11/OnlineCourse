import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import styled from 'styled-components';
import bgImg from '../img/rawpixel-798163-unsplash.jpg'
import '../css/index.css';


class Head extends Component {
    render() {
        return (
            <BgImg>
                <img src={bgImg} className="image"></img>
                <Col span={18} offset={3}>
                    <MyInput placeholder = "Search Catalog"></MyInput>

                </Col>
                
            </BgImg>
        );
    }
}

export default Head;


const BgImg = styled.div`
 
`
const MyInput = styled.input`
background-color:rgb(49, 49, 49);
  border: 1px solid rgb(49, 49, 49);
  border-radius: 5px;
  height:2rem;`