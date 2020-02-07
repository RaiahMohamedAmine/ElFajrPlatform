import axios from 'axios' ;

export default (data) => {
    return axios({
            method : "POST" ,
            url : "http://localhost:5200/get",
            data : data ,
            headers: {
                Authorization : "Bearer",// + "token" ,
                crossDomaine : true
            }
        }).then ( res=> {
                if (res.data.type ==="Err") 
                    throw new Error (res.data.message)
                else {
                    console.log (res.data.malades);
                    return res.data.malades;
                }
            }
        )
} 