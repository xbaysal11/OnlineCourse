import React, { Component } from "react";
import "antd/dist/antd.css";
import Header from "./components/Header/Header";
import Head from "./components/Header/Head";
import Head2 from "./components/Header/Head2";
import Foot from "./components/Footer/Foot";
import Information from "./components/Body/Information";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Header/>
                    <Route path="/" component={Head2}  />
                    <Route path="/syllabus" component={Head} />
                    <Route path="/information" component={Information} />
                    <Foot/>
                </>
            </Router>
        );
    }
}

export default App;
