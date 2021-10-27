import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import About from './pages/About/About';
import Header from './components/Header/Header';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Search from './pages/Search/Search';
import Table from './pages/Table/Table';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter hashType="noslash">
        <Switch>
          <Route path="/">
            <GlobalStyle />
            <Header />
            <div id="content">
              <Route path="/search">
                <Search />
              </Route>
              <Table />
              <Route path="/how_it_works">
                <HowItWorks />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route>404 - Not Found</Route>
            </div>
            <div id="footer">
              <a href="https://profy.dev/">profy.dev</a>
              <div>search icon here</div>
              <a href="https://profy.dev/legal">Terms & Privacy</a>
            </div>
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
