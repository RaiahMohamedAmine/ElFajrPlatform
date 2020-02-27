import c from '../constants'


const loadMalades=(state=false,action)=>{
    switch (action.type) {
        case c.REQUEST_MALADES:
            return true
        case c.RECEIVE_MALADES:
            return false
        default:
            return state
    }
}

export default loadMalades