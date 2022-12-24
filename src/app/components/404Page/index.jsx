import React from 'react';

import pageNotFoundImage from '../../../assets/images/icon/404.png';

import './styles.sass';

const PageNotFound = () => {
  return (
    <section className="app-404-section">
      <div>
        <img src={pageNotFoundImage} alt="page not found image" />
      </div>
    </section>
  );
};

export default PageNotFound;
