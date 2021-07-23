import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import { HomePage } from '../pages';

export default class App extends Component {

  render() {

    return (
        <Router>
          <div className="app">

            <Switch>

              <Route path="/" component={HomePage} exact />
                  
            </Switch>

          </div>
        </Router>
    );
  }
}
