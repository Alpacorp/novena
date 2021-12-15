import * as React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header show={true} />
      {children}
      <Footer />
    </>
  )
};

export default Layout;