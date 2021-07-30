import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h3><span>СЕВЕРНЫЙ</span>ПОЛЮС</h3>
      <nav className="header__nav">
        <p><Link to="/">ГЛАВНАЯ</Link></p>
        <p><Link to="/">МАГАЗИН</Link></p>
        <p><Link to="/">О НАС</Link></p>
        <p><Link to="/">КОНТАКТЫ</Link></p>
      </nav>
      <button className="header__menu">
        <div className="header__menu-stripe"></div>
        <div className="header__menu-stripe"></div>
        <div className="header__menu-stripe"></div>
      </button>
      <div className="header__socials">
        <Link to="/facebook" className="header__socials-item header__socials-facebook" target="_blank"></Link>
        <Link to="/twitter" className="header__socials-item header__socials-twitter" target="_blank"></Link>
        <Link to="/instagram" className="header__socials-item header__socials-instagram" target="_blank"></Link>
      </div>
    </div>
  );
};

export default Header;