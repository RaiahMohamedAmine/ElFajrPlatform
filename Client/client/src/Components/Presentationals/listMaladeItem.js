import React from 'react'
import './listMaladeItem.css'


const ListMaladeItem= ({
    malade={},
    onClick=f=>f,
})=>{
    return <div className='list-item' onClick={e=>{
        onClick()}}>
        <div className='list-item-img'>
        <img className='list-item-img' alt ={"photo de "+ malade.nom} src={ "data:image/jpeg;base64,"+malade.photoIdentite}/>
        </div>
        <div className='list-item-right'>
            <p className='list-item-primary-text'>{malade.nom +" "+malade.prenom}</p>
            <p className='list-item-secondary-text'>{calculateAge(malade.dateNaissance)+"ans, "+malade.adresse}</p>
        </div>
    </div>
}

export default ListMaladeItem;

const calculateAge =(dateBirth)=>{
    const year = Number (dateBirth.substring(0,4));
    const month = Number (dateBirth.substring(5,7)-1);
    const day = Number(dateBirth.substring(8,10));
    var today = new Date();
    var age = today.getFullYear() - year ;
    
    if (today.getMonth ()<month ||(today.getMonth() ===month && today.getDate()<day))
        age--;
    return age;
};