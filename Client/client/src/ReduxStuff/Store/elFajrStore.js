import { createStore, combineReducers } from 'redux';
import malades from './../Reducers/malades';
import rdvs from './../Reducers/rdvs';
import loadMalades from './../Reducers/loadMalades';
import loadRdvs from './../Reducers/loadRdvs';


const createElFajrStore= ()=> {
    return createStore(combineReducers({malades,rdvs,loadMalades,loadRdvs}))
}

export default createElFajrStore