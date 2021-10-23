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