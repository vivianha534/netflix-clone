import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsIcon from "@material-ui/icons/Notifications"

const searchStyle = {
    color: "white",
}

const NavBar = () => {
    const[show, handleShow] = useState(false)

    //scroll listeners so that when we scroll down header gets a black background
    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        })

        //everytime useEffect loads, remove the listeners so that you don't have a bunch of listeners
        return()=>{
            window.removeEventListener("scroll")
        }
    },[])

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <div className="leftSide">
                <img
                    className="navLogo"
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="Netflix logo"
                />
                <p className="leftText">HOME</p>
                <p className="leftText">TV SHOWS</p>
                <p className="leftText">MOVIES</p>
                <p className="leftText">NEW & POPULAR</p>
            </div>
            <div className="rightSide">
                <SearchIcon className="rightItem" style={searchStyle}/>
                <p className="rightItem">KIDS</p>
                <p className="rightItem">DVD</p>
                <NotificationsIcon className="rightItem"/>
                <img
                    className="navAvatar"
                    src="data:image/jpeg;base64,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"
                    alt="Panda Avatar"
                />
            </div>
        </div>
    )
}

export default NavBar
