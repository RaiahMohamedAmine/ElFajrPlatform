import {connect} from 'react-redux'
import ListMalades from './../Presentationals/WithRouter/list-malades';
import emptyMalades from './../../ReduxStuff/ActionsCreators/Malades/emptyMalades';

const mapStateToProps= state =>({
    malades: state.malades.malades,
    loading: state.malades.loading
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