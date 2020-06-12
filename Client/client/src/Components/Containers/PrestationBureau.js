import { connect } from 'react-redux';
import PrestationDialog from './../Presentationals/Dialogs/prestationBureau-dlg';
import fetchPresBureau from './../../ReduxStuff/ActionsCreators/Prestations/fetchPresBureau';
import addPresBureau from './../../ReduxStuff/ActionsCreators/Prestations/addPresBureau';
import deletePresBureau from './../../ReduxStuff/ActionsCreators/Prestations/deletePresBureau';

const mapStateToProps=(state)=>({
    prestations:state.prestations.prestations,
    loading:state.prestations.loadingPres,
})

const mapDispatchToProps=(dispatch)=>({
    onAdd(prestation){
        dispatch(
            addPresBureau(prestation)
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
            deletePresBureau(prestation)
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
