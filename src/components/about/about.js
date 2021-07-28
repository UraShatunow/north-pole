import React from 'react';

import './about.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__inner">
        <div className="about__text">
            <h2>О НАС</h2>
            <p>
                Это текст. Нажмите один раз и выберите «Редактировать текст» или просто 
                дважды кликните, чтобы добавить свой текст и настроить шрифт. Здесь вы
                можете рассказать посетителям подробнее о себе.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;