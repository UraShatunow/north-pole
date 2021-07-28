import React from 'react';
import { Link } from 'react-router-dom';

import './sale.css';

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale__container">
        <h2>РАСПРОДАЖА</h2>
        <h3>СКИДКА 50%</h3>
        <div className="sale__inner">
            <Link to="/" className="sale__item">
                <div className="sale__item-pic sale__item-pic-1"></div>
                <div className="sale__item-text">
                    <h4>ВАШ ТОВАР</h4>
                    <p><span>6 000,00 ₽</span>5 400,00 ₽</p>
                </div>
            </Link>
            <Link to="/" className="sale__item">
                <div className="sale__item-pic sale__item-pic-2"></div>
                <div className="sale__item-text">
                    <h4>ВАШ ТОВАР</h4>
                    <p><span>6 500,00 ₽</span>5 200,00 ₽</p>
                </div>
            </Link>
            <Link to="/" className="sale__item">
                <div className="sale__item-pic sale__item-pic-3"></div>
                <div className="sale__item-text">
                    <h4>ВАШ ТОВАР</h4>
                    <p><span>6 000,00 ₽</span>4 800,00 ₽</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;