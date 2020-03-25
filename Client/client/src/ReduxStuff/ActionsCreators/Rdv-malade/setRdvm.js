import c from '../../constants'

const setRdvm=(rdvm=[])=>{
    return {
        type:c.SET_RDVM,
        rdvm:rdvm
    }
}

export default setRdvm