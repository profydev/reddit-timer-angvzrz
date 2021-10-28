import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../assets/header_logo.svg';
import Styling from './HeaderIconStyles';

function HeaderIcon() {
  return (
    <Styling>
      <Link to="/">
        <img src={headerLogo} alt="Reddit header logo" />
      </Link>
    </Styling>
  );
}

export default HeaderIcon;
