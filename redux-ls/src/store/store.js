import { createStore ,combineReducers ,applyMiddleware ,compose } from "redux";
import { reducer as Todoreducer } from "../features/Todos/reducer";
import {reducer as Authreducer } from "../features/auth/reducer";


import thunk from "redux-thunk";


const rootreducer = combineReducers({
    todoState : Todoreducer,
    authState : Authreducer

});

export const store = createStore(

    rootreducer,
     window.__REDUX_DEVTOOLS_EXTENSION__()
   // window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//console.log(store.getState())

