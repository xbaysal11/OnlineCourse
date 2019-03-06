import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Head from "./components/Header/Head";
import Head2 from "./components/Header/Head2";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";

import "antd/dist/antd.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Head2 />
                    <Route path="/admin" component={Admin} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
