import React, { Component } from "react";

import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "antd/dist/antd.css";
import Routes from "./routes";

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Router>
                    <>
                        <Header />
                        <Routes />
                        <Footer />
                    </>
                </Router>
            </Wrapper>
        );
    }
}

export default App;

const Wrapper = styled.div`
    background: #f7f7f7;
`;
