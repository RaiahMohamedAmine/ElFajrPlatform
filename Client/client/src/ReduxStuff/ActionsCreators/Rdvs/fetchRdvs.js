import '../../constants'
import setRdvs from './setRdvs';
import receiveRdvs from './receiveRdvs';
import requestRdvs from './requestRdvs';
import axios from 'axios';

const fetchRdvs = (date) => {
        return function (dispatch) {
                dispatch(requestRdvs())
                axios({
                        method: "POST",
                        data :date,
                        url : "http://localhost:5200/getRdvByDate",
                        headers :{
                            Authorization : "Bearer ",// + "token",
                            crossDomaine : true,
                            'Content-Type' : 'application/json'
                        }
                    }).then(response =>dispatch(setRdvs(response.data.rdvs)))
                    .then(response => dispatch(receiveRdvs()))
        }
}

export default fetchRdvs