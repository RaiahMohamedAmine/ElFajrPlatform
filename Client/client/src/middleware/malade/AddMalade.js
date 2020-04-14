import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';

export default (data) => {
    return axios ({
        method: "POST" ,
        data :data ,
        url : "http://localhost:5200/malade/add",
        headers : {
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'multipart/form-data'
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur',"L'ajout a échoué")
            throw new Error (res.data.message)
        }
        else{
            toastr.success('Succés','Malade Ajouté')   
            return res.data
        }
    });
};