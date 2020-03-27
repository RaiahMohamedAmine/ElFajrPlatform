import c from '../constants'


const rdvm=(state={}, action)=>{
    switch (action.type) {
        case c.REQUEST_RDVM:
            return{
                ...state,
                loadingRdvm:true
            }
        case c.RECEIVE_RDVM:
            return{
                ...state,
                loadingRdvm:false
            }
        case c.SET_RDVM:
            return {
                ...state,
                rdvs: action.rdvm
            }
        default:
            return {...state}
    }
}

export default rdvm