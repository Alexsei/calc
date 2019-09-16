import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './modules/App';
import Tab from './modules/table';
import Menu from './modules/menu/menu';
import Home from './modules/Home';
import Matematika from './modules/matematika/matematika';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/table" component={Tab}/>
      <Route path="/Matematika" component={Matematika}/>
      <Route component={App}/>

    </Switch>
    </div>
  </Router>,


  document.getElementById('root')
);
//registerServiceWorker();
