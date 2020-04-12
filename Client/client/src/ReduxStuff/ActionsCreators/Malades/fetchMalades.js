import setMalades from './setMalades';
import requestMalade from './requestMalades';
import receiveMalades from './receiveMalades';
import  axios from 'axios';

const fetchMalades = (key) => {
        var data ={key};
        return function (dispatch) {
                dispatch(requestMalade())
                axios({
                        method : "POST" ,
                        url : "http://localhost:5200/malade/get",
                        data : data ,
                        headers: {
                            Authorization : "Bearer",// + "token" ,
                            crossDomaine : true
                        }
                    }).then(response => dispatch(setMalades(response.data.malades)))
                    .then(response => dispatch(receiveMalades()))
        }

}

export default fetchMalades