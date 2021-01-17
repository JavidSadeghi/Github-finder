import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';

ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <AlertState>
        <App />
      </AlertState>
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);
