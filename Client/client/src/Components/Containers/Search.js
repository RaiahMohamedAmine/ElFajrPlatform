import { connect } from 'react-redux';
import Search from './../Presentationals/search';
import setMalades from './../../ReduxStuff/ActionsCreators/Malades/setMalades';
import fetchMalades from './../../ReduxStuff/ActionsCreators/Malades/fetchMalades';
import fetchMaladesById from './../../ReduxStuff/ActionsCreators/Malades/fetchMaladesById';


const mapDispatchToProps = dispatch => ({
  onClick(data) {
    dispatch(
      fetchMalades(data)
    )
  },
  onChange(data) {
    if(data === "") 
      dispatch(setMalades([])) ;
    else{
      if (!isNaN(data)) //Case data is a digit
        dispatch(fetchMaladesById(data))
      else
        if(data.length>2)
          dispatch(fetchMalades(data))
        else
          dispatch(setMalades([])) ;
    }
  }
})

const MySearch = connect(null, mapDispatchToProps)(Search)

export default MySearch