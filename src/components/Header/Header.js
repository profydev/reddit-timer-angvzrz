import React from 'react';

import HeaderIcon from '../HeaderIcon/HeaderIcon';
import NavigationItems from '../NavigationItems/NavigationItems';
import Styling from './HeaderStyles';

function Header() {
  return (
    <Styling>
      <HeaderIcon />
      <NavigationItems />
    </Styling>
  );
}

export default Header;
