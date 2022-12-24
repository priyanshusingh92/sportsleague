import React from 'react';

import Header from 'app/components/header';
import Footer from 'app/components/footer';
// ----------------------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
