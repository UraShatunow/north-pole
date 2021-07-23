import React, { Component } from 'react';
import Header from '../header';
import Intro from '../intro';

export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Intro />
      </div>
    );
  }
}