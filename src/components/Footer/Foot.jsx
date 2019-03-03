import React, { Component } from 'react';

class Foot extends Component {
    render() {
        return (
            <div>
                <Col span={18} offset={3}>
                <FootColor>
                    
                </FootColor>
                
                </Col>
            </div>
        );
    }
}

export default Foot;


const FootColor = styled.div`
background-color:#F3F4F6;
height: 200px;`;