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
                    <Route path="/" component={Header} />
                    <Route path="/" component={Head2} exact />
                    <Route path="/syllabus" component={Head} />
                    <Route path="/" component={Information} exact/>
                    <Route path="/" component={Foot}/>
                </>
            </Router>
        );
    }
}

export default App;
