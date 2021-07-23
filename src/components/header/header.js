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
    </div>
  );
};

export default Header;