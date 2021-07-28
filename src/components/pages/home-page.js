import React, { Component } from 'react';
import Header from '../header';
import Intro from '../intro';
import Novelties from '../novelties';
import Gallery from '../gallery';
import Sale from '../sale';
import About from '../about';
import Contacts from '../contacts';

export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Intro />
        <Novelties />
        <Gallery />
        <Sale />
        <About />
        <Contacts />
      </div>
    );
  }
}