import c from '../constants'


const rdvs=(state={
    rdvs:[],
    loadingRdvs:false
}, action)=>{
    switch (action.type) {
        case c.REQUEST_RDVS:
            return {
                ...state,
                loadingRdvs:true,
            }
        case c.RECEIVE_RDVS:
            return {
                ...state,
                loadingRdvs:false,
            }
        case c.SET_RDVS:
            return {
                ...state,
                rdvs:action.rdvs,
            }
        default:
            return {...state}
    }
}

export default rdvs