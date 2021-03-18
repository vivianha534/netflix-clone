import React from 'react'
import GetStarted from "../../components/LandingPage/GetStarted/GetStarted.js"
import FeatureCard from "../../components/LandingPage/FeatureCard/FeatureCard.js"
import FAQ from "../../components/LandingPage/FAQ/FAQ.js"
import Footer from "../../components/NavFooter/Footer/Footer.js"
import "./LandingPage.css"

const featureData = [
    {
        title: "Enjoy on your TV.",
        description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        img: "https://www.flixicam.com/img/blog/watch-netflix-on-tv.jpg",
        imgAlt: "Watch Netflix on TV"
    },
    {
        title: "Download your shows to watch offline.",
        description: "Save your favourites easily and always have something to watch",
        img: "https://cnet1.cbsistatic.com/img/YcO6gYs10nORERmfjWDbrWPxuNM=/1200x675/2016/11/30/5c4a9b9d-74d7-40fa-b7c0-e72740703611/netflix-download-and-go.jpg",
        imgAlt: "Download videos on Netflix"
    },
    {
        title: "Watch everywhere.",
        description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more",
        img: "https://qph.fs.quoracdn.net/main-qimg-f8ed71c94950048fb36bb80d59e9c4a7",
        imgAlt: "Watch on tablets, phones, or TVs"
    }
]

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <GetStarted/>
            {featureData.map((feature, idx) => (
                <FeatureCard 
                    title={feature.title} 
                    description={feature.description} 
                    img={feature.img}
                    imgAlt={feature.imgAlt}
                    id={idx}
                />
            ))}
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default LandingPage
