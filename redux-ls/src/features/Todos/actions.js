
import { ADD_TODO_ERROR , ADD_TODO_LOADING ,ADD_TODO_SUCCESS, GET_TODO_SUCCESS, GET_TODO_ERROR , GET_TODO_LOADING, GET_TASK_SUCCESS, GET_TASK_LOADING} from "./actionTypes"


export const addTodoLoading = () => ({
    type: ADD_TODO_LOADING,
    
});


export const addTodoSuccess = (data) => ({
    type: ADD_TODO_SUCCESS,
    payload : data,
});

export const addTodoError = (err) => ({
    type: ADD_TODO_ERROR,
    payload : err,
});



export const getTodoLoading = () => ({
    type: GET_TODO_LOADING,
    
});


export const getTodoSuccess = (data) => {
return {
    type: GET_TODO_SUCCESS,
    payload : data
    
}
}

export const getTodoError = (data) => {
    return {
        type : GET_TODO_ERROR,
        payload : data
    
    }
}




//TASK

export const getTaskSuccess = (data) => {
    return {
        type : GET_TASK_SUCCESS,
         payload : data 
    }
}

export const getTaskLoading = () => {
    return {
        type : GET_TASK_LOADING,
         
    }
}

export const oneTodo = (id) => (dispatch) => {

    dispatch(getTaskLoading());

    fetch(`http://localhost:3001/todos/${id}`)
        .then((d) => d.json())
  
        .then((res)=> {
           console.log(res)
             dispatch(getTaskSuccess(res));      
             })
  
             .catch((err) =>{
                console.log(err)
                 })
  
}






