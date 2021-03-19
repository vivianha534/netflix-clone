import React from 'react'
import "./GetStarted.css"
import {Link} from "react-router-dom"

const GetStarted = () => {
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
                <Link to="/auth">
                    <button className="signIn">
                        Sign In
                    </button>
                </Link>
            </div>
            <div className="getStartedContents">
                <div className="getStartedDescription">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime</p>
                </div>
                <Link to = "/auth">
                    <button className="getStartedButton">
                        Get Started
                    </button>
                </Link>
            </div>
            </div>
        </header>
    )
}

export default GetStarted
