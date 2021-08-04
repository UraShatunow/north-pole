import React, { Component } from 'react';
import Header from '../header';
import Socials from '../socials';
import Slider from '../slider';
import Product from '../product';
import Footer from '../footer';

export default class ShopPage extends Component {

    render() {
  
      return (
        <div className="shop">
          <Header />
          <Socials />
          <Slider />
          <Product />
          <Footer />                                                                                                                                                                                                         
        </div>
      );
    }
  }