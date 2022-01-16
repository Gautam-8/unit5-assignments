import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TASK_LOADING, GET_TASK_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";


const init = { loading:false , todos:[] , success: false , error : false , task:{}}

export const reducer = (state = init, {type , payload}) => {

    switch(type){

          case ADD_TODO_LOADING : 
          return{
                ...state,
                loading : true
            }

            case ADD_TODO_SUCCESS : 
            return{
                ...state,
                loading : false , 
                todos: [...state.todos , payload ]
            }

            case ADD_TODO_ERROR : 
            return {
                error : true,
            }

            case GET_TODO_LOADING : 
            return{
                ...state,
                loading : true,
                error : false ,
               
            }

            case GET_TODO_SUCCESS : 
            return{
                ...state,
                loading : false , 
                error : false ,
                todos: payload,
            }

            case GET_TODO_ERROR : 
            return {
                loading : false,
                error : true,
            }

            case GET_TASK_SUCCESS : 
              return {
                 
                  ...state,
                  task : payload,
                  loading : false,
              }

              case GET_TASK_LOADING :
                  return {
                      ...state,
                      loading : true,
                       
                  }

             
            default :
                return state;
            
    }
} 