import c from '../constants'


const malades = (state = {
    malades:[],
    loading:false
}, action) => {
    switch (action.type) {
        case c.REQUEST_MALADES:
            return {
                ...state,
                loading:true
            }
        case c.RECEIVE_MALADES:
            return {
                ...state,
                loading:false
            }
        case c.SET_MALADES:
            return {
                ...state,
                malades:action.malades
            }
        case c.EMPTY_MALADES:
            return {
                ...state,
                malades:[]
            }
        default:
            return state
    }
}

export default malades