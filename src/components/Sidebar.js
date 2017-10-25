import React, { Component } from 'react';

class Sidebar extends Component {
  state = {
    localBusinessName: '',
    localBusinessTelephone: '',
    localBusinessEmail: '',
    localBusinessStreetAddress: '',
    localBusinessCity: '',
    localBusinessState: '',
    localBusinessCountry: '',
    localBusinessImage: '',
    activeElement: ''
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectedTextValue || !nextProps.selectedTextValue) return;
    this.setState({ [nextProps.activeToolbarItem]: nextProps.selectedTextValue }, () => {

    });
  }

  changeActive(e) {
    this.props.hoistId(e.target.id);
    this.setState({ activeElement: e.target.id }, () => {

    });
  }

  render() {
    return (
      <div className="column is-4" style={{ marginTop: '2%' }}>
        <div className="card shadow-2">
          <h3 className="has-text-centered">Local Business</h3>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ul>
                <li><p><strong id="localBusinessName" onClick={this.changeActive.bind(this)}>Name:</strong> {this.state.localBusinessName}</p></li>
                <li><p><strong id="localBusinessTelephone" onClick={this.changeActive.bind(this)}>Telephone:</strong> {this.state.localBusinessTelephone}</p></li>
                <li><p><strong id="localBusinessEmail" onClick={this.changeActive.bind(this)}>Email:</strong> {this.state.localBusinessEmail}</p></li>
                <li><p><strong id="localBusinessImage" onClick={this.changeActive.bind(this)}>Image:</strong> {this.state.localBusinessImage}</p></li>
                <p><strong>Address</strong></p>
                <ul>
                  <li><p><strong id="localBusinessStreetAddress" onClick={this.changeActive.bind(this)}>Street Address:</strong> {this.state.localBusinessStreetAddress}</p></li>
                  <li><p><strong id="localBusinessCity" onClick={this.changeActive.bind(this)}>City:</strong> {this.state.localBusinessCity}</p></li>
                  <li><p><strong id="localBusinessState" onClick={this.changeActive.bind(this)}>State:</strong> {this.state.localBusinessState}</p></li>
                  <li><p><strong id="localBusinessCountry" onClick={this.changeActive.bind(this)}>Country:</strong> {this.state.localBusinessCountry}</p></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
