import React from 'react'
import NavBar from "../../components/NavBar/NavBar.js"
import Banner from "../../components/Banner/Banner.js"
import Rows from "../../components/Rows/Rows.js"
import Footer from "../../components/Footer/Footer.js"
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <NavBar/>
            <Banner/>
            <Rows />
            <Footer />
        </div>
    )
}

export default HomeScreen

