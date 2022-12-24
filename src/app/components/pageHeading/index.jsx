import React from 'react';

import './styles.sass';

const PageHeading = ({ title }) => {
  return (
    <div className="app-page-heading__title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeading;
