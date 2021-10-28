import React from 'react';
import {
  HashRouter, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Content from './components/Content/ContentStyles';

import GlobalStyle from './globalStyles';
import About from './pages/About/About';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Search from './pages/Search/Search';
// import Table from './pages/Table/Table';
import theme from './theme';
import Layout from './layouts/Layout';
import RouterWrapper from './RouterWrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter hashType="noslash">
        <Switch>
          <Layout>
            <GlobalStyle />
            <Content>
              <RouterWrapper component={<Search />} path="/search/javascript" />
              <RouterWrapper component={<HowItWorks />} path="/#how-it-works" />
              <RouterWrapper component={<About />} path="/#about" />
              {/* <RouterWrapper component={"404 - Not Found"} path="" /> */}
            </Content>
          </Layout>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
