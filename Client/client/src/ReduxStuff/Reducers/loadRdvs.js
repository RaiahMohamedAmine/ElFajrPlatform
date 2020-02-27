import c from '../constants'


const loadRdvs=(state=false,action)=>{
    switch (action.type) {
        case c.REQUEST_RDVS:
            return true
        case c.RECEIVE_RDVS:
            return false
        default:
            return state
    }
}

export default loadRdvs