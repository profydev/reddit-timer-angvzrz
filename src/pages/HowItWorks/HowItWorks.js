import React from 'react';
import Styling from './HowItWorksStyles';

function HowItWorks() {
  return (
    <Styling id="how-it-works">
      <h2>How it works</h2>
      <ul>
        <li>We find the 500 top posts from the past year for a subrredit</li>
        <li>
          The data is visualized in a heatmap grouped by weekday and hour of the day
        </li>
        <li>See immediately when to submit your reddit post</li>
      </ul>
    </Styling>
  );
}

export default HowItWorks;
