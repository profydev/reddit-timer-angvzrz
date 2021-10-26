import React from 'react';
import FooterIcon from '../FooterIcon/FooterIcon';
import Styling from './FooterStyles';

function Footer() {
  return (
    <Styling>
      <a href="https://profy.dev/employers">profy.dev</a>
      <FooterIcon />
      <a href="https://profy.dev/legal">Terms & Privacy</a>
    </Styling>
  );
}

export default Footer;
