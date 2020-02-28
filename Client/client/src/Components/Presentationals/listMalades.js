import React from 'react'
import './listMalades.css'
import ListMaladeItem from './listMaladeItem';


const ListMalades = ({
    malades = [],
    loading=false,
    onClick = f => f,
}) => {
    return <div className='list-malades'>
        {
            loading ? <span className='load'></span>
            :malades.map((malade, i) => <ListMaladeItem key={i} malade={malade} onClick={e=>onClick(malade)}/>)
        }
    </div>
}

export default ListMalades