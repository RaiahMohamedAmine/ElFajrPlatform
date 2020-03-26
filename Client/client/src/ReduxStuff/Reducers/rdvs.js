import c from '../constants'


const rdvs=(state={}, action)=>{
    switch (action.type) {
        case c.REQUEST_RDVM:
            return {
                ...state,
                loading:true,
            }
        case c.RECEIVE_RDVS:
            return {
                ...state,
                loading:false,
            }
        case c.SET_RDVS:
            return {
                ...state,
                rdvs:action.rdvs,
            }
        default:
            return state
    }
}

export default rdvs