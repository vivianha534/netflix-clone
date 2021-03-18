import React from 'react'
import "./GetStarted.css"

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
                    className="navLogo"
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="Netflix logo"
                />
                <button className="signIn">
                    Sign In
                </button>
            </div>
            <div className="getStartedContents">
                <div className="description">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime</p>
                </div>
                <button className="getStartedButton">
                    Get Started
                </button>
            </div>
            </div>
        </header>
    )
}

export default GetStarted
