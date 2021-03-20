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
    display: "block",
    backgroundColor: "#242424",
    color: "white",
  },
  contactLink:{
      marginTop: "14px",
      paddingLeft: "10px",
  },
  listItem:{
      marginBottom: "10px",
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
            <Typography className={classes.heading}>What features does this clone have?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
                <Typography style={{marginBottom: "20px"}}>Glad you asked! This clone currently has the following features:</Typography>
                <ul>
                    <li>
                        Authentication features
                    </li>
                        <ul>
                            <li className={classes.listItem}>
                                "forgot password" option will send a reset link to your email!
                            </li>
                            <li className={classes.listItem}>
                                If you try to sign in with a non valid email, you'll get an error message.
                            </li>
                            <li className={classes.listItem}>
                                If you try to sign up with an email that's already associated with a user, you'll get an error message.
                            </li>
                            <li className={classes.listItem}>
                                Users are able to sign in and out, and the content they are able to access is restricted
                                depending on whether or not they're signed in. (ie. signed in users can access movies but not the
                                authentication page, and signed out users are abl to access authentication but not movies) The landing
                                page (which you're currently on), also dynamically changes depending on whether or not you are signed in!
                            </li>
                        </ul>
                    <li>
                        Movie Page
                    </li>
                        <ul>
                            <li className={classes.listItem}>
                                Navigation Bar will change background colors once you scroll down 100 pixels
                            </li>
                            <li className={classes.listItem}>
                                The featured movie will change with every refresh!
                            </li>
                            <li  className={classes.listItem}>
                                If you hover over a movie poster, it will enlarge.
                            </li>
                            <li>
                                These movies are the most up to date! Powered by TMDB, Netflix Clone's selection of movies automatically
                                updates!
                            </li>
                            <li className={classes.listItem}>
                                There are several different genres available for you to check out. And if you want to find
                                out more about a movie, click on it's image, and if there's a trailer available, it will
                                start to play.
                            </li>
                        </ul>
                </ul>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
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
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography className={classes.heading}>What technology did you use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
            <ul>
                <li>
                    Frontend: React JS, CSS, Material UI, and Redux
                </li>
                <li>
                    API: axios
                </li>
                <li>
                    Backend: Firebase Firestore, and TMDB
                </li>
            </ul>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
            className= {classes.accordionSummary}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            >
            <Typography className={classes.heading}>Where can I get in contact with you?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.description}>
                <Typography>
                    You can reach me through:
                </Typography>
                <a className={classes.contactLink} href = "mailto: vivian.ha534@gmail.com" target="__blank">
                    <Button
                        startIcon={<MailOutlineIcon/>}
                        style={{color: "white"}}
                    >
                        email
                    </Button>
                </a>
                
                <a className={classes.contactLink} href = "https://www.linkedin.com/in/vivian-ha-74abb8194/" target="__blank">
                    <Button
                        startIcon={<LinkedInIcon/>}
                        style={{color: "white"}}
                    >
                        LinkedIn
                    </Button>
                </a>
                </AccordionDetails>
        </Accordion>
        </div>
    </div>
  );
}
