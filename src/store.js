import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import postReducer from "./post/postSlice"

export default configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})