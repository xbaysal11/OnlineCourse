import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AccountSettings from "./components/Account/AccountSettings";
import Profile from "./components/Account/Profile";

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
                        <Route
                            path="/Account/Settings"
                            component={AccountSettings}
                        />
                        <Route path="/Profile" component={Profile} />
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
