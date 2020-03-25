import { createStore, combineReducers, applyMiddleware } from 'redux';
import malades from './../Reducers/malades';
import rdvs from './../Reducers/rdvs';
import loadMalades from './../Reducers/loadMalades';
import loadRdvs from './../Reducers/loadRdvs';
import thunkMiddleware from 'redux-thunk'
import rdvm from './../Reducers/rdvm';


const createElFajrStore= ()=> {
    return createStore(combineReducers({malades,rdvs,loadMalades,loadRdvs,rdvm}),applyMiddleware(thunkMiddleware))
}

export default createElFajrStore