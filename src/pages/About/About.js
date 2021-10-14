import React from 'react';
import Styling from './AboutStyles';

function About() {
  return (
    <Styling>
      <h2>About</h2>
      <p>
        This app was created during a course on
        {' '}
        <a href="https://profy.dev/">profy.dev</a>
        {' '}
        with the goal to implement a pixel-perfect real-world
        application with professional workflows and tools like
        Kanban, Asana, Zeplin, GitHub, pull requests
        and code reviews.
        {' '}
        <a href="https://profy.dev/project/reddit-timer/welcome">
          Click here for more information
        </a>
        .
      </p>
    </Styling>
  );
}

export default About;
