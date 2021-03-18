import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: "flex",
    justifyContent: "center",
    padding: "80px 0px",
    borderBottom:"12px solid #242424"
  },
  accordion:{
      width: "50%",
      color: "white",
  },
  accordionSummary:{
    backgroundColor: "#242424",
    color: "white",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  description:{
    backgroundColor: "#242424",
    color: "white",
  }
}));

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div className={classes.root}>
        <div className={classes.accordion}>
        <Typography variant = "h2" style={{color:"white", textAlign: "center", paddingBottom: "40px",}}>Frequently Asked Questions</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography className={classes.heading}>Who built this Netflix Clone?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
            <Typography>
                My name is Vivian Ha, and at the time of this build I am a second year computer science major at UCLA. 
                I enjoy building websites, applications, and games that help minority groups! Previously I was a tech intern
                for Teach LA where I helped build a progressive web app to promote mental wellness. Currently I am the static
                site director for ACM Teach LA at UCLA. In this role I help maintain, and add features to our static site to
                ensure that students, parents, teachers, sponsors, and anybody else intersted in our organization can easily find
                what they need!
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography className={classes.heading}>Why did you build this Netflix clone?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
            <Typography>
                I built this Netflix clone in order to practice my web development skills! Specifically, I wanted to practice
                implementing authentication, redux, Firebase Firestore, and using api's.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography className={classes.heading}>What technology did you use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
            <Typography>
                Frontend: React JS, CSS, Material UI, and Redux (will be implemented later)
            </Typography>
            <Typography>
                API: axios
            </Typography>
            <Typography>
                Backend: Firebase Firestore (will be implemented later), and TMDB
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography className={classes.heading}>Where can I get in contact with you?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
            <Typography>
                You can reach me through:
            </Typography>
            <div>
                <a href = "mailto: vivian.ha534@gmail.com" target="__blank"> email </a>
                <a href = "https://www.linkedin.com/in/vivian-ha-74abb8194/" target="__blank"> linkedIn </a>
            </div>
            </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}
