import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../assets/header_logo.png';
import Styling from './HeaderIconStyles';

function HeaderIcon() {
  return (
    <Styling>
      <Link to="/">
        <img src={headerLogo} alt="lets go home" width={150} />
      </Link>
    </Styling>
  );
}

export default HeaderIcon;
