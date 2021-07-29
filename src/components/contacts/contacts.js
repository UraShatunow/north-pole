import React from 'react';

import './contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <form className="form contacts__form" name="register" action="http://httpbin.org/post" method="POST">
            <fieldset className="form__fieldset">
                <div className="form__field">
                    <input className="form__input" type="text" name="name" placeholder="Имя" />
                </div>
                <div className="form__field">
                    <input className="form__input" type="text" name="email" placeholder="Эл. почта" required />
                </div>
                <div className="form__field">
                    <input className="form__input" type="text" name="phoneNumber" placeholder="Телефон" />
                </div>
                <div className="form__field">
                    <textarea className="form__input form__textarea" name="message" rows="8" placeholder="Добавьте сообщение..." ></textarea>
                </div>
                <div className="form__submit">
                    <button className="form__button" type="submit">Отправить</button>
                </div>
            </fieldset>
        </form>
        <div className="contacts__text">
          <h2>Контакты</h2>
          <p className="contacts__paragraph">Это текст. Нажмите один раз и выберите «Редактировать текст» 
            или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</p>
          <p className="contacts__info">info@mysite.ru</p>
          <p className="contacts__info">Телефон: +7 (495) 000-00-00</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;