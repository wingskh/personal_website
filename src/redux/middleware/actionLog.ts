import { Middleware } from "redux"

export const actionLog : Middleware = (store) => (next) => (action) => {
    console.log('Original State:', store.getState())
    console.log('Fire action:', action)
    next(action)
    console.log('Updated State:', store.getState())
}