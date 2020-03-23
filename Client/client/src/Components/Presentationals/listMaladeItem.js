import React from 'react'
import './listMaladeItem.css'


const ListMaladeItem= ({
    malade={},
    onClick=f=>f,
})=>{
    return <div className='list-item' onClick={e=>{
        console.log(malade)
        onClick()}}>
        <div className='list-item-img'>
        <img className='list-item-img' alt ={"photo de "+ malade.nom} src={ "data:image/jpeg;base64,"+malade.photoIdentite}/>
        </div>
        <div className='list-item-right'>
            <p className='list-item-primary-text'>{malade.nom +" "+malade.prenom}</p>
            <p className='list-item-secondary-text'>{malade.age+"ans, "+malade.adresse}</p>
        </div>
    </div>
}

export default ListMaladeItem;