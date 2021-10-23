// Custom Middleware

// export const logger = store => next => action => console.log('Logger Works')


export function logger(store){
    return function(next){
        return function(action){
            console.log("[STATE SNAPSHOT]", store.getState())
            console.log("[ACTION]", action)
            next(action);
        }
    }
}