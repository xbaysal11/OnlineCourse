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
                        Чем тестирование веб-приложений отличается от тестирования каких-нибудь других приложений?
     
     При тестировании веб-приложений применяются те же самые классические методы и техники проектирования тестов. Веб-приложения обычно имеют более простой интерфейс, чем "десктопные" программы. Браузером все умеют пользоваться, для этого не нужны какие-то специальные навыки.
     
     Но существует ряд нюансов, связанных с социальными и технологическими особенностями веб-приложений, которые отличают их от других видов приложений, и которые обязательно нужно учитывать при тестировании, чтобы выполнить его профессионально.

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
height: 110%;
`;
const H3 = styled.h3`
margin-top:20px;
margin-left:20px;
font-size:1.5rem;
`;
const Text = styled.p`
   margin-left:20px;
   width: 80%;
`;