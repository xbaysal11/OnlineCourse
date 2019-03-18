import React, { Component } from "react";
import styled from "styled-components";

import photo from "../../assets/img/client-1.jpg";

class Instructor extends Component {
    render() {
        return (
            <>
                <MyImg>
                    <h2>Instractor</h2>
                    <img src={photo} alt="" />
                    <h4>Dr. Shane Dixon</h4>
                    <h6>International Educator</h6>
                    <span>Georgia Tech Language Institute</span>
                </MyImg>
            </>
        );
    }
}

export default Instructor;

const MyImg = styled.div`
    margin-left: 80px;
    text-align: center;
    img {
        border-radius: 50%;
        width: 130px;
        height: 130px;
    }
    h2{
        
    }
    h4{
        font-weight: 900;
    }
    h6 {
        margin: 0;
        padding: 0;
    }
    span{
        color: #A78855;
    }
`;
