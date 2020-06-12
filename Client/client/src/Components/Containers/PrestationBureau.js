import { connect } from 'react-redux';
import PrestationDialog from './../Presentationals/Dialogs/prestationBureau-dlg';
import addPres from './../../ReduxStuff/ActionsCreators/Prestations/addPres';
import fetchPresBureau from './../../ReduxStuff/ActionsCreators/Prestations/fetchPresBureau';
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
    fetchPrestation(){
        dispatch(
            fetchPresBureau()
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
    onClose:ownProps.onClose,
})

const PrestationBureauDlg=connect(mapStateToProps, mapDispatchToProps,mergeProps)(PrestationDialog)

export default PrestationBureauDlg
