import React from "react"
import HomeScreen from "./container/HomeScreen/HomeScreen.js"
import LandingPage from "./container/LandingPage/LandingPage.js"
import AuthPage from "./container/AuthPage/AuthPage.js"
import {Switch, Route, useHistory, Redirect} from "react-router-dom"
import "./App.css"

function App() {
  var user = JSON.parse(localStorage.getItem('profile'))
  const history = useHistory()

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/home-screen">
          {user ? <HomeScreen/> : <Redirect to = "/" />}
        </Route>
        <Route exact path = "/auth">
            {!user ? <AuthPage/> : <Redirect to = "/home-screen" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
