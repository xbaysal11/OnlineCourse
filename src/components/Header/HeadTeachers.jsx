import React, { Component } from "react";
import { Button, Col } from "antd";
import styled from "styled-components";




class Head extends Component {
    render() {
        return (
            <>
                <BgImg>
                    <div className = "container">
                        <MyInput placeholder="Search Catalog" />
                        <MyBtn>Search</MyBtn>
                    </div>
                </BgImg>
              
            </>
        );
    }
}

export default Head;

const BgImg = styled.div`
    text-align: center;
    height: 45vh;
    background-image: linear-gradient(rgb(254, 254, 254), rgb(244, 207, 189));
    .btn_head {
        margin-left: 15px;
    }
`;

const MyInput = styled.input`
    margin-top: 7em;
    width: 15rem;
    background-color: white;
    border: 1px solid white;
    border-radius: 1px;
    height: 3rem;
    &::-webkit-input-placeholder {
        padding-left: 20px;
    }
`;

const MyBtn = styled.button`
    height: 3rem;
    color: white;
    background-color: #77cc6d;
    border-radius: 1px;
    border: 3px solid #77cc6d;
    margin-left: 2px;
`;
