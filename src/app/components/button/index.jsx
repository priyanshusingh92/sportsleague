import React from 'react';

import './styles.sass';

const Button = ({ getToken }) => {
  return (
    <div className="app-token-button">
      <button onClick={() => getToken()}>Get Token</button>
    </div>
  );
};

export default Button;
