import React, { Component } from 'react';

class Sidebar extends Component {
  state = {
    localBusinessName: '',
    localBusinessTelephone: '',
    localBusinessEmail: ''
  }

  render() {
    return (
      <div className="column is-4" style={{ marginTop: '2%' }}>
        <div className="card">
          <h3 className="has-text-centered">Local Business</h3>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ul>
                <li><p id="localBusinessName" ><strong>Name:</strong></p>{this.state.localBusinessName}</li>
                <li><p id="localBusinessTelephone" ><strong>Telephone:</strong></p>{this.state.localBusinessTelephone}</li>
                <li><p id="localBusinessEmail"><strong>Email:</strong></p>{this.state.localBusinessEmail}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
