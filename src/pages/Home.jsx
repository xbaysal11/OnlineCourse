import React, { Component } from "react";
import { PageHeader, Container } from "../components/index";
import styled from "styled-components";

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <PageHeader background="linear-gradient(rgb(254, 254, 254), rgb(244, 207, 189))">
                    <H2>Наши курсы - самый короткий путь в IT</H2>
                    <p>
                        Освойте одну из самых востребованных и
                        высокооплачиваемых профессий всего за 9 месяцев по
                        сертифицированной программе IT академии ПВТ Беларуси
                    </p>
                </PageHeader>
                <Container>
                    <Content />
                </Container>
            </Wrapper>
        );
    }
}

export default Home;

const Wrapper = styled.div``;
const H2 = styled.div`
    font-size: 26px;
`;
const Content = styled.div`
    height: 40em;
`;
