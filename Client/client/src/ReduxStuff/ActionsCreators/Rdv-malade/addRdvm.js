import requestRdvm from './requestRdvm';
import fetchRdvm from './fetchRdvm';
import receiveRdvm from './receiveRdvm';
import AddRDV from '../../../middleware/rdv/AddRDV';


const addRdvm = (rdv) => {
    return function (dispatch) {
        dispatch(requestRdvm())
        AddRDV(rdv)
            .then(response => dispatch(fetchRdvm(rdv.idMalade)))
            .then(response => dispatch(receiveRdvm()))
    }
}

export default addRdvm