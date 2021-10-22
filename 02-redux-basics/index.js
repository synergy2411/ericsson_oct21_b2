// ES6 imports
// import redux from 'redux';

// CommonJS Module
const redux = require('redux');

const initialState = {
    counter : 0
}

// Reducer
function reducerFn(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_COUNTER"){
        return {
            counter : state.counter + action.value
        }
    }else if(action.type === "SUBTRACT_COUNTER"){
        return { 
            counter : state.counter - action.value
        }
    }
    return state;
}

// Store
const store = redux.createStore(reducerFn)

// Subscribe
store.subscribe(() => {
    console.log("[SUBSCRIBE STATE] ", store.getState())
})

// Dispatch Actions
store.dispatch({type : "INCREMENT"})
// console.log("[STATE - AFTER INCREMENT] ", store.getState())

store.dispatch({type : "DECREMENT"})
// console.log("[STATE - AFTER DECREMENT] ", store.getState())

store.dispatch({type : "ADD_COUNTER", value : 10})

store.dispatch({type : "SUBTRACT_COUNTER", value : 5})