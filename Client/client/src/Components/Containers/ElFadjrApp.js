import { connect } from 'react-redux';
import fetchRdvs from './../../ReduxStuff/ActionsCreators/Rdvs/fetchRdvs';
import ElFadjr from '../../ElFadjrApp'


const mapDispatchToProps=(dispatch)=>({
    getRdv(date) {
        dispatch(fetchRdvs(
            {
                dateRDV: date
            }
        ))
    }
})

const ElFadjrApp =connect(null, mapDispatchToProps)(ElFadjr)

export default ElFadjrApp
