import {connect} from 'react-redux'
import ListMalades from './../Presentationals/WithRouter/list-malades';
import emptyMalades from './../../ReduxStuff/ActionsCreators/emptyMalades';

const mapStateToProps= state =>({
    malades: state.malades,
    loading: state.loadMalades
})

const mapDispatchToProps=(dispatch)=>({
    emptyList(){
        dispatch(
            emptyMalades()
        )
    }
})

const Malades= connect(mapStateToProps,mapDispatchToProps)(ListMalades)


export default Malades