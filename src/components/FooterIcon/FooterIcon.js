import React from 'react';
// import { Link } from 'react-router-dom';

import { ReactComponent as FooterLogo } from '../../assets/footer_logo.svg';
import Styling from './FooterIconStyles';

function FooterIcon() {
  return (
    <Styling>
      {/* <Link to="/"> */}
      <svg xmlns="http://www.w3.org/2000/svg">
        <FooterLogo />
      </svg>
      {/* </Link> */}
    </Styling>
  );
}

export default FooterIcon;
