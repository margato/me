import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from "./pages";
import NotFound from "./pages/404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/**">
          <NotFound />
        </Route>
      </Switch>
  </Router>
, document.getElementById('root'));

