import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import {makeStyles,createStyles} from "@material-ui/core/styles"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import{useHistory} from'react-router-dom'
import {useDispatch} from 'react-redux'
import {signIn, signUp} from "../../store/actions.js"

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          root: {
            '& .MuiTextField-root': {
              margin: theme.spacing(1),
            },
          },
          avatar: {
            margin: theme.spacing(1),
            backgroundColor: "red",
          },
          form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
          },
          submit: {
            fontSize: "1em",
            color: "white",
            backgroundColor: "red",
            marginTop: "40px",
            marginBottom: "10px",
          },
          switchMode: {
              color: "white",
              marginBottom: "10px",
          }
        // eslint-disable-next-line comma-dangle
    })
);

const initialFormState = {
    firstName: '', 
    lastName:'', 
    email: '', 
    password:'', 
    confirmPassword:''
};

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialFormState)

    //whever you're changing the state based on the old state need a callback function
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
      
    const handleSubmit = (e) =>{
    //     //prevents browser refresh
        e.preventDefault( )
        
        if(isSignup){
            dispatch(signUp(formData, history))    

        }else{
            dispatch(signIn(formData, history))    
        }
    }

    const handleChange = (e) =>{
         setFormData({...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }
 
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color: "white"}}>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                        { isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                         <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                         <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button variant="outlined" onClick={switchMode} className={classes.switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Dont have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth