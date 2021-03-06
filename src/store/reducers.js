import { AUTH, LOGOUT } from "./actionTypes"

const initState = {
    firstName: '', 
    lastName:'', 
    email: '', 
    password:'', 
    confirmPassword:''
}

const authReducer=(state = initState,action) =>{
    switch(action.type){
        case AUTH:
            //use local storage b/c that way when we refresh, browser will still know we're logged in
            //localStorage.setItem(key, value)
            localStorage.setItem('profile', JSON.stringify({...action?.formData}))
            return {...state, authData: action?.data}
        case LOGOUT:
            //clears local storage so that if you refresh the page, you stay logged out
            localStorage.clear();
            return {...state, authData: initState}
        default:
            return state
    }
}

export default authReducer