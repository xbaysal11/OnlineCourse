import React, { Component } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

class Foot extends Component {
    render() {
        return (
            <div>
                <FootColor>
                    <Col span={18} offset={3} />
                </FootColor>
            </div>
        );
    }
}

export default Foot;

const FootColor = styled.div`
    background-color: #f3f4f6;
    height: 200px;
`;
