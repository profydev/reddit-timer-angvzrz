import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import Styling from './NavigationItemsStyles';

function NavigationItems() {
  return (
    <Styling>
      <NavigationItem innerHtml="Search" />
      <NavigationItem innerHtml="How it works" />
      <NavigationItem innerHtml="About" />
    </Styling>
  );
}

export default NavigationItems;
