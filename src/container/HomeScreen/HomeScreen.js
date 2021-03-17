import React from 'react'
import NavBar from "../../components/NavBar/NavBar.js"
import Banner from "../../components/Banner/Banner.js"
import Rows from "../../components/Rows/Rows.js"

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <NavBar/>
            <Banner/>
            <Rows />
        </div>
    )
}

export default HomeScreen

