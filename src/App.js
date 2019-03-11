import React, { Component } from "react";

import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./routes";
import HeadTeachers from "./components/Header/HeadTeachers";
import HeadCourses from "./components/Header/HeadCourses";
import { ModalManager } from "./components";

import "antd/dist/antd.css";

class App extends Component {
    render() {
        return (
            <Wrapper>
                <ModalManager>
                    <Router>
                        <>
                            <Header />
                            <Route path="/syllabus" component={HeadCourses} />
                            <Route path="/" component={HeadTeachers} exact />
                            <Routes />
                            <Footer />
                        </>
                    </Router>
                </ModalManager>
            </Wrapper>
        );
    }
}

export default App;

const Wrapper = styled.div`
    background: #f7f7f7;
`;
