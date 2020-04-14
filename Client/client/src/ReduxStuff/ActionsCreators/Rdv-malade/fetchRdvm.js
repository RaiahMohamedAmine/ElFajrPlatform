import axios from 'axios';
import setRdvm from './setRdvm';
import receiveRdvm from './receiveRdvm';
import requestRdvm from './requestRdvm';
import GetRDVById from '../../../middleware/rdv/GetRDVById';


const fetchRdvm = (id) => {
    return function (dispatch) {
        dispatch(requestRdvm())
        GetRDVById(id)
            .then(res => dispatch(setRdvm(res)))
            .then(res => dispatch(receiveRdvm()))
    }
}

export default fetchRdvm