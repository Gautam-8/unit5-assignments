import {LOGIN_SUCCESS , LOGIN_FAILURE} from "./actionTypes"
import { loadData , saveData } from "../../utils/localStorage"

const token = loadData('token');

const init = {
    isAuth : token? true : false,
    token : token || ""
}

export const reducer = (state = init , {type ,payload }) => {

    switch(type){
        case LOGIN_SUCCESS : {
            saveData('token',payload);
            return {
                ...state ,
                isAuth : true,
                token : payload
            }
        }

        case LOGIN_FAILURE : {
            return {
                ...state ,
                isAuth : false,
                token : ''
            }
        }

        default :
        return state;


    } 

}