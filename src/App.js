import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Content from './components/Content/ContentStyles';

import GlobalStyle from './globalStyles';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Search from './pages/Search/Search';
// import Table from './pages/Table/Table';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter hashType="noslash">
        <Switch>
          <Route path="/">
            <GlobalStyle />
            <Header />
            <Content>
              <Route path="/search">
                <Search />
              </Route>
              {/* <Table /> */}
              <Route path="/how_it_works">
                <HowItWorks />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              {/* <Route>404 - Not Found</Route> */}
            </Content>
            <Footer />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
