import React from 'react'
import Auth from "../../components/Authentication/Auth.js"
import "./AuthPage.css"
import {Link} from "react-router-dom"

const AuthPage = () => {

    return (
        <div
            className="authPage"
            style={{
                backgroundSize: "cover",
                backgroundImage:`url("https://midatlanticconsulting.com/blog/wp-content/uploads/2020/07/7_itunes1-1-1024x497.jpg")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="darkerImageOverlay"></div>
            <Link to = "/">
                <img
                    className="authLogo"
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="Netflix logo"
                />
            </Link>
            <div className="authForm">
                <Auth />
            </div>
        </div>
    )
}

export default AuthPage
