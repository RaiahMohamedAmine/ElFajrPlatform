import { connect } from 'react-redux';
import Search from './../Presentationals/search';
import setMalades from './../../ReduxStuff/ActionsCreators/setMalades';
import fetchMalades from './../../ReduxStuff/ActionsCreators/fetchMalades';
import fetchMaladesById from './../../ReduxStuff/ActionsCreators/fetchMaladesById';


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
      if (parseInt(data)==data) //Case data is a digit
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