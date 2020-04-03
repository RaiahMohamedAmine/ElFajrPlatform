import setMalades from './setMalades';
import requestMalade from './requestMalades';
import receiveMalades from './receiveMalades';
import  axios from 'axios';

const fetchMalades = (id) => {
        return function (dispatch) {
                dispatch(requestMalade())
                axios({
                        method : "POST" ,
                        url : "http://localhost:5200/malade/get/forItem/"+id,
                        headers: {
                            Authorization : "Bearer",// + "token" ,
                            crossDomaine : true
                        }
                    }).then(response => dispatch(setMalades(response.data.malade)))
                    .then(response => dispatch(receiveMalades()))
        }

}

export default fetchMalades