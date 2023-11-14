import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import { Provider } from 'react-redux';
import configureStore from "./components/store";
import Home from "./components/Home";

function App() {

  const store = configureStore();
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/home" component={Home}/>
            {/* <Route exact path="/restaurants/:id"><RestaurantShowPage /></Route> */}
            <Route path="/" component={SplashPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
