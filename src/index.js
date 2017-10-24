import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

require('./scss/bulma.scss');

ReactDOM.render(
  <div>
    <App />
  </div>
, document.querySelector('.app'));
