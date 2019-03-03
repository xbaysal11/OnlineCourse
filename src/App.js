import React, { Component } from 'react';
import "antd/dist/antd.css";
import Header from './components/Header/Header';
import Head from './components/Header/Head';
import Head2 from './components/Header/Head2';
import Foot from './components/Footer/Foot'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
     <div>
  
      <Route path='/' component={Header}/>
      <Route path='/' component={Foot}/>
      <Route path='/' component={Head2} exact/>
      <Route path='/syllabus' component={Head} />
      
      </div>
      </Router>
    );
  }
}

export default App;
