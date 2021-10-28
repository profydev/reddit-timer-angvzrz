import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../NavigationItem/NavigationItem';
import Styling from './NavigationItemsStyles';

function NavigationItems({ items }) {
  return (
    <Styling>
      {
        items.map(
          (item) => <NavigationItem goToPage={item.link} innerHtml={item.text} />,
        )
      }
    </Styling>
  );
}

NavigationItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavigationItems;
