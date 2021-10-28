import React from 'react';
// import { Link } from 'react-router-dom';

// import { ReactComponent as FooterLogo } from '../../assets/footer_logo.svg';
import footerLogo from '../../assets/footer_logo.svg';
import Styling from './FooterIconStyles';

function FooterIcon() {
  return (
    <Styling>
      {/* <Link to="/"> */}
      <img src={footerLogo} alt="Reddit search logo" style={{ display: 'block' }} width={35} />
      {/* </Link> */}
    </Styling>
  );
}

export default FooterIcon;
