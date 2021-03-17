import React from "react"
import RowsPage from "./container/Rows/RowsPage.js"
import Banner from "./components/Banner/Banner.js"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Banner/>
      <RowsPage/>
    </div>
  );
}

export default App;
