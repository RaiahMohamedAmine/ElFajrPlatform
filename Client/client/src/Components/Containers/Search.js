import { connect } from 'react-redux';
import Search from './../Presentationals/search';
import setMalades from './../../ReduxStuff/ActionsCreators/setMalades';
import fetchMalades from './../../ReduxStuff/ActionsCreators/fetchMalades';

const mapDispatchToProps= dispatch =>({
    onClick(data){
        dispatch(
          fetchMalades(data)
        )
    },
    onChange(data){
      data==="" ? 
      dispatch (setMalades ([])) :
      dispatch(
        fetchMalades(data)
      )
  }
})

const MySearch = connect(null,mapDispatchToProps)(Search)

export default MySearch