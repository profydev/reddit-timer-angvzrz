import React from 'react';

import headerLogo from '../../assets/header_logo.png';
import Styling from './HeaderIconStyles';

function HeaderIcon() {
  return (
    <Styling>
      <img src={headerLogo} alt="lets go home" width={150} />
    </Styling>
  );
}

export default HeaderIcon;
