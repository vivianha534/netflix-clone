import {AUTH} from './actionTypes'
import fireAuth from "../firebase.config"

//if action creators are async we have to use redux thunk
export const signIn = (formData, history) => async(dispatch) => {
    try{
        //log in user
        fireAuth.signInWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) =>{
                var user = userCredential.user;
                dispatch({type: AUTH, formData})
                history.push('/')
            })
            .catch((error) =>{
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error code:", errorCode, " error message:", errorMessage)
                if(errorCode == "auth/user-not-found")
                    alert("Error: user does not exist, please sign up to continue")
                if(errorCode == "auth/wrong-password")
                    alert("Error: Incorrect Password, try again")
            })

    }catch(error){
        console.log(error)
    }
}

export const signUp = (formData, history) => async(dispatch) => {
    try{
        fireAuth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential)=>{
                var user = userCredential.user
                dispatch({type: AUTH, formData})
                history.push('/')
            })
            .catch((error) =>{
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error code:", errorCode, " error message:", errorMessage)
                if(errorCode == "auth/email-already-in-use")
                    alert("Error: This user already exists, please sign in to continue")
            })
        
    }catch(error){
        console.log(error)
    }
}

export const forgotPass = (formData, history) => async(dispatch)=>{
    try{

        fireAuth.sendPasswordResetEmail(formData.email).then(function() {
            // Email sent.
            console.log(formData.email)
          }).catch(function(error) {
            var errorCode = error.code;
            console.log(error)
            if(errorCode == "auth/user-not-found")
                alert("Error: There is no user with this email, please sign up to continue")
            if(errorCode == "auth/invalid-email")
                alert("Pease fill in the email field with the email associated with your account in order to get a password reset email")
          });
    }catch{

    }
}