import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

class Renderer extends Component {
  state = {
    inputURL: '',
    loading: false,
    html: undefined
  }

  fetchWebsite() {
    this.setState({ loading: true }, () => {
      axios.get(`http://localhost:3000/render/${this.state.inputURL}`)
      .then((res) => {
        this.setState({ html: res.data.html, loading: false });
      })
      .catch(err => console.log(err));
    });
  }

  renderHtml() {
    if (this.state.html === undefined) {
      return;
    }
    return (
      <div>
        {renderHTML(this.state.html)}
      </div>
    );
  }

  render() {
    return (
      <div className="column is-8 card" style={{ marginTop: '2%' }}>
        <h3 className="has-text-centered">Enter URL</h3>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Enter URL"
              value={this.state.inputURL}
              onChange={(e) => this.setState({ inputURL: e.target.value })}
            />
          </p>
          <p className="control">
            <button
              className="button is-info"
              onClick={this.fetchWebsite.bind(this)}
            >
              Submit
            </button>
          </p>
        </div>
        <div className={"card-content " + (this.state.loading ? 'loader' : '')}>
          {this.renderHtml()}
        </div>
      </div>
    );
  }
}

export default Renderer;
