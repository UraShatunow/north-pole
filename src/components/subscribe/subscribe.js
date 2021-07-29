import React from 'react';

import './subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__container">
        <h2>ПОДПИШИТЕСЬ НА РАССЫЛКУ</h2>
        <h3>И УЗНАВАЙТЕ НОВОСТИ ПЕРВЫМИ</h3>
        <form className="form subscribe__form" name="subscribe" action="http://httpbin.org/post" method="POST">
            <fieldset className="subscribe__form-fieldset">
                <input className="subscribe__form-input" type="text" name="email" placeholder="Добавьте эл. почту*" required />
                <button className="subscribe__form-button" type="submit">ОК</button>
            </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;