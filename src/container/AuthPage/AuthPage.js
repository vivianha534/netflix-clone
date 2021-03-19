import React from 'react'
import Auth from "../../components/Authentication/Auth.js"
import NavBar from "../../components/NavFooter/NavBar/NavBar.js"
import "./AuthPage.css"

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
            <NavBar/>
            <div className="authForm">
            <Auth />
            </div>
        </div>
    )
}

export default AuthPage
