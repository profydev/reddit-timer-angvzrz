import React from 'react';

import HeaderIcon from '../../components/HeaderIcon';
import Styling from './HeaderStyles';

function Header() {
  return (
    <Styling>
      <HeaderIcon />
      Header Placeholder
      <div id="navigation">
        <button type="button">Search</button>
        <button type="button">How it works</button>
        <button type="button">About</button>
      </div>
    </Styling>
  );
}

export default Header;
