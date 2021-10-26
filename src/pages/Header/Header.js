import React from 'react';

import HeaderIcon from '../../components/HeaderIcon/HeaderIcon';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import Styling from './HeaderStyles';

function Header() {
  return (
    <Styling>
      <HeaderIcon />
      <NavigationItems items={[
        {
          link: '/search',
          text: 'Search',
        },
        {
          link: '/how_it_works',
          text: 'How it works',
        },
        {
          link: '/about',
          text: 'About',
        },
      ]}
      />
    </Styling>
  );
}

export default Header;
