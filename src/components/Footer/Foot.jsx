import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

class Foot extends Component {
    render() {
        return (
            <div>
                <FootColor>
                    <Col span={18} offset={3}>


                    </Col>
                </FootColor>
            </div>
        );
    }
}

export default Foot;


const FootColor = styled.div`
background-color:#F3F4F6;
height: 200px;`;