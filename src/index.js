import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App';
import Tab from './table';
import Menu from './menu';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/table" component={Tab}/>
      <Route component={Tab}/>
    </Switch>
    </div>
  </Router>,


  document.getElementById('root')
);
//registerServiceWorker();
