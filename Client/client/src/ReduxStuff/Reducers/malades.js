import c from '../constants'


const malades=(state=[], action)=>{
    if (action.type === c.SET_MALADES) {
        return action.malades
    } else {
        return state
    }
}

export default malades