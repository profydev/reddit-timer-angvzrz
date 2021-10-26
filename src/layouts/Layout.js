import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <h1>Header</h1>
      <div>
        {children}
      </div>
      <h1>Footer</h1>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
