import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import ToDoList from './containers/ToDoList/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ToDoList />
        </Layout>
      </div>
    );
  }
}

export default App;
