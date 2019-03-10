import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import "antd/dist/antd.css";

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Router>
                    <div>
                        <Header />
                        {/* <Courses /> */}
                        {/* <Head2 /> */}
                        {/* <Route path="/Account" component={Account} /> */}
                        <Route path="/Profile" component={Profile} />
                        <Route path="/Settings" component={Settings} />
                        <Footer />
                    </div>
                </Router>
            </Wrapper>
        );
    }
}

export default App;
const Wrapper = styled.div`
    background: #f7f7f7;
`;
