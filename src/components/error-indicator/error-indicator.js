import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
        <div className="error-icon"></div>
        <h2>Упс! Что-то пошло не так...</h2>
        <p>Но мы уже отправили команду профессионалов на решение проблемы</p>
    </div>
  );
};

export default ErrorIndicator;