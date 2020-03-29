import { connect } from 'react-redux';
import PrestationDialog from './../Presentationals/Dialogs/prestation-dlg';
import addPres from './../../ReduxStuff/ActionsCreators/Prestations/addPres';
import fetchPres from './../../ReduxStuff/ActionsCreators/Prestations/fetchPres';
import deletePres from './../../ReduxStuff/ActionsCreators/Prestations/deletePres';

const mapStateToProps=(state)=>({
    prestations:state.prestations.prestations,
    loading:state.prestations.loadingPres,
})

const mapDispatchToProps=(dispatch)=>({
    onAdd(prestation){
        dispatch(
            addPres(prestation)
        )
    }
    ,
    fetchPrestation(id){
        dispatch(
            fetchPres(id)
        )
    }
    ,
    onDelete(prestation){
        dispatch(
            deletePres(prestation)
        )
    }
})

const mergeProps=(stateProps,dispatchProps,ownProps)=>({
    ...stateProps,
    ...dispatchProps,
    id:ownProps.id,
    onClose:ownProps.onClose,
})

const PrestationDlg=connect(mapStateToProps, mapDispatchToProps,mergeProps)(PrestationDialog)

export default PrestationDlg
