import { createStore ,combineReducers ,applyMiddleware ,compose } from "redux";
import { reducer as Todoreducer } from "../features/Todos/reducer";
import { reducer as Counterreducer  } from "../features/Counter/reducer";
import thunk from "redux-thunk";


const rootreducer = combineReducers({
    todoState : Todoreducer,
    counterState : Counterreducer
});

// const logger1 = (store) => (next) => (action) => {
//    //console.time("p1")

//    if(typeof action === "function"){
//        return action(store.dispatch)
//    }
//     next(action);
//     //console.timeEnd("p1")
// } 

// const logger2 = (store) => (next) => (action) => {
//   next(action);

// } 


export const store = createStore(

    rootreducer,
    compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
   // window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//console.log(store.getState())

