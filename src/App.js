import React from "react"
import LandingPage from "./container/LandingPage/LandingPage.js"
import HomeScreen from "./container/HomeScreen/HomeScreen.js"
import SignUpPage from "./container/SignUpPage/SignUpPage.js"
import {Switch, Route} from "react-router-dom"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/home-screen">
          <HomeScreen/>
        </Route>
        <Route exact path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
