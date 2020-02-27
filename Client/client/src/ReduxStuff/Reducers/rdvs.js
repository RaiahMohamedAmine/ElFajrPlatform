import c from '../constants'


const rdvs=(state=[], action)=>{
    if (action.type === c.SET_RDVS) {
        return action.rdvs
    } else {
        return state
    }
}

export default rdvs