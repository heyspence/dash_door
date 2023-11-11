import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SplashPage from "./components/SplashPage";
import { Provider } from 'react-redux';
import configureStore from "./components/store";

function App() {

  const store = configureStore();
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/"><SplashPage /></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
