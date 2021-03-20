import {AUTH} from './actionTypes'
import fireAuth from "../firebase.config"

//if action creators are async we have to use redux thunk
export const signIn = (formData, history) => async(dispatch) => {
    try{
        //log in user
        fireAuth.signInWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) =>{
                var user = userCredential.user;
            })
            .catch((error) =>{
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error code:", errorCode, " error message:", errorMessage)
            })

            console.log("action:" , formData)

        dispatch({type: AUTH, formData})

        history.push('/')
    }catch(error){
        console.log(error)
    }
}

export const signUp = (formData, history) => async(dispatch) => {
    try{
        fireAuth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential)=>{
                var user = userCredential.user
            })
            .catch((error) =>{
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error code:", errorCode, " error message:", errorMessage)
            })

        dispatch({type: AUTH, formData})
        
        history.push('/')
    }catch(error){
        console.log(error)
    }
}