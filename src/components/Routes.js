import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import App from "../App";
import Poster from "./Poster";

const Routes = () => (
  <Router>
      <Route path="/" component={App} exact />
      <Route path="/poster/:id" component={Poster} />
  </Router>
);

export default Routes;

// Apply exact on the top most component will mean that it is only going to render out the App componenet when the path is exactly rhe forward slash.
