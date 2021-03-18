import React from 'react'
import NavBar from "../../components/NavFooter/NavBar/NavBar.js"
import Banner from "../../components/HomeScreen/Banner/Banner.js"
import Rows from "../../components/HomeScreen/Rows/Rows.js"
import Footer from "../../components/NavFooter/Footer/Footer.js"
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

