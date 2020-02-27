import c from '../constants'


const setMalades=(malades=[])=>({
    type:c.SET_MALADES,
    malades: malades
})

export default setMalades