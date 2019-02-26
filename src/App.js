import React, { Component } from 'react';
import "antd/dist/antd.css";
import Header from './componetnts/Header';
import Head from './componetnts/Head';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Head/>
      </div>
    );
  }
}

export default App;
