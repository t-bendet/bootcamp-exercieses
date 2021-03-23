import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import Nope from "./Nope";
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route component={Nope} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
