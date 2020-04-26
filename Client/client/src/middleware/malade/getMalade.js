import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (data, alternative=f=>f) => {
    return axios({
            method : "POST" ,
            url : config.URL+":"+ config.PORT+"/malade/get",
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
        ).catch (err=>{
            alternative()
            toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
        });
} 