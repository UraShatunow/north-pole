import React, { Component } from 'react';
import Header from '../header';
import Intro from '../intro';
import Novelties from '../novelties';
import Gallery from '../gallery';

export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Intro />
        <Novelties />
        <Gallery />
      </div>
    );
  }
}