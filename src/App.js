import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import About from './pages/About/About';
import Header from './pages/Header/Header';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Search from './pages/Search/Search';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter hashType="noslash">
        <div>
          <GlobalStyle />
          <Header />
          <Switch>
            <div id="content">
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/how_it_works">
                <HowItWorks />
              </Route>
              <Route path="/about">
                <About />
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
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
