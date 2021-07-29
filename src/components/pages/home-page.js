import React, { Component } from 'react';
import Header from '../header';
import Socials from '../socials';
import Intro from '../intro';
import Novelties from '../novelties';
import Gallery from '../gallery';
import Sale from '../sale';
import About from '../about';
import Contacts from '../contacts';
import Subscribe from '../subscribe';
import Footer from '../footer';

export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Socials />
        <Intro />
        <Novelties />
        <Gallery />
        <Sale />
        <About />
        <Contacts />
        <Subscribe />
        <Footer />                                                                                                                                                                                                         
      </div>
    );
  }
}