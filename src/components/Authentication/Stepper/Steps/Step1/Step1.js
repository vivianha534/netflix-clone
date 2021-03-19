import React from 'react'
import {Typography} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import "./Step1.css"

const Step1 = () => {
    return (
        <div>
            <Typography>
                Welcome! Joining Netflix is easy.
            </Typography>
            <Typography>
                Enter your email and password and you'll be watching in no time.
            </Typography>
            <form className="s1Form">
                <TextField required label="Enter your email" />
                <TextField required label="Enter your password" />
                <TextField required label="Confirm your password" />
            </form>
        </div>
    )
}

export default Step1
