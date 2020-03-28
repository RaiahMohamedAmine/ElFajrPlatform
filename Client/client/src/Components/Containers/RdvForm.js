import { connect } from 'react-redux';
import fetchRdvs from './../../ReduxStuff/ActionsCreators/Rdvs/fetchRdvs';
import RDVForm from './../Presentationals/Forms/rdv-form';


const mapStateToProps=(state)=>({
    currentDate:state.rdvs.dateRdvs
})

const mapDispatchToProps=(dispatch)=>({
    updateRdvs(currentDate){
        dispatch(
            fetchRdvs({
                dateRDV:currentDate
            })
        )
    }
})

const mergeProps=(propsFromState,propsFromDispatch,ownProps)=>({
    ...propsFromState,
    ...propsFromDispatch,
    onAdd:ownProps.onAdd,
    idMalade:ownProps.idMalade
})

const RdvForm=connect(mapStateToProps,mapDispatchToProps,mergeProps)(RDVForm)

export default RdvForm