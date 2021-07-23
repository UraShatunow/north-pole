import React from 'react';
import { Link } from 'react-router-dom';

import './gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__small">
        <Link to="/" className="gallery__cover">
            <p>НЕБОЛЬШИЕ РЮКЗАКИ</p>
        </Link>
      </div>
      <div className="gallery__bag">
        <Link to="/" className="gallery__cover">
            <p>СУМКИ</p>
        </Link>
      </div>
      <div className="gallery__big">
        <Link to="/" className="gallery__cover">
            <p>БОЛЬШИЕ РЮКЗАКИ</p>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;