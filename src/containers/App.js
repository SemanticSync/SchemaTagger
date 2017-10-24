import React, { Component } from 'react';
import Renderer from '../components/Renderer';
import Sidebar from '../components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="columns">
        <Renderer />
        <Sidebar />
      </div>
    );
  }
}

export default App;
