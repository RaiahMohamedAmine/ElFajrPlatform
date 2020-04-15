import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (data) => {
    axios({
        method :"POST" ,
        data : data ,
        url : config.URL+":"+ config.PORT+"/malade/modify",
        headers :{
            Authorization : "Bearer ",// + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur','La Modification a echoué ')
            throw new Error(res.data.message)
        }
        else{
            toastr.success('Succés','Malade modifié')
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
}