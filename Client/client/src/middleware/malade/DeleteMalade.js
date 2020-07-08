import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (id) => {
    axios({
        method :"POST" ,
        url : config.URL+":"+ config.PORT+"/malade/delete/"+id,
        headers :{
            Authorization : "Bearer ",// + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur', "La suppresion a échouée. Veuillez Reéssayez !")

        }else {
            toastr.success('Succés','Malade Supprimé')
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
}