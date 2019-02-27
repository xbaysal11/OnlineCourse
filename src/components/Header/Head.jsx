import React, { Component } from 'react';
import { Button, Col } from 'antd';
import styled from 'styled-components';
import LeftTable from '../LeftTable';



class Head extends Component {
    render() {
        return (
            <>
                <BgImg>

                    <Col span={18} offset={3}>
                        <MyInput placeholder="Search Catalog"></MyInput>
                       <MyBtn>
                           Search 
                       </MyBtn>
                    </Col>

                </BgImg>
                <LeftTable />

            </>
        );
    }
}

export default Head;


const BgImg = styled.div`
    text-align:center;
    height: 200px;
    background-image:linear-gradient(rgb(254, 254, 254),rgb(244, 207, 189));
    .btn_head{
        margin-left: 15px;}
`;

const MyInput = styled.input`
margin-top: 50px;
width:15rem;
background-color:white;
  border: 1px solid white;
  border-radius: 1px;
  height:3rem;
  &::-webkit-input-placeholder {
    padding-left:20px;
}`;

const MyBtn = styled.button`
height:3rem;
color:white;
background-color:#77CC6D;
border-radius:1px;
border:3px solid #77CC6D;
margin-left:2px;
`;