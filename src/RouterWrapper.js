import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router';

function RouterWrapper({ component, path }) {
  return (
    <Route path={path}>
      {component}
    </Route>
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default RouterWrapper;
