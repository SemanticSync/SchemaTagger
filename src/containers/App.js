import React, { Component } from 'react';
import Renderer from '../components/Renderer';

class App extends Component {
  render() {
    return (
      <div className="columns">
        <Renderer />
      </div>
    );
  }
}

export default App;
