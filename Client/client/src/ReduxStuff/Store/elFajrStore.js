import { createStore, combineReducers, applyMiddleware } from 'redux';
import malades from './../Reducers/malades';
import rdvs from './../Reducers/rdvs';
import loadMalades from './../Reducers/loadMalades';
import thunkMiddleware from 'redux-thunk'
import rdvm from './../Reducers/rdvm';


const createElFajrStore= ()=> {
    return createStore(combineReducers({malades,rdvs,loadMalades,rdvm}),applyMiddleware(thunkMiddleware))
}

export default createElFajrStore