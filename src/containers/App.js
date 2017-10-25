import React, { Component } from 'react';
import Renderer from '../components/Renderer';
import Sidebar from '../components/Sidebar';

class App extends Component {
  state = {
    activeToolbarValue: '',
    selectedTextValue: ''
  }

  getHoistId(e) {
    this.setState({ activeToolbarItem: e });
  }

  getSelectedValue(selectedTextValue) {
    this.setState({ selectedTextValue });
  }

  render() {
    return (
      <div className="columns">
        <Renderer
          hoistSelectedValue={this.getSelectedValue.bind(this)}
        />
        <Sidebar
          selectedTextValue={this.state.selectedTextValue}
          activeToolbarItem={this.state.activeToolbarItem}
          hoistId={this.getHoistId.bind(this)}
        />
      </div>
    );
  }
}

export default App;
