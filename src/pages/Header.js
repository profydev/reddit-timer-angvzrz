import React from 'react';

import HeaderIcon from '../components/HeaderIcon';

function Header() {
  return (
    <header>
      <HeaderIcon />
      Header Placeholder
      <div id="navigation">
        <button type="button">Search</button>
        <button type="button">How it works</button>
        <button type="button">About</button>
      </div>
    </header>
  );
}

export default Header;
