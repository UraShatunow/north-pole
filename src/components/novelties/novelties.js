import React from 'react';
import { Link } from 'react-router-dom';

import './novelties.css';

const Novelties = () => {
  return (
    <div className="novelties">
        <div className="novelties__inner">
            <h3>НОВИНКИ</h3>
            <p><Link to="/">В МАГАЗИН</Link></p>
        </div>
        <div className="novelties__pic"></div>
    </div>
  );
};

export default Novelties;