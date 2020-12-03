import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (data) => {
    return axios({
        method: "POST",
        data: data,
        url: config.URL+":"+ config.PORT+"/prestation/add",
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err"){
            toastr.error('Erreur', "L'ajout du malade a échoué. Veuillez Reéssayez !")

        }
        else{
            toastr.success("Succés",'Préstation Ajoutée')   
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};