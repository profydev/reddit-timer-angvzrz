import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import Header from './pages/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <GlobalStyle />
          <Header />
          <Switch>
            <div id="content">
              <Route exact path="/">
                <p>No reactions to your reddit posts?</p>
                <p>
                  Great timing, great results! Find the best time to post on your
                  subrredit.
                </p>
                <button type="button">SHOW ME THE BEST TIME</button>
                <p>r/javascript</p>
                <div>Here it goes the heatmap preview</div>
              </Route>
              <Route path="/how_it_works">
                <div id="how-it-works">
                  <h2>How it works</h2>
                  <ul>
                    <li>We find the 500 top posts from the past year for a subrredit</li>
                    <li>
                      The data is visualized in a heatmap grouped by weekday and hour of the day
                    </li>
                    <li>See immediately when to submit your reddit post</li>
                  </ul>
                </div>
              </Route>
              <Route path="/about">
                <div id="about">
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
                </div>
              </Route>
              <Route>404 - Not Found</Route>
            </div>
          </Switch>
          <div id="footer">
            <a href="https://profy.dev/">profy.dev</a>
            <div>search icon here</div>
            <a href="https://profy.dev/legal">Terms & Privacy</a>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
