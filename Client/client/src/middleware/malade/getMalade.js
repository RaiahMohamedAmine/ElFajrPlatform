import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';

export default (data) => {
    return axios({
            method : "POST" ,
            url : "http://localhost:5200/malade/get",
            data : data ,
            headers: {
                Authorization : "Bearer",// + "token" ,
                crossDomaine : true
            }
        }).then ( res=> {
                if (res.data.type ==="Err") 
                    throw new Error (res.data.message)
                else {
                    return res.data.malades;
                }
            }
        )
} 