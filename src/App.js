import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Cats = () => {
  return (
    <div>
      <h1>Cats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop/cats" exact component={Cats} />
    </div>
  );
}

export default App;
