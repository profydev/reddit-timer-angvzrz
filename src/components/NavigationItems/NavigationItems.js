import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import Styling from './NavigationItemsStyles';

function NavigationItems() {
  return (
    <Styling>
      <NavigationItem goToPage="/search" innerHtml="Search" />
      <NavigationItem goToPage="/how_it_works" innerHtml="How it works" />
      <NavigationItem goToPage="/about" innerHtml="About" />
    </Styling>
  );
}

export default NavigationItems;
