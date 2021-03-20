import React from 'react'
import "./GetStarted.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"

const GetStarted = () => {
    var user = JSON.parse(localStorage.getItem('profile'))

    console.log(user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        window.location.reload() 
    }

    return (
        <header
            className="getStarted"
            style={{
                backgroundSize: "cover",
                backgroundImage:`url("https://midatlanticconsulting.com/blog/wp-content/uploads/2020/07/7_itunes1-1-1024x497.jpg")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="darkerImageOverlay">
            <div className = "getStartedHeader">
                <img
                    className="logo"
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="Netflix logo"
                />
                <Link to={!user && "/auth"}>
                    <button 
                        onClick = {user && handleLogout}
                        className="signIn"
                    >
                        {user ? <p>Log Out</p> : <p>Sign In</p>}
                    </button>
                </Link>
            </div>
            <div className="getStartedContents">
                <div className="getStartedDescription">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime</p>
                </div>
                <Link to = {user ? "/home-screen" : "/auth"}>
                    <button className="getStartedButton">
                       {user ? <p>View Movies!</p> : <p>Get Started</p>}
                    </button>
                </Link>
            </div>
            </div>
        </header>
    )
}

export default GetStarted
