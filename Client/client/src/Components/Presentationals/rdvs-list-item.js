import React from 'react'
import './rdvs-list-item.css'

const ListRdvsItem = ({
    rdv
}) => {
    return <div className='list-rdvs-item'>
        <div className='item-photo' style={{ backgroundImage: "url(data:image/jpeg;base64," + rdv.photoIdentite + ")" }}></div>
        <div className='item-info'>
            <p>{rdv.nom + " " + rdv.prenom}</p>
            <p>{"Tel: " + rdv.tel}</p>
            <p>{"A "+rdv.lieu+","+rdv.motif}</p>
        </div>
    </div>
}

export default ListRdvsItem