import React, { Component } from 'react';
import { Layout } from 'antd'
import {default as Login} from 'containers/Login'
import './App.css';

class App extends Component {
  handleSubmit = ({username, password}) => {
    console.log('@handleSubmit ', username, password)
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Login onSubmit={this.handleSubmit} />>
        </Layout>
      </div>
    );
  }
}

export default App;
