import c from '../constants'


const loadRdvs=(state=false,action)=>{
    if (action.type ===c.REQUEST_RDVS) {
        return true
    } else {
        return state
    }
}

export default loadRdvs