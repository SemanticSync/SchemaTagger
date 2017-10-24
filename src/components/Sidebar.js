import React, { Component } from 'react';

class Sidebar extends Component {
  state = {
    localBusinessName: '',
    localBusinessTelephone: '',
    localBusinessEmail: '',
    activeElement: ''
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.activeToolbarValue || !nextProps.activeToolbarItem) return;
    this.setState({ [nextProps.activeToolbarItem]: nextProps.activeToolbarValue }, () => {

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
        <div className="card">
          <h3 className="has-text-centered">Local Business</h3>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ul>
                <li><p><strong id="localBusinessName" onClick={this.changeActive.bind(this)}>Name:</strong></p>{this.state.localBusinessName}</li>
                <li><p><strong id="localBusinessTelephone" onClick={this.changeActive.bind(this)}>Telephone:</strong></p>{this.state.localBusinessTelephone}</li>
                <li><p><strong id="localBusinessEmail" onClick={this.changeActive.bind(this)}>Email:</strong></p>{this.state.localBusinessEmail}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
