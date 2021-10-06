import React from 'react';
import PropTypes from 'prop-types';

function NavigationItem({ goToPage, innerHtml }) {
  return (
    <a href={goToPage}>{innerHtml}</a>
  );
}

NavigationItem.propTypes = {
  goToPage: PropTypes.string.isRequired,
  innerHtml: PropTypes.string.isRequired,
};

export default NavigationItem;
