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

              <Route path='/facebook' component={() => { window.location.href = 'https://www.facebook.com/' }}/>
              <Route path='/twitter' component={() => { window.location.href = 'https://www.twitter.com/' }}/>
              <Route path='/instagram' component={() => { window.location.href = 'https://www.instagram.com/' }}/>
                  
            </Switch>

          </div>
        </Router>
    );
  }
}
