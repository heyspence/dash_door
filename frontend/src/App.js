import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import { Provider } from 'react-redux';
import Home from "./components/Home";
import RestaurantShow from "./components/Restaurant/RestaurantShow";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";

function App({ store }) {
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/restaurants/:id" component={RestaurantShow} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="/" component={SplashPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
