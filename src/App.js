import "./App.css";
import HomePage from "./components/homepage/homepage.component.jsx";
import ShopPage from "./components/shop/shop.component.jsx";
import Header from "./components/header/header.component"
import { Route, Switch } from "react-router-dom";

const HatsPage = (params) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
