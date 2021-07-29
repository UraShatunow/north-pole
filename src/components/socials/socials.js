import React from 'react';
import { Link } from 'react-router-dom';

import './socials.css';

const Socials = () => {
  return (
    <div className="socials">
      <Link to="/facebook" className="socials__item socials__facebook" target="_blank"></Link>
      <Link to="/twitter" className="socials__item socials__twitter" target="_blank"></Link>
      <Link to="/instagram" className="socials__item socials__instagram" target="_blank"></Link>
    </div>
  );
};

export default Socials;