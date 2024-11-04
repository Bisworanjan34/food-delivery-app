import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import myReducer from '../redux/createSlice'
let myStore=configureStore({
    reducer:{
        reducer1:myReducer
    }
},applyMiddleware(logger))
export default myStore