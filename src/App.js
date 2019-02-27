import React, { Component } from 'react';
import "antd/dist/antd.css";
import Header from './components/Header';
import Head from './components/Head';
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
