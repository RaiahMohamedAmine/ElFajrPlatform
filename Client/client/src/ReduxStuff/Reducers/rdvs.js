import c from '../constants'


const rdvs=(state={
    rdvs:[],
    loadingRdvs:false,
    dateRdvs:"",
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
        case c.SET_RDVS_DATE:
            return {
                ...state,
                dateRdvs:action.dateRdvs,
            }
        default:
            return {...state}
    }
}

export default rdvs