import React, { Component } from "react";
import { PageHeader, Container } from "../components/index";
import styled from "styled-components";

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <PageHeader background="linear-gradient(rgb(254, 254, 254), rgb(244, 207, 189))">
                    <div className="col-lg-7 text-center mr-auto ml-auto text-white">
                        <h2 className="display-4 mb-3">
                            Наши курсы - самый короткий путь в IT
                        </h2>
                        <p className="lead text-muted text-white">
                            Освойте одну из самых востребованных и
                            высокооплачиваемых профессий всего за 9 месяцев по
                            сертифицированной программе IT академии ПВТ Беларуси
                        </p>
                    </div>
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
const Content = styled.div`
    height: 40em;
`;
