import React from 'react';
import PropTypes from 'prop-types';
import Header from '../pages/Header/Header';
import Footer from '../components/Footer/Footer';
import RouterWrapper from '../RouterWrapper';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <RouterWrapper component={children} path="/" />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
