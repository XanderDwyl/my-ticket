import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../components/App";
import TicketDetails from "../components/Ticket/details.js";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/ticket/:id" component={TicketDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
