import c from '../../constants'

const setPrestation =(prestations=[])=>({
    type:c.SET_PRESTATION,
    prestations:prestations
})

export default setPrestation