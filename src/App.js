import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core";
import Theme from "./ui/Theme";

import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import List from "./pages/List";
import Account from "./pages/Account";

let theme = Theme;
theme = responsiveFontSizes(theme);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/analysis">
              <Analysis />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
