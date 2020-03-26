import c from '../../constants'


const setRdvs=(rdvs=[])=>({
    type:c.SET_RDVS,
    rdvs:rdvs
})

export default setRdvs