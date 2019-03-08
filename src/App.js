import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Head2 from "./components/Header/Head2";
import Account from "./components/Account/Account";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Body/Courses";

import "antd/dist/antd.css";
import AccountSettings from "./components/Account/AccountSettings";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    {/* <Courses /> */}
                    {/* <Head2 /> */}
                    {/* <Route path="/Account" component={Account} /> */}
                    <Route
                        path="/Account/settings"
                        component={AccountSettings}
                    />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
