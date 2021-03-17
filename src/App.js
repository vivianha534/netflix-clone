import React from "react"
import RowsPage from "./container/Rows/RowsPage.js"
import Banner from "./components/Banner/Banner.js"
import NavBar from "./components/NavBar/NavBar.js"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowsPage/>
    </div>
  );
}

export default App;
