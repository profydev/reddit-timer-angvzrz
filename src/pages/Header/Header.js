import React from 'react';

import HeaderIcon from '../../components/HeaderIcon/HeaderIcon';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
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
