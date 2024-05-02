import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Cheetos from "./Cheetos";
import Pretzels from "./Pretzels";
import Doritos from "./Doritos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/Doritos" exact>
          <Doritos />
        </Route>
        <Route path="/Pretzels" exact>
          <Pretzels />
        </Route>
        <Route path="/Cheetos" exact>
          <Cheetos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;