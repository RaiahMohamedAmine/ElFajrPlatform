import {connect} from 'react-redux'
import ListMalades from './../Presentationals/WithRouter/list-malades';

const mapStateToProps= state =>({
    malades: state.malades,
    loading: state.loadMalades
})

const Malades= connect(mapStateToProps)(ListMalades)


export default Malades