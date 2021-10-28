import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styling from './NavigationItemStyles';

function NavigationItem({ goToPage, innerHtml }) {
  return (
    <Styling>
      <Link to={goToPage}>{innerHtml}</Link>
    </Styling>
  );
}

NavigationItem.propTypes = {
  goToPage: PropTypes.string.isRequired,
  innerHtml: PropTypes.string.isRequired,
};

export default NavigationItem;
