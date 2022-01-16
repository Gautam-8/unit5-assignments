import { ADD_COUNTER,  DEC_COUNTER } from "./actionTypes";

const init = {counter : 0}

export const reducer = (state = init, {type , payload}) => {
    switch(type){

        case ADD_COUNTER :
            return {
                ...state,
             counter: state.counter + payload,
            }

            case DEC_COUNTER : 
            return{
                ...state,
                loading :state.count - payload,
            }


            default :
                return state;
            
    }
} 