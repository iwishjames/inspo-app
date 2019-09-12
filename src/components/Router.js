import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Poster from "./Poster";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/poster/:id" component={Poster} />
    </Switch>
  </BrowserRouter>
);

export default Router;

// Apply exact on the top most component will mean that it is only going to render out the App componenet when the path is exactly rhe forward slash.
