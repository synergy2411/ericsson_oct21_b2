export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"

export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT" 

// Action Creator
export function onDeleteResult(index){
    return {
        type : DELETE_RESULT,
        index
    }
}


export function onSubtractCounter(value){
    return {
        type : SUBTRACT_COUNTER,
        value 
    }
}

export function subtractWithDelay(value){
    return function(dispatch){
        // Async task - XHR Call, timers, any Async Code write here
        // fetch().then(response=>response.json()).then(result => dispatch(onResponseArrive(result)))
        setTimeout(() => {
            dispatch(onSubtractCounter(value))
        }, 3000);
    }
}