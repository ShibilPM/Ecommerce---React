import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
    </div>
  );
}

export default App;
