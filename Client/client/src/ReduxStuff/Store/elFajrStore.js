import { createStore, combineReducers, applyMiddleware } from 'redux';
import malades from './../Reducers/malades';
import rdvs from './../Reducers/rdvs';
import thunkMiddleware from 'redux-thunk'
import rdvm from './../Reducers/rdvm';
import prestations from './../Reducers/prestations';
import {reducer} from 'react-redux-toastr'


const createElFajrStore= ()=> {
    return createStore(combineReducers({malades,rdvs,rdvm,prestations,toastr:reducer}),applyMiddleware(thunkMiddleware))
}

export default createElFajrStore