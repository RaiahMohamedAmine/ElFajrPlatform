import requestRdvm from './requestRdvm';
import receiveRdvm from './receiveRdvm';
import fetchRdvm from './fetchRdvm';
import DeleteRDV from '../../../middleware/rdv/DeleteRDV';


const deleteRdvm = (data) => {
    return function (dispatch) {
        dispatch(requestRdvm())
        DeleteRDV(data)
       .then(response => dispatch(fetchRdvm(data.idMalade)))
             .then(response => dispatch(receiveRdvm()))
    }
}

export default deleteRdvm