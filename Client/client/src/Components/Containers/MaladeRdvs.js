import {connect} from 'react-redux'
import RdvDialog from '../Presentationals/Dialogs/rdv-dialog'
import addRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/addRdvm';
import deleteRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/deleteRdvm';
import fetchRdvm from './../../ReduxStuff/ActionsCreators/Rdv-malade/fetchRdvm';

const mapStateToProps=(state,ownProps)=>({
    rdvs:state.rdvm.rdvs,
    loading:state.rdvm.loading,
    onClose: ownProps.onClose
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


const MaladeRdv= connect(mapStateToProps,mapDispatchToProps)(RdvDialog)

export default MaladeRdv