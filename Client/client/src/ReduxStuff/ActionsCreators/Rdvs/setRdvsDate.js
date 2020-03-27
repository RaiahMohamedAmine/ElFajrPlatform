import c from '../../constants'

const setRdvsDate=(date)=>{
    return {
        type:c.SET_RDVS_DATE,
        dateRdvs:date
    }
}

export default setRdvsDate