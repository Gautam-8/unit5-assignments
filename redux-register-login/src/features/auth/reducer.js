import { loadData, saveData } from "../../utils/localStorage"
import {LOGIN_SUCCESS , LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, PROFILE} from "./actionTypes"

const token = loadData('token');


const init = {
    isAuth : token? true : false,
    token : token? token[0] : "",
    error : false,
    regError : true,
    profile : {},
    username : token? token[1] : ""
}

export const reducer = (state = init , {type ,payload }) => {

    switch(type){
        case LOGIN_SUCCESS : {
         saveData("token" , payload);
            return {
                ...state ,
                error : false,
                isAuth : true,
                token : payload[0],
                username : payload[1]
            }
        }

        case PROFILE : {
      
            return {
                ...state,
                profile : payload,
            }
        }

        case LOGIN_FAILURE : {
            return {
                ...state ,
                isAuth : false,
                token : '',
                error : true,
            }
        }

        case REGISTER_SUCCESS : {
            return {
                ...state,
                regError : payload ,
                
            }
        }
        case REGISTER_FAILURE : {
            return {
                ...state,
                regError : payload,
                
            }
        }

        default :
        return state;


    } 

}