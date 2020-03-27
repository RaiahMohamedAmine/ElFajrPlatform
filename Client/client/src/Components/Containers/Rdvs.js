import { connect } from 'react-redux';
import RdvsList from './../Presentationals/rdvs-list';
import fetchRdvs from './../../ReduxStuff/ActionsCreators/Rdvs/fetchRdvs';



const mapStateToProps=(state)=>({
    rdvs:state.rdvs,
})

const mapDispatchToProps=(dispatch)=>({
    onDateChange(date){
        dispatch(
            fetchRdvs({
                dateRDV: date
            })
        )
    }
})

const Rdvs=connect(mapStateToProps,mapDispatchToProps)(RdvsList)

export default Rdvs