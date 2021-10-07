import React from 'react';
import PropTypes from 'prop-types';
import Styling from './NavigationItemStyles';

function NavigationItem({ goToPage, innerHtml }) {
  return (
    <Styling>
      <a href={goToPage}>{innerHtml}</a>
    </Styling>
  );
}

NavigationItem.propTypes = {
  goToPage: PropTypes.string.isRequired,
  innerHtml: PropTypes.string.isRequired,
};

export default NavigationItem;
