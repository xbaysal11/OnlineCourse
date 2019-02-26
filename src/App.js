import React, { Component } from 'react';
import "antd/dist/antd.css";
import Header from './componetnts/Header';
import Head from './componetnts/Head';
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
     <div>
      <Route path='/' component={Header}/>
      <Route path='/syllabus' component={Head} />
      
      </div>
      </Router>
    );
  }
}

export default App;
