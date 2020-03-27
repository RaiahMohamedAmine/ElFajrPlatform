import {connect} from 'react-redux'
import RdvDialog from '../Presentationals/Dialogs/rdv-dialog'
import addRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/addRdvm';
import deleteRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/deleteRdvm';
import fetchRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/fetchRdvm';

const mapStateToProps=(state)=>({
    rdvs:state.rdvm.rdvs,
    loading:state.rdvm.loadingRdvm,
    currentDate: state.rdvs.dateRdvs
})

const mapDispatchToProps=(dispatch)=>({
    onAdd(rdv){
        dispatch(
            addRdvm(rdv)
        )
    }
    ,
    fetchRdv(id){
        dispatch(
            fetchRdvm(id)
        )
    }
    ,
    onDelete(rdv){
        dispatch(
            deleteRdvm({
                ...rdv
            })
        )
    }
})

const mergeProps=(stateProps,dispatchProps,ownProps)=>({
    ...stateProps,
    ...dispatchProps,
    id:ownProps.id,
    onClose:ownProps.onClose,
})


const MaladeRdv= connect(mapStateToProps,mapDispatchToProps,mergeProps)(RdvDialog)

export default MaladeRdv