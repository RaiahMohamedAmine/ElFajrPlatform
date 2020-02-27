import React from 'react'
import './listMaladeItem.css'


const ListMaladeItem= ({
    malade={},
    onClick=f=>f,
})=>{
    return <div className='list-item' onClick={e=>onClick()}>
        <div className='list-item-img'></div>
        <div className='list-item-right'>
            <p className='list-item-primary-text'>{malade.nom +" "+malade.prenom}</p>
            <p className='list-item-secondary-text'>{malade.age+"ans, "+malade.ville}</p>
        </div>
    </div>
}

export default ListMaladeItem;