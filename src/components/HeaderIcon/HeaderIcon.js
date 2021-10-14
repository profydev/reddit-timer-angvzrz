import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HeaderLogo } from '../../assets/header_logo.svg';
import Styling from './HeaderIconStyles';

function HeaderIcon() {
  return (
    <Styling>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg">
          <HeaderLogo />
        </svg>
      </Link>
    </Styling>
  );
}

export default HeaderIcon;
