import React from 'react'
import "./FeatureCard.css"

const FeatureCard = ({title, description, img, imgAlt, id}) => {
    const rowReverse = id%2
    
    return (
        <div className= {`${rowReverse ? "featureCardReverse" : "featureCard"}`}>
            <div className = "featureDescription">
                <h2> {title} </h2>
                <p> {description} </p>
            </div>
            <img className = "img" src = {img} alt = {imgAlt} />
        </div>
    )
}

export default FeatureCard
