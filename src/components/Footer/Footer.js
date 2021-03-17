import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import PublicIcon from "@material-ui/icons/Public"
import GitHubIcon from "@material-ui/icons/GitHub"
import {Button} from "@material-ui/core"
import {makeStyles, createStyles} from "@material-ui/core/styles"
import "./Footer.css"

const useStyles = makeStyles((theme) =>
    createStyles({
        icon:{
            marginRight: "20px",
            fontWeight: "bold",
        }
        // eslint-disable-next-line comma-dangle
    })
);

const Footer = () => {
    const classes = useStyles()
    return (
        <div className="foter">
            <h2 className="contact">Contact Me Below:</h2>
            <div className="iconContainer">

                <a href = "https://www.linkedin.com/in/vivian-ha-74abb8194/" target="__blank">
                    <Button 
                        className={classes.icon}
                        endIcon={<LinkedInIcon/>}
                        variant="contained"
                        color="primary"
                    >
                        Linkedin
                    </Button>
                </a>
                <a href = "https://vivianha534.github.io/Portfolio/" target="__blank">
                    <Button 
                        className= {classes.icon}
                        endIcon={<PublicIcon/>}
                        variant="contained"
                        style={{backgroundColor:"#000080", color: "whiteg"}}
                    >
                        Personal Website
                    </Button>
                </a>
                <a href = "https://github.com/vivianha534" target="__blank">
                    <Button 
                        className= {classes.icon}
                        endIcon={<GitHubIcon/>}
                        variant="contained"
                        color="default"
                    >
                        Github
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default Footer;
