import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './header.css';

export default class Header extends Component {

  state = {
    isActive: false
  }

  openPopup = () => {
    this.setState(() => ({
      isActive: true
    }))
  }

  closePopup = () => {
    this.setState(() => ({
      isActive: false
    }))
  }

  render () {

    let clazz = this.state.isActive ? "header__popup header__popup_active" : "header__popup";

    return (
      <div className="header">
        <h3><span>СЕВЕРНЫЙ</span>ПОЛЮС</h3>
        <nav className="header__nav">
          <p><Link to={{pathname: '/', hash: "#section-intro"}}>ГЛАВНАЯ</Link></p>
          <p><Link to="/shop-page">МАГАЗИН</Link></p>
          <p><Link to={{pathname: '/', hash: "#section-about"}}>О НАС</Link></p>
          <p><Link to={{pathname: '/', hash: "#section-contacts"}}>КОНТАКТЫ</Link></p>
        </nav>
        <button className="header__menu" onClick={this.openPopup}>
          <div className="header__menu-stripe"></div>
          <div className="header__menu-stripe"></div>
          <div className="header__menu-stripe"></div>
        </button>
        <div className={clazz}>
          <p><Link to={{pathname: '/', hash: "#section-intro"}} onClick={this.closePopup}>ГЛАВНАЯ</Link></p>
          <p><Link to="/shop-page" onClick={this.closePopup}>МАГАЗИН</Link></p>
          <p><Link to={{pathname: '/', hash: "#section-about"}} onClick={this.closePopup}>О НАС</Link></p>
          <p><Link to={{pathname: '/', hash: "#section-contacts"}} onClick={this.closePopup}>КОНТАКТЫ</Link></p>
          <button className="header__popup-button" onClick={this.closePopup}>×</button>
        </div>
        <div className="header__socials">
          <Link to="/facebook" className="header__socials-item header__socials-facebook" target="_blank"></Link>
          <Link to="/twitter" className="header__socials-item header__socials-twitter" target="_blank"></Link>
          <Link to="/instagram" className="header__socials-item header__socials-instagram" target="_blank"></Link>
        </div>
      </div>
    );
  }
};
