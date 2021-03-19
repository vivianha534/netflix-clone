import React from 'react'
import Step1 from "../Steps/Step1/Step1.js"
import Step2 from "../Steps/Step2/Step2.js"
import Step3 from "../Steps/Step3/Step3.js"

const CurrentStep = ({activeStep}) => {
    console.log(activeStep)
    if (activeStep == 0) {
        return (
          <Step1/>
        )
    } else if (activeStep == 1) {
        return (
          <Step2/>
        )
    } else {
        return (
          <Step3/>
        )
    }
}

export default CurrentStep
