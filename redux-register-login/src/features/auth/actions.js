import { LOGIN_SUCCESS ,LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, PROFILE} from "./actionTypes"
import axios from "axios";


export const loginSuccess = (token) =>{
    return{
        type : LOGIN_SUCCESS,
        payload : token
    }
}

export const loginFailure = (err) => {
    return {
        type : LOGIN_FAILURE,
        payload : err
    }
}

const profile = (data) => {
    return{
        type : PROFILE,
        payload : data
    }
}

export const userLogin = (form) => (dispatch) => {

    axios.post("https://masai-api-mocker.herokuapp.com/auth/login" , form)
    .then((res) => (
        console.log(res) ,
       dispatch(loginSuccess([res.data.token , form.username]))
       
        
        ))

    .catch((e) => ( dispatch(loginFailure(e) )),
  )
}

export const getUser = (username , token) => (dispatch) => {

 axios.get(`https://masai-api-mocker.herokuapp.com/user/${username}` , {headers : {Authorization: `Bearer ${token}`} })
 .then((res) => {console.log(res.data) ; dispatch(profile(res.data))})
 .catch((error) => 
 console.log(error)
)
}




export const registerSuccess = (data) => {
      
    return {
        type: REGISTER_SUCCESS,
        payload : data
    }
}
export const registerFailure = (data) => {
      
    return {
        type: REGISTER_FAILURE,
        payload : data
    }
}


export const userRegister = (regform) => (dispatch) => {

    axios.post("https://masai-api-mocker.herokuapp.com/auth/register" , regform)
    .then((res) =>  ( 
        console.log(res.data) ,
        
        res.data.error ?   dispatch(registerFailure(res.data.error)) : dispatch(registerSuccess(res.data.error))
      
    ))
    .catch((error) => 
   console.log(error)
  )

}