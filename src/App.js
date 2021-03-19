import React from "react"
import HomeScreen from "./container/HomeScreen/HomeScreen.js"
import LandingPage from "./container/LandingPage/LandingPage.js"
import AuthPage from "./container/AuthPage/AuthPage.js"
import {Switch, Route} from "react-router-dom"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/homeScreen">
          <HomeScreen/>
        </Route>
        <Route exact path = "/auth">
          <AuthPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
