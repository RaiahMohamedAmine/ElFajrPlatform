import React, {useEffect} from 'react'
import './listMalades.css'
import ListMaladeItem from './listMaladeItem';


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

    return <div className="list-malades">
        <h2> Oops ! Aucun malade n'a été trouvé avec cet Id. Vous vous êtes surement trompé.</h2>
    </div>
    
}

export default ListMalades