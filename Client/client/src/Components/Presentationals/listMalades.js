import React, {useEffect} from 'react'
import './listMalades.css'
import ListMaladeItem from './listMaladeItem';
import { toastr } from 'react-redux-toastr';


const ListMalades = ({
    malades = [],
    loading=false,
    onClick = f => f,
    emptyList=f=>f,
}) => {
    useEffect(()=>{
        emptyList()
    },[emptyList])
    if (malades!==null){
        if (malades.length===undefined)
        {
            return <div className='list-malades'>
            {
                loading ? <span className='load'></span>
                : <ListMaladeItem key={malades._id} malade={malades} onClick={e=>onClick(malades)}/>
            }
            </div>
        }
        return <div className='list-malades'>
            {
                loading ? <span className='load'></span>
                :malades.map((malade, i) => <ListMaladeItem key={i} malade={malade} onClick={e=>onClick(malade)}/>)
            }
        </div>
    }
  //  toastr.error('Erreur',"Aucun Malade trouvé avec cet ID")
    return <div></div>
}

export default ListMalades