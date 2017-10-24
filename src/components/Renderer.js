import React, { Component } from 'react';

class Renderer extends Component {
  state = {
    inputURL: ''
  }
  render() {
    return (
      <div className="column is-8">
        <h3 className="has-text-centered">Enter URL</h3>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Enter URL"
              value={this.state.inputURL}
              onChange={(e) => e.target.value}
            />
          </p>
          <p className="control">
            <button className="button is-info">
              Submit
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Renderer;
