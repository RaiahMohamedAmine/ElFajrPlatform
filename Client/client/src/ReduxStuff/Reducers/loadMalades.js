import c from '../constants'


const loadMalades=(state=false,action)=>{
    if (action.type ===c.REQUEST_MALADES) {
        return true
    } else {
        return state
    }
}

export default loadMalades