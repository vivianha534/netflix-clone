import React from "react"
import HomeScreen from "./container/HomeScreen/HomeScreen.js"
import LandingPage from "./container/LandingPage/LandingPage.js"
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
      </Switch>
    </div>
  );
}

export default App;
