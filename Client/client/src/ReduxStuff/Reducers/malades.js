import c from '../constants'


const malades = (state = [], action) => {
    switch (action.type) {
        case c.SET_MALADES:
            return action.malades
        case c.EMPTY_MALADES:
            return []
        default:
            return state
    }
}

export default malades