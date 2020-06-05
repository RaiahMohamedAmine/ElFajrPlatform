import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (id) => {
    return axios ({
        method: "POST" ,
        url : config.URL+":"+ config.PORT+"/malade/print/"+id,
        headers : {
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur',"L'impression a échoué")
            throw new Error (res.data.message)
        }
        else{
            toastr.success('Succés','Impression en cours')   
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};