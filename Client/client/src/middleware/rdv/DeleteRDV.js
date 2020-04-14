import axios from 'axios';
import { toastr } from 'react-redux-toastr'

export default (data)=>{
    console.log (data)
    return axios ({
        method: "POST",
        data : data,
        url : "http://localhost:5200/rdv/delete",
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.data.type==="Err"){
            toastr.error('Erreur','La suppression a echoué')
            throw new Error (res.data.message);
        }
        else{
            toastr.success('Succés','Rendez-vous supprimé')
            console.log (res.data);
        }
    })
};